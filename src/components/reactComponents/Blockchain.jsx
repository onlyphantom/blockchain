import React, { useEffect, useState } from 'react';
import { Form, Input, Timeline, Card, Button, Space, Collapse, message } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const Blockchain = () => {
    return (
        <div>
            <Timeline>
                <Timeline.Item>
                    <Card title="Genesis Block (Block 0)" extra={<a href="#">Mine ⛏</a>} style={{ width: 600 }}>
                        <h6>Version (4 bytes)</h6>
                        <p>04000000</p>
                        <h6>Merkle Root Hash (32 bytes)</h6>
                        <p>09BA769D82940D3AB2AFFB184AEB9767</p>
                        <h6>Unix Epoch Time</h6>
                        <p>0EE5DF61</p>
                        <h6>Difficulty</h6>
                        <p>2</p>
                        <h6>Previous Block Header</h6>
                        <p>00000000000000000000000000000000</p>
                        <h6>Nonce</h6>
                        <p>0</p>
                        <h6>Hash</h6>
                        <p style={{ color: 'green', fontWeight: 600 }}>00BA769D82940D3AB2AFFB184AEB9767</p>
                    </Card>
                </Timeline.Item>
                <Timeline.Item>
                    <Card title="Block 1" extra={<a href="#">Mine ⛏ </a>} style={{ width: 600 }}>
                        <h6>Version (4 bytes)</h6>
                        <p>04000000</p>
                        <h6>Merkle Root Hash (32 bytes)</h6>
                        <p>61B2EF617C97A3B87533FEC5CEE5327D</p>
                        <h6>Unix Epoch Time</h6>
                        <p>9FE6DF61</p>
                        <h6>Difficulty</h6>
                        <p>3</p>

                    </Card></Timeline.Item>
                <Timeline.Item>
                    <Card title="Block 2" extra={<a href="#">Mine ⛏</a>} style={{ width: 600 }}>
                        <h6>Version (4 bytes)</h6>
                        <p>04000000</p>
                        <h6>Merkle Root Hash (32 bytes)</h6>
                        <p>D0A852DFA0AA3B88B32A67397FE141EA</p>
                        <h6>Unix Epoch Time</h6>
                        <p>E03F5F61</p>
                        <h6>Difficulty</h6>
                        <p>5</p>

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
