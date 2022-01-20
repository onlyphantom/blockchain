import React, { useEffect, useState, useCallback } from 'react';
import { Form, Input, Timeline, Card, Button, Space, Rate, Divider } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';


const genHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

const genInt = max => {
    return Math.floor(Math.random() * max) + 1;
}

const genUnixEpoch = () => {
    return Math.floor(Date.now() / 1000).toString(16)
}

let findNonce = async (rawString, difficulty, nonce) => {

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

    const [blockDifficulty, setBlockDifficulty] = useState({
        0: 2,
        1: 3,
        2: 4,
    });

    useEffect(() => {
        if (!state[0].isMining && state[0].hash.slice(-1) !== '.') {
            console.log("state[0] updated. Re-mining...");
            mining(1)
        }
    }, [state[0].hash])

    useEffect(() => {
        if (!state[1].isMining && state[1].hash.slice(-1) !== '.') {
            console.log("state[1] updated. Re-mining...");
            mining(2)
        }
    }, [state[1].hash])

    const mining = (blockInd) => {
        const merkleRoot = state[blockInd].merkleRoot;
        const prevHash = blockInd === '0' ? '000' : state[blockInd - 1].hash;
        let nonce = state[blockInd].nonce;
        const rawString = `${merkleRoot}${prevHash}${nonce}${state[blockInd].epoch}`;

        const diff = blockDifficulty[blockInd];

        const interval = setInterval(async () => {
            setState(prevState => ({
                ...prevState,
                [blockInd]: {
                    ...prevState[blockInd],
                    hash: `${nonce}: Finding the right nonce... please be patient.`,
                    isMining: true,
                    epoch: genUnixEpoch()
                }
            }))

            const hash_found = await findNonce(rawString, diff, nonce);
            if (hash_found) {
                clearInterval(interval);
                setState(prevState => ({
                    ...prevState,
                    [blockInd]: {
                        ...prevState[blockInd],
                        hash: hash_found,
                        isMining: false,
                        nonce: nonce,
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

            mining(blockInd)

        },
        [state]
    )


    return (
        <div>
            <Divider dashed orientation="left">Mining Difficulty</Divider>
            {
                Object.entries(blockDifficulty).map(([ind, diff]) =>
                    <Rate
                        key={ind}
                        defaultValue={diff}
                        character={({ index }) => index + 1}
                        allowClear={false}
                        onChange={e =>
                            // console.log(`Difficulty for ${ind} changed to ${e}. Need to update components.`)
                            setBlockDifficulty(prev => ({
                                ...prev,
                                [ind]: e
                            }))
                        } />
                )
            }
            <p>
                The default block difficulty of 2,3, and 4 may take a while to mine. <br />
                If this isn't desired or if you're on a limited computer, you can reduce the difficulty by decrementing the numbers above.
            </p>


            <Divider dashed orientation="left">Fundraising Blockchain</Divider>
            <Timeline>
                {
                    Object.entries(blockDifficulty).map(([ind, difficulty]) => {
                        return <Timeline.Item key={ind}>
                            <Card
                                title={ind === 0 ? "Genesis Block (Block 0)" : `Block ${ind}`}
                                extra={
                                    <Button
                                        type="primary"
                                        loading={Object.values(state).some(x => x.isMining)}
                                        onClick={() => mining(ind)}
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
                                <p>{ind === '0' ? '0000000000000000000000000000000000000000000000000000000000000000' : state[ind - 1].hash}</p>
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
        </div>
    )
}

export default Blockchain
