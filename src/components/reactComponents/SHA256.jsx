import React, { useRef } from 'react';
import { Input, Divider, Alert, Form, Button } from 'antd';

const hash256 = (string) => {
  const val = require('crypto').createHash('sha256').update(string).digest('hex');
  console.log(val);
  return val;
};

const SHA256 = () => {
  const string = useRef('');

  return (
    <div>
      <Divider orientation="left">SHA256</Divider>

      <Input
        placeholder="Enter a string"
        style={{ width: '100%' }}
        onChange={(e) => (string.current = e.target.value)}
      />
      <Button type="primary" onClick={() => hash256(string.current)}>
        Submit
      </Button>
    </div>
  );
};

export default SHA256;
