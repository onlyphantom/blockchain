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
                        <p>Unix Epoch Time</p>
                        <p>0EE5DF61</p>
                        <p>Difficulty</p>
                        <p>1D00FFFF</p>

                    </Card>
                </Timeline.Item>
                <Timeline.Item>
                    <Card title="Block 1" extra={<a href="#">Mine ⛏ </a>} style={{ width: 600 }}>
                        <h6>Version (4 bytes)</h6>
                        <p>04000000</p>
                        <h6>Merkle Root Hash (32 bytes)</h6>
                        <p>61B2EF617C97A3B87533FEC5CEE5327D</p>
                        <p>Unix Epoch Time</p>
                        <p>9FE6DF61</p>
                        <p>Difficulty</p>
                        <p>01003456</p>

                    </Card></Timeline.Item>
                <Timeline.Item>
                    <Card title="Block 2" extra={<a href="#">Mine ⛏</a>} style={{ width: 600 }}>
                        <h6>Version (4 bytes)</h6>
                        <p>04000000</p>
                        <h6>Merkle Root Hash (32 bytes)</h6>
                        <p>D0A852DFA0AA3B88B32A67397FE141EA</p>
                        <p>Unix Epoch Time</p>
                        <p>0EE5DF61</p>

                    </Card>
                </Timeline.Item>
            </Timeline>

        </div>
    )
}

export default Blockchain
