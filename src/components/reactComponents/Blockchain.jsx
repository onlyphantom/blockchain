import React, { useEffect, useState, useCallback } from 'react';
import { Form, Input, Timeline, Card, Button, Space, Collapse, message } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';


const genHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

const genInt = max => {
    return Math.floor(Math.random() * max) + 1;
}

const genUnixEpoch = () => {
    return Math.floor(Date.now() / 1000).toString(16)
}

const findNonce = async (rawString, difficulty, nonce) => {

    const SHA256 = require('crypto-js/sha256');
    let str = rawString + nonce;
    let hashString = SHA256(str).toString();

    if (hashString.startsWith('0'.repeat(difficulty))) {
        console.log(`found a block at ${nonce}: hash ${hashString}`);
        return hashString;
    }
}

let initValues = {
    hash: 'Hit the Mine ⛏ button or Add a Donation 💰.',
    nonce: 0,
    merkleRoot: 'Add a Donation 💰',
    isMining: false,
    epoch: genUnixEpoch()
}

const blockDifficulty = [2, 3, 4]

const Blockchain = () => {
    const [form1] = Form.useForm();
    const [form2] = Form.useForm();
    const [form3] = Form.useForm();
    const forms = [form1, form2, form3];

    const [state, setState] = useState({
        0: {
            ...initValues
        },
        1: {
            ...initValues
        },
        2: {
            ...initValues
        },
    })

    // hook runs whenever state[0] is updated
    useEffect(() => {
        if (!state[0].isMining && state[0].hash.slice(-1) !== '.') {
            console.log("state[0] updated. Re-mining...");
            mining(1, 3)
        }
    }, [state[0].hash])

    useEffect(() => {
        if (!state[1].isMining && state[1].hash.slice(-1) !== '.') {
            console.log("state[1] updated. Re-mining...");
            mining(2, 4)
        }
    }, [state[1].hash])

    const mining = (blockInd, difficulty) => {
        const merkleRoot = state[blockInd].merkleRoot;
        const prevHash = blockInd === 0 ? '000' : state[blockInd - 1].hash;
        let nonce = state[blockInd].nonce;
        const rawString = `${merkleRoot}${prevHash}${nonce}${state[blockInd].epoch}`;

        const interval = setInterval(async () => {
            setState(prevState => ({
                ...prevState,
                [blockInd]: {
                    ...prevState[blockInd],
                    hash: `${nonce}: Finding the right nonce... please be patient.`,
                    isMining: true
                }
            }))

            const hash_found = await findNonce(rawString, difficulty, nonce);
            if (hash_found) {
                clearInterval(interval);
                setState(prevState => ({
                    ...prevState,
                    [blockInd]: {
                        ...prevState[blockInd],
                        nonce: nonce,
                        isMining: false,
                        hash: hash_found
                    }
                }))
            }
            nonce++;
        }
            , 1);

    }

    const computeMerkleRoot = useCallback(
        (values, blockInd, difficulty) => {
            const { MerkleTree } = require('merkletreejs');
            const SHA256 = require('crypto-js/sha256');
            console.log(values.donors)
            const leaves = values.donors.map(x => SHA256(`${x.address} +${x.amount}`))
            const tree = new MerkleTree(leaves, SHA256);
            const root = tree.getHexRoot()

            setState(prevState => ({
                ...prevState,
                [blockInd]: {
                    ...prevState[blockInd],
                    merkleRoot: root
                }
            }))

            mining(blockInd, difficulty)

        },
        [state]
    )


    return (
        <div>
            <Timeline>
                {
                    blockDifficulty.map((difficulty, ind) => {
                        return <Timeline.Item>
                            <Card
                                title={ind === 0 ? "Genesis Block (Block 0)" : `Block ${ind}`}
                                extra={
                                    <Button
                                        type="primary"
                                        loading={Object.values(state).some(x => x.isMining)}
                                        onClick={() => mining(ind, difficulty)}
                                        style={{ fontWeight: 600 }}
                                    >
                                        <span style={{ 'marginRight': 10 }}>Mine</span> ⛏
                                    </Button>
                                }
                                className={state[ind].isMining ? 'loadingGradient' : ''}
                            >
                                <h6>Fundraising Ledger</h6>
                                <Form
                                    form={forms[ind]}
                                    name="fundraising"
                                    layout="vertical"
                                    onValuesChange={async () => {
                                        computeMerkleRoot(forms[ind].getFieldsValue(true), ind, difficulty)
                                    }}>
                                    <Form.List name="donors">
                                        {(fields, { add, remove }) => {
                                            return (
                                                <div>
                                                    {fields.map(({ key, name, fieldKey, ...field }) => (
                                                        <Space
                                                            key={key}
                                                            style={{ display: 'flex', marginBottom: 8 }}
                                                            align="baseline"
                                                        >
                                                            <Form.Item
                                                                {...field}
                                                                name={[name, 'address']}
                                                                label="Wallet Address"
                                                                fieldKey={[fieldKey, 'address']}
                                                                style={{ width: '300px' }}
                                                                rules={[{ required: true, message: 'Please input wallet address of donor' }]}
                                                            >
                                                                <Input placeholder="Address" />
                                                            </Form.Item>
                                                            <Form.Item
                                                                {...field}
                                                                name={[name, 'amount']}
                                                                label="Donation $"
                                                                fieldKey={[fieldKey, 'amount']}
                                                                rules={[{ required: true, message: 'Please input 💰 donation amount' }]}
                                                            >
                                                                <Input placeholder="Donation Amount 💰" />
                                                            </Form.Item>
                                                            {
                                                                !Object.values(state).some(x => x.isMining) &&
                                                                <MinusCircleOutlined onClick={() => remove(name)} />
                                                            }
                                                        </Space>
                                                    ))}

                                                    {
                                                        state[ind].isMining ?
                                                            <div>
                                                                <h6>Mining... ⛏</h6>
                                                                <p>Please be patient. This may take a while.</p>
                                                            </div>
                                                            : Object.values(state).some(x => x.isMining)
                                                                ? "Please wait for other blocks to complete mining."
                                                                : <Form.Item>
                                                                    <Button
                                                                        type="dashed"
                                                                        onClick={() => {
                                                                            add({ address: genHex(32), amount: genInt(100) })
                                                                            setState(prevState => ({
                                                                                ...prevState,
                                                                                0: {
                                                                                    ...prevState[0],
                                                                                    epoch: genUnixEpoch()
                                                                                }
                                                                            }))
                                                                        }}
                                                                        block
                                                                        icon={<PlusOutlined />}
                                                                    >
                                                                        Add Donation Record 💰
                                                                    </Button>
                                                                </Form.Item>
                                                    }
                                                </div>
                                            );
                                        }}
                                    </Form.List>
                                </Form>
                                <h6>Version (4 bytes)</h6>
                                <p>04000000</p>
                                <h6>Merkle Root Hash (32 bytes)</h6>
                                <p>{state[ind].merkleRoot}</p>
                                <h6>Unix Epoch Time</h6>
                                <p>{state[ind].epoch}</p>
                                <h6>Difficulty</h6>
                                <p>{difficulty}</p>
                                <h6>Previous Block Header</h6>
                                <p>{ind === 0 ? '0000000000000000000000000000000000000000000000000000000000000000' : state[ind - 1].hash}</p>
                                <h6>Nonce</h6>
                                {
                                    state[ind].isMining ?
                                        <p>Finding nonce...</p>
                                        : <p>{state[ind].nonce}</p>
                                }
                                <h6>Hash</h6>
                                <p style={{ color: '#263545', fontWeight: 600 }}>
                                    {state[ind].hash}
                                </p>
                            </Card>
                        </Timeline.Item>
                    })
                }

            </Timeline>

            <p>
                A small disclaimer here is that I've simplied the Difficulty representation to a single integer, but
                in the original Bitcoin protocol, this is a 32-bit unsigned integer. Read more of this in the previous
                section discussing the difficulty (<code>nBits</code>) field. The equivalent of the current difficulty level
                would be closer to finding a nonce that yields a hash with 17-20 leading zeroes where in this example we used
                4 leading zeroes to reduce the computational resources required.
            </p>
        </div>
    )
}

export default Blockchain
