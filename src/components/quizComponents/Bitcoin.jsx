import React, { useState, useEffect } from 'react';
import { Checkbox, Space, Input, Tooltip, Button, Radio, Progress, notification, Divider } from 'antd';
import { LinkOutlined, CheckCircleFilled } from '@ant-design/icons';

const successNotification = () => {
    notification.open({
        message: 'Job well done!',
        description:
            'You have completed the knowledge check for this chapter. Fantastic work!',
        icon: <CheckCircleFilled style={{ color: '#52c41a' }} />,
    });
};

export const PeBitcoin = () => {

    const correct = { q1: 2701, q2: 15.89351625, q3: { address: '34qkc2iac6RsyxZVfyE2S5U5WcRsbg2dpK', amount: 15.89351625 }, q4: 'b', q5: ['a', 'b'], q6: 'c', q7: 'a' };

    const [correctness, setCorrectness] = useState({ q1: false, q2: false, q3: false, q4: false, q5: false, q6: false, q7: false });
    const [miningFee, setMiningFee] = useState({ blockReward: 0, feeReward: 0 })
    const [coinbase, setCoinbase] = useState({ address: '', amount: 0 })

    useEffect(() => {
        if (JSON.stringify(coinbase) === JSON.stringify(correct.q3)) {
            setCorrectness({ ...correctness, q3: true })
        }
    }, [coinbase])


    useEffect(() => {
        if (Object.values(correctness).every(Boolean)) {
            successNotification()
        }
    }, [correctness])

    const validateAnswer = (qindex, userAnswer) => {
        if (typeof userAnswer === 'object') {
            setCorrectness(prev => ({ ...prev, [qindex]: JSON.stringify(userAnswer) === JSON.stringify(correct[qindex]) }));
        } else {
            setCorrectness(prev => ({ ...prev, [qindex]: userAnswer === correct[qindex] }));
        }

    };



    return (
        <div>
            <Progress type="dashboard" percent={Math.round(Object.values(correctness).filter(Boolean).length / Object.keys(correctness).length * 100)} width={80} />
            <h3 style={{ display: 'inline', marginLeft: '4%' }}>Practical Exercises</h3>
            <p>Inspect block <b>500000</b> in any blockchain explorer to answer question (1) to (3). </p>
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

                <li style={{ marginTop: '6%' }}>
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
                <li style={{ marginTop: '6%' }}>
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
                <li style={{ marginTop: '6%' }}>
                    <p>
                        What is the <code>hashMerkleRoot</code> field referring to in Bitcoin mining?
                    </p>
                    <Radio.Group onChange={e => validateAnswer('q4', e.target.value)}>
                        <Space direction="vertical">
                            <Radio value="a">The 256-bit hash of the previous block header</Radio>
                            <Radio value="b">The 256-bit hash of the Merkle root of the block's transactions</Radio>
                            <Radio value="c">The 256-bit hash of the current block header along with the previous Merkle root</Radio>
                            <Radio value="d">The 256-bit hash of the difficulty target to produce a valid Merkle root</Radio>
                        </Space>
                    </Radio.Group>
                </li>
                <li style={{ marginTop: '6%' }}>
                    <p>
                        Supposed the miner has exhausted all possible bits of the nonce, what can be done to reset the nonce and try again?
                        <br /><b>Pick all that apply.</b>
                    </p>
                    <Checkbox.Group
                        options={[
                            { label: <span>Increment <code>extraNonce</code> in the coinbase transaction</span>, value: 'a' },
                            { label: <span>Increment <code>nTime</code> in the block header</span>, value: 'b' },
                            { label: <span>Decrement <code>nBits</code> in the block header</span>, value: 'c' },
                            { label: <span>Increment <code>nBits</code> to reduce the difficulty for finding a qualifying nonce</span>, value: 'd' },
                        ]}
                        onChange={(val) => {
                            console.log(val)
                            validateAnswer('q5', val)
                        }}
                    />
                </li>
                <li style={{ marginTop: '6%' }}>
                    <p>
                        When an accidental fork occur from two or more miners finding a block within seconds of each other,
                        how is this fork resolved?
                    </p>
                    <Radio.Group onChange={e => validateAnswer('q6', e.target.value)}>
                        <Space direction="vertical">
                            <Radio value="a">All transactions from forks are considered orphaned blocks and added to the mempool for inclusion again</Radio>
                            <Radio value="b">Nonce is incremented for every block and the miner will try again with a higher difficulty target, in the
                                hopes of resolving a fork</Radio>
                            <Radio value="c">Wait for subsequent blocks to be mined, so one chain becomes longer than the other(s) and the
                                network abandons the blocks not in the longest chain</Radio>
                        </Space>
                    </Radio.Group>
                </li>
                <li style={{ marginTop: '6%' }}>
                    <p>What is the search space for the nonce?</p>
                    <Radio.Group onChange={e => validateAnswer('q7', e.target.value)}>
                        <Space direction="vertical">
                            <Radio value="a">The range of values from 0 to 2^32</Radio>
                            <Radio value="b">The range of values from 0 to 2^64</Radio>
                            <Radio value="c">The range of values from 0 up to the number of transactions in the block</Radio>
                            <Radio value="d">There is no search space, the nonce is incremented indefinitely until a hash that meets the difficulty target is found</Radio>
                        </Space>
                    </Radio.Group>
                </li>

            </ol>

        </div >
    )
}

