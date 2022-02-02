import React, { useState, useEffect } from 'react';
import { Checkbox, Space, Alert, Form, Input, Tooltip, Button, Radio, Progress, Divider } from 'antd';
import { LinkOutlined, CheckCircleTwoTone, CheckCircleFilled } from '@ant-design/icons';

export const KcBitcoin = () => {

    return (
        <h2>Quizzes</h2>
    )
}

export const PeBitcoin = () => {

    const correct = { q1: 2701, q2: 15.89351625, q3: { address: '34qkc2iac6RsyxZVfyE2S5U5WcRsbg2dpK', amount: 15.89351625 } };

    const [correctness, setCorrectness] = useState({ q1: false, q2: false, q3: false, q4: false, q5: false, q6: false, q7: false });
    const [miningFee, setMiningFee] = useState({ blockReward: 0, feeReward: 0 })
    const [coinbase, setCoinbase] = useState({ address: '', amount: 0 })

    useEffect(() => {
        if (JSON.stringify(coinbase) === JSON.stringify(correct.q3)) {
            setCorrectness({ ...correctness, q3: true })
        }
    }, [coinbase])

    const validateAnswer = (qindex, userAnswer) => {
        if (typeof userAnswer === 'object' &&
            !Array.isArray(userAnswer) &&
            userAnswer !== null) {
            setCorrectness(prev => ({ ...prev, [qindex]: JSON.stringify(userAnswer) === JSON.stringify(correct[qindex]) }));
        } else {
            setCorrectness(prev => ({ ...prev, [qindex]: userAnswer === correct[qindex] }));
        }

    };



    return (
        <div>
            <Progress type="dashboard" percent={Math.round(Object.values(correctness).filter(Boolean).length / Object.keys(correctness).length * 100)} width={80} />
            <h3 style={{ display: 'inline', marginLeft: '4%' }}>Practical Exercises</h3>
            <p>Inspect block 500000 in any blockchain explorer to answer question (1) to (3). </p>
            <a href="https://www.blockchain.com/btc/block/500000" target="_blank" rel="nofollow">
                <Button type="primary" shape="round" icon={<LinkOutlined />}>
                    Blockchain.com: #500000
                </Button>
            </a>
            <a href="https://blockstream.info/block/00000000000000000024fb37364cbf81fd49cc2d51c09c75c35433c3a1945d04" target="_blank" rel="nofollow">
                <Button type="primary" shape="round" icon={<LinkOutlined />}>
                    Blockstream: #500000
                </Button>
            </a>
            <a href="https://btc.com/btc/block/500000" target="_blank" rel="nofollow">
                <Button type="primary" shape="round" icon={<LinkOutlined />}>
                    Btc.com: #500000
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
                        <Input
                            placeholder="100000"
                            className={correctness['q1'] ? 'correct' : ''}
                            suffix={correctness['q1'] ? <CheckCircleFilled style={{ color: '#52c41a' }} /> : ''}
                            onChange={e => validateAnswer('q1', +e.target.value)} />
                    </Tooltip>

                </li>

                <li style={{ marginTop: 10 }}>
                    <p>
                        What is the sum of block reward and fee reward?
                    </p>
                    <Tooltip
                        trigger={['focus']}
                        title="Do not use comma. Do not perform any rounding."
                        placement="topLeft"
                    >
                        Block Reward BTC: <Input placeholder="6.25" onChange={(e) => {
                            setMiningFee(prev => ({ ...prev, blockReward: e.target.value }))
                            validateAnswer('q2', +e.target.value + +miningFee.feeReward)
                        }} />
                    </Tooltip>
                    <Tooltip
                        trigger={['focus']}
                        title="Do not use comma. Do not perform any rounding."
                        placement="topLeft"
                    >
                        Fee Reward BTC: <Input placeholder="2.9567031" onChange={(e) => {
                            setMiningFee(prev => ({ ...prev, feeReward: e.target.value }))
                            validateAnswer('q2', +miningFee.blockReward + +e.target.value)
                        }} />
                    </Tooltip>
                    Sum (Total BTC):
                    <Input placeholder={`${miningFee.blockReward} + ${miningFee.feeReward} = ${+miningFee.blockReward + +miningFee.feeReward}`} disabled
                        className={correctness['q2'] ? 'correct' : ''}
                        suffix={correctness['q2'] ? <CheckCircleFilled style={{ color: '#52c41a' }} /> : ''} />
                </li>
                <li style={{ marginTop: 10 }}>
                    <p>
                        Inspect the miner responsible for block #500000. In the coinbase transaction of this block, how many bitcoins are transferred and to whom? Paste the full address into the answer field. Do not perform any rounding to the transaction amount.
                    </p>
                    <Tooltip
                        trigger={['focus']}
                        title="The full 64 hexadecimal digits of the miner's address."
                        placement="topLeft"
                    >
                        Output Address:
                        <Input
                            placeholder="6df4e1d0d00883510099989204b1c332d3549e5c9ebbd955f4aa92d5bd00f774"
                            onChange={(e) => {
                                setCoinbase(prev => ({ ...prev, address: e.target.value }))
                                validateAnswer('q3', coinbase)
                            }}
                            className={correctness['q3'] ? 'correct' : ''}
                            suffix={coinbase.address === correct.q3.address ? <CheckCircleFilled style={{ color: '#52c41a' }} /> : ''}
                        />
                    </Tooltip>
                    <Tooltip
                        trigger={['focus']}
                        title="Do not use comma. Do not perform any rounding."
                        placement="topLeft"
                    >
                        Output Amount BTC:
                        <Input
                            placeholder="2.9567031"
                            onChange={(e) => {
                                setCoinbase(prev => ({ ...prev, amount: +e.target.value }))
                                validateAnswer('q3', coinbase)
                            }}
                            className={correctness['q3'] ? 'correct' : ''}
                            suffix={coinbase.amount === +correct.q3.amount ? <CheckCircleFilled style={{ color: '#52c41a' }} /> : ''}
                        />
                    </Tooltip>
                </li>
                <Divider orientation="left" dashed>
                    The following are general questions relating to the Bitcoin protocol
                </Divider>
                <li style={{ marginTop: 10 }}>What is the `hashMerkleRoot` field referring to in Bitcoin mining?</li>
            </ol>

        </div>
    )
}

