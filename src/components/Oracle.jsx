import React from 'react';
import { Input, Alert, Form, Button, Checkbox } from 'antd';

const Oracle = () => {
  const [val, setVal] = React.useState({});
  // const [api, setApi] = React.useState(null)

  // React.useEffect(()=>{
  //     fetch('https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=YourApiKeyToken')
  //     .then(res => res.json())
  //     .then(data => setVal(data.result))
  // }, [])

  const formSubmit = (values) => {
    console.log('values', values);
    getApi(values.amount, values.apiKey);
  };

  const getApi = (amount, apiKey) => {
    fetch(
      `https://api.etherscan.io/api?module=gastracker&action=gasoracle&amount=${amount}&apikey=${apiKey}`
    );
    const url_oracle = 'https://api.etherscan.io/api?module=gastracker&action=gasoracle';

    if (apiKey) {
      console.log('Found apiKey. Using', apiKey);
      url_oracle += `&apikey=${apiKey}`;
    }

    fetch(url_oracle)
      .then((res) => res.json())
      .then((data) => setVal(data.result));
  };

  return (
    <Form onFinish={formSubmit} layout="vertical" initialValues={{ recommendations: true }}>
      <h2>Gas Oracle from Etherscan</h2>
      <Form.Item name="apiKey" label="API Key">
        <Input.Password
          placeholder="Enter your Etherscan API key (Optional)"
          style={{ width: '80%' }}
        />
      </Form.Item>

      <Form.Item
        name="amount"
        label="Amount"
        style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
      >
        <Input addonBefore="Gas Price" placeholder="Price per unit of gas in wei" />
      </Form.Item>

      <Form.Item name="recommendations" valuePropName="checked">
        <Checkbox style={{ color: '#61a0e0' }}>Price Recommendations</Checkbox>
      </Form.Item>

      <Form.Item label=" ">
        <Button type="primary" htmlType="submit">
          Get Estimate
        </Button>
      </Form.Item>

      <p style={{ color: 'white' }}>{JSON.stringify(val)}</p>
      <Alert description="⛽ The gas prices are returned in Gwei." type="info" showIcon />
    </Form>
  );
};

export default Oracle;
