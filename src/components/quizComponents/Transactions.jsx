import React, { useState } from 'react';
import { Checkbox, Space, Alert, Form, Button, Radio, Progress, Divider } from 'antd';

export const KcTransactions = () => {
  const [form] = Form.useForm();
  const [correctness, setCorrectness] = useState({ q1: false, q2: false, q3: false });

  const validateAnswer = (userAnswer, correctAnswer, errorMsg) => {
    if (userAnswer === correctAnswer) {
      return Promise.resolve();
    } else {
      return Promise.reject(new Error(errorMsg || 'Incorrect answer, please try again.'));
    }
  };

  const correct = { q1: 'false', q2: 'c', q3: 'b' };

  const onAttempt = () => {
    const vals = form.getFieldsValue();
    const correctAnswers = Object.keys(correct).filter((key) => vals[key] === correct[key]);
    setCorrectness({
      q1: correctAnswers.includes('q1'),
      q2: correctAnswers.includes('q2'),
      q3: correctAnswers.includes('q3'),
    });
  };

  return (
    <Form form={form} onFinish={onAttempt}>
      <h2>Quizzes</h2>

      <Divider orientation="left" dashed>
        Question 1
      </Divider>
      <p>
        EIP-1559 in the London Upgrade is effective at lowering the transaction fee across the
        Ethereum blockchain.
      </p>
      <Form.Item
        name="q1"
        required
        validateTrigger="onSubmit"
        rules={[
          () => ({
            validator(_, value) {
              return validateAnswer(
                value,
                correct.q1,
                'EIP-1559 overhauled the gas fee mechanism to make transction fees more predictable by comparing the size of the previous block (as a proxy of its market demand for block space); it is not the intent to make transactions cheaper, but rather to make it more predictable.'
              );
            },
          }),
        ]}
      >
        <Radio.Group buttonStyle="solid">
          <Radio.Button value="true">True</Radio.Button>
          <Radio.Button value="false">False</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Divider orientation="left" dashed>
        Question 2
      </Divider>
      <p>
        A transaction can include a `maxFeePerGas`, but how does Ethereum treat any gas not used in
        a transaction?
      </p>
      <Form.Item
        name="q2"
        required
        validateTrigger="onSubmit"
        rules={[
          () => ({
            validator(_, value) {
              return validateAnswer(
                value,
                correct.q2,
                'Gas used in the transaction is the base fee + priority fee. The difference between maxFeePerGas and this actual fee is refunded to the sender'
              );
            },
          }),
        ]}
      >
        <Radio.Group>
          <Space direction="vertical">
            <Radio value="a">Any gas not used is burnt under EIP-1559</Radio>
            <Radio value="b">Any gas not used is given to the receiver</Radio>
            <Radio value="c">Any gas not used is refunded to the sender</Radio>
          </Space>
        </Radio.Group>
      </Form.Item>

      <Divider orientation="left" dashed>
        Question 3
      </Divider>
      <p>
        Which of the following is <em>not correct</em> about the priority fee?
      </p>
      <Form.Item
        name="q3"
        required
        validateTrigger="onSubmit"
        rules={[
          () => ({
            validator(_, value) {
              return validateAnswer(
                value,
                correct.q3,
                'Priority fee is paid directly to the miners in order to incentivize them to include a transaction into a block.'
              );
            },
          }),
        ]}
      >
        <Radio.Group>
          <Space direction="vertical">
            <Radio value="a">It is also treated as a tip to the miner</Radio>
            <Radio value="b">
              12.5% of the priority fee is burned, and the rest kept by the miner
            </Radio>
            <Radio value="c">It has its own corresponding maximum, the Max Priority Fee</Radio>
            <Radio value="d">
              Setting a high Priority Fee incentivizes miners to include the transaction
            </Radio>
          </Space>
        </Radio.Group>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>

      {Object.values(correctness).every(Boolean) && (
        <Alert
          message="Well done!"
          description={
            <p>
              As an additional reward, you've discovered
              <img
                style={{ width: 16, marginLeft: 4, marginRight: 4 }}
                src="https://assets.coingecko.com/coins/images/13866/large/ZMT_Token.png?1637241562"
              />
              <b>30 ZMT tokens</b> from our sponsor Zipmex (Promo code:
              <a href="#"> LEARNBLOCKCHAIN2021</a>).
            </p>
          }
          type="success"
          icon="🎉"
          showIcon
        />
      )}
    </Form>
  );
};

export const PeTransactions = () => {

  const [done, setDone] = useState(0);

  const onChange = e => {
    if (e.target.checked) {
      setDone(prev => prev + 1);
    } else {
      setDone(prev => prev - 1);
    }
  }

  return <div>
    <Progress type="dashboard" percent={done / 4 * 100} format={() => `${done} Tasks`} width={80} />
    <h3 style={{ display: 'inline', marginLeft: '4%' }}>Practical Exercises</h3>
    <ul>
      <li>
        <Checkbox onChange={onChange}>
          Use the Gas Oracle <a href="#experiment">Experiment</a> set up above, find the <b>estimated time</b> right now for an Ethereum transaction that pays 200 Gwei of gas fee (<i>it is strongly recommended that you obtain an API key from Etherscan.io</i>)
        </Checkbox>
      </li>
      <li>
        <Checkbox onChange={onChange}>
          Use the Gas Oracle <a href="#experiment">Experiment</a> set up above, find the <b>Low-priority Gas Price</b> right now for an Ethereum transaction that pays 200 Gwei of gas fee (<i>it is strongly recommended that you obtain an API key from Etherscan.io</i>)
        </Checkbox>
      </li>
      <li>
        <Checkbox onChange={onChange}>
          Log in to your MetaMask wallet (or your preferred crypto wallet), mock a transaction from a Test Network (Goerli, Kovan, Rinkeby etc) but edit the gas fee to get some familiarity with the priority fee mechanics (low / medium / high). You should be able to edit your gas limit, priority fee and max fee for your transaction. <b>Make sure you are doing this on a Test Network</b>. You can reject the transaction at the end of your experimentation.
        </Checkbox>
      </li>
      <li>
        <Checkbox onChange={onChange}>
          Explore how much ETH has been burned in total on <a href="https://watchtheburn.com/">Watch The Burn</a>
        </Checkbox>
      </li>
    </ul>
  </div>
};
