import React from 'react';
import { Input, Space, Alert, Form, Button, Radio, Divider } from 'antd';

export const KnowledgeCheckTransactions = () => {
  const [form] = Form.useForm();
  const [correctness, setCorrectness] = React.useState({ q1: false, q2: false, q3: false });

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
      <h3>Knowledge Check: Transactions</h3>

      <Divider orientation="left" dashed>
        Question 1
      </Divider>
      <p>
        EIP-1559 in the London Upgrade is effective at lowering the transaction fee across the
        Ethereum blockchain.
      </p>
      <Form.Item name="q1" required>
        <Radio.Group buttonStyle="solid">
          <Radio.Button value="true">True</Radio.Button>
          <Radio.Button value="false">False</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Divider orientation="left" dashed>
        Question 2
      </Divider>
      <p>
        A transaction can include a maximum limit, but how does Ethereum treat any gas not used in a
        transaction?
      </p>
      <Form.Item name="q2" required>
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
      <Form.Item name="q3" required>
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
          description="You have completed the Knowledge Check!"
          type="success"
          icon="🎉"
          showIcon
        />
      )}
    </Form>
  );
};
