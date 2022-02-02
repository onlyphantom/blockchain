import React, { useState } from 'react';
import { Checkbox, Space, Alert, Form, Input, Tooltip, Button, Radio, Progress, Divider } from 'antd';
import { LinkOutlined } from '@ant-design/icons';

export const KcBitcoin = () => {

    return (
        <h2>Quizzes</h2>
    )
}

export const PeBitcoin = () => {

    const correct = { q1: 2701, q2: 15.89351625, q3: [15.89351625, '34qkc2iac6RsyxZVfyE2S5U5WcRsbg2dpK'] };
    const [correctness, setCorrectness] = useState({ q1: false, q2: false, q3: false, q4: false, q5: false, q6: false, q7: false });

    const validateAnswer = (qindex, userAnswer) => {
        setCorrectness(prev => ({ ...prev, [qindex]: userAnswer === correct[qindex] }));
    };



    return (
        <div>
            <Progress type="dashboard" percent={Math.round(Object.values(correctness).filter(Boolean).length / Object.keys(correctness).length * 100)} width={80} />
            <h3 style={{ display: 'inline', marginLeft: '4%' }}>Practical Exercises</h3>
            <p>Inspect block 500000 in any blockchain explorer to answer question (1) to (3). </p>
            <a href="https://www.blockchain.com/btc/block/500000" target="_blank" rel="nofollow">
                <Button type="primary" shape="round" icon={<LinkOutlined />}>
                    Blockchain.com: Block 5000
                </Button>
            </a>
            <a href="https://blockstream.info/block/00000000000000000024fb37364cbf81fd49cc2d51c09c75c35433c3a1945d04" target="_blank" rel="nofollow">
                <Button type="primary" shape="round" icon={<LinkOutlined />}>
                    Blockstream: Block 5000
                </Button>
            </a>
            <a href="https://btc.com/btc/block/500000" target="_blank" rel="nofollow">
                <Button type="primary" shape="round" icon={<LinkOutlined />}>
                    Btc.com: Block 5000
                </Button>
            </a>
            <ol>
                <Divider orientation="left" dashed>
                    The following are questions specific to block #500000
                </Divider>
                <li>
                    <p>
                        What is the number of transactions in this block?
                    </p>
                    <Tooltip
                        trigger={['focus']}
                        title="Do not use comma or decimal point."
                        placement="topLeft"
                    >
                        <Input placeholder="100000" className={correctness['q1'] ? 'correct' : ''} onChange={e => validateAnswer('q1', Number(e.target.value))} />
                    </Tooltip>

                </li>

                <li>What is the sum of block reward and fee reward?</li>
                <li>Inspect the miner responsible for this block. Note the first few digits of its address (34qkc2iac6RsyxZVfyE2S5U5WcRsbg2dpK). In the coinbase transaction of this block, how many bitcoins are transferred and to whom? Do not perform any rounding.</li>
                <Divider orientation="left" dashed>
                    The following are general questions relating to the Bitcoin protocol
                </Divider>
                <li>What is the `hashMerkleRoot` field referring to in Bitcoin mining?</li>
            </ol>

        </div>
    )
}

