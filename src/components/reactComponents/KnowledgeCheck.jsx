import React from 'react';
import { Input, Alert, Form, Button, Radio, Divider } from 'antd';

export const KnowledgeCheckTransactions = () => {
  return (
    <div>
      <h2>Knowledge Check: Transactions</h2>
      <Divider orientation="left" dashed>
        Question 1
      </Divider>
      <p>
        EIP-1559 in the London Upgrade is effective at lowering the transaction fee across the
        Ethereum blockchain.
      </p>
      <Radio.Group
        // defaultValue="a"
        buttonStyle="solid"
      >
        <Radio.Button value="true">True</Radio.Button>
        <Radio.Button value="false">False</Radio.Button>
      </Radio.Group>
      <Divider orientation="left" dashed>
        Question 2
      </Divider>
    </div>
  );
};
