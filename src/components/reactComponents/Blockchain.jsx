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

const Blockchain = () => {
    const [form1] = Form.useForm();

    const [state, setState] = useState({
        0: {
            hash: 'Hit the Mine ⛏ button or Add a Donation 💰',
            nonce: 0,
            merkleRoot: 'Add a Donation 💰',
            isMining: false,
            epoch: genUnixEpoch()
        },
        1: {
            hash: '',
            nonce: 0,
            merkleRoot: '',
            isMining: false
        },
        2: {
            hash: '',
            nonce: 0,
            merkleRoot: '',
            isMining: false
        },
    })

    useEffect(() => {

    }, [])

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
                <Timeline.Item>
                    <Card title="Genesis Block (Block 0)"
                        extra={
                            <Button
                                type="primary"
                                loading={state[0].isMining}
                                onClick={() => mining(0, 2)}
                                style={{ fontWeight: 600 }}
                            >
                                <span style={{ 'marginRight': 10 }}>Mine</span> ⛏
                            </Button>
                        }>
                        <h6>Fundraising Ledger</h6>
                        <Form
                            form={form1}
                            name="fundraising"
                            layout="vertical"
                            onValuesChange={async () => {
                                computeMerkleRoot(form1.getFieldsValue(true), 0, 2)
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
                                                    <MinusCircleOutlined onClick={() => remove(name)} />
                                                </Space>
                                            ))}

                                            {
                                                state[0].isMining ?
                                                    <div>
                                                        <h6>Mining... ⛏</h6>
                                                        <p>Please be patient. This may take a while.</p>
                                                    </div>
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
                        <p>{state[0].merkleRoot}</p>
                        <h6>Unix Epoch Time</h6>
                        <p>{state[0].epoch}</p>
                        <h6>Difficulty</h6>
                        <p>2</p>
                        <h6>Previous Block Header</h6>
                        <p>0000000000000000000000000000000000000000000000000000000000000000</p>
                        <h6>Nonce</h6>
                        {
                            state[0].isMining ?
                                <p>Finding nonce...</p>
                                : <p>{state[0].nonce}</p>
                        }
                        <h6>Hash</h6>
                        <p style={{ color: '#263545', fontWeight: 600 }}>
                            {state[0].hash}
                        </p>
                    </Card>
                </Timeline.Item>
                <Timeline.Item>
                    <Card title="Block 1" extra={<a href="#">Mine ⛏ </a>}>
                        <h6>Version (4 bytes)</h6>
                        <p>04000000</p>
                        <h6>Merkle Root Hash (32 bytes)</h6>
                        <p>61B2EF617C97A3B87533FEC5CEE5327D</p>
                        <h6>Unix Epoch Time</h6>
                        <p>61DFE69F</p>
                        <h6>Difficulty</h6>
                        <p>3</p>
                        <h6>Previous Block Header</h6>
                        <p>00000000000000000000000000000000</p>
                        <h6>Nonce</h6>
                        <p>0</p>
                        <h6>Hash</h6>
                        <p style={{ color: 'green', fontWeight: 600 }}>00BA769D82940D3AB2AFFB184AEB9767</p>
                    </Card></Timeline.Item>
                <Timeline.Item>
                    <Card title="Block 2" extra={<a href="#">Mine ⛏</a>}>
                        <h6>Version (4 bytes)</h6>
                        <p>04000000</p>
                        <h6>Merkle Root Hash (32 bytes)</h6>
                        <p>D0A852DFA0AA3B88B32A67397FE141EA</p>
                        <h6>Unix Epoch Time</h6>
                        <p>61E14BD6</p>
                        <h6>Difficulty</h6>
                        <p>4</p>
                        <h6>Previous Block Header</h6>
                        <p>00000000000000000000000000000000</p>
                        <h6>Nonce</h6>
                        <p>0</p>
                        <h6>Hash</h6>
                        <p style={{ color: 'green', fontWeight: 600 }}>00BA769D82940D3AB2AFFB184AEB9767</p>
                    </Card>
                </Timeline.Item>
            </Timeline>

            <p>
                A small disclaimer here is that I've simplied the Difficulty representation to a single integer, but
                in the original Bitcoin protocol, this is a 32-bit unsigned integer. Read more of this in the previous
                section discussing the difficulty (<code>nBits</code>) field.
            </p>
        </div>
    )
}

export default Blockchain
