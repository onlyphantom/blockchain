import React, { useEffect, useState } from 'react';
import { Form, Input, Timeline, Card, Button, Space, Collapse, message } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';


const genHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

const genInt = max => {
    return Math.floor(Math.random() * max) + 1;
}

const Blockchain = () => {
    const [form1] = Form.useForm();

    const [merkleRoots, setMerkleRoots] = useState({
        0: '09BA769D82940D3AB2AFFB184AEB9767',
        1: '',
        2: '',
    })

    const [hashes, setHashes] = useState({
        0: '',
        1: '',
        2: '',
    })


    const computeMerkleRoot = (values) => {
        const { MerkleTree } = require('merkletreejs');
        const SHA256 = require('crypto-js/sha256');
        console.log(values)
    }


    return (
        <div>
            <Timeline>
                <Timeline.Item>
                    <Card title="Genesis Block (Block 0)" extra={<a href="#">Mine ⛏</a>} style={{ width: 600 }}>
                        {/* add fields to add / delete transactions */}
                        <h6>Fundraising Ledger</h6>
                        <Form
                            form={form1}
                            name="fundraising"
                            onValuesChange={() => computeMerkleRoot(form1.getFieldsValue(true))}>
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
                                                        fieldKey={[fieldKey, 'address']}
                                                        rules={[{ required: true, message: 'Please input wallet address of donor' }]}
                                                    >
                                                        <Input placeholder="Address" />
                                                    </Form.Item>
                                                    <Form.Item
                                                        {...field}
                                                        name={[name, 'amount']}
                                                        fieldKey={[fieldKey, 'amount']}
                                                        rules={[{ required: true, message: 'Please input donation amount' }]}
                                                    >
                                                        <Input placeholder="Donation Amount" />
                                                    </Form.Item>
                                                    <MinusCircleOutlined onClick={() => remove(name)} />
                                                </Space>
                                            ))}
                                            <Form.Item>
                                                <Button
                                                    type="dashed"
                                                    onClick={() => add({ address: genHex(32), amount: genInt(100) })}
                                                    block
                                                    icon={<PlusOutlined />}
                                                >
                                                    Add field
                                                </Button>
                                            </Form.Item>
                                        </div>
                                    );
                                }}
                            </Form.List>
                        </Form>

                        <h6>Version (4 bytes)</h6>
                        <p>04000000</p>
                        <h6>Merkle Root Hash (32 bytes)</h6>
                        <p>{merkleRoots[0]}</p>
                        <h6>Unix Epoch Time</h6>
                        <p>61DFE50E</p>
                        <h6>Difficulty</h6>
                        <p>2</p>
                        <h6>Previous Block Header</h6>
                        <p>00000000000000000000000000000000</p>
                        <h6>Nonce</h6>
                        <p>0</p>
                        <h6>Hash</h6>
                        <p style={{ color: 'green', fontWeight: 600 }}>
                            {hashes[0]}
                        </p>
                    </Card>
                </Timeline.Item>
                <Timeline.Item>
                    <Card title="Block 1" extra={<a href="#">Mine ⛏ </a>} style={{ width: 600 }}>
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
                    <Card title="Block 2" extra={<a href="#">Mine ⛏</a>} style={{ width: 600 }}>
                        <h6>Version (4 bytes)</h6>
                        <p>04000000</p>
                        <h6>Merkle Root Hash (32 bytes)</h6>
                        <p>D0A852DFA0AA3B88B32A67397FE141EA</p>
                        <h6>Unix Epoch Time</h6>
                        <p>61E14BD6</p>
                        <h6>Difficulty</h6>
                        <p>5</p>
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
