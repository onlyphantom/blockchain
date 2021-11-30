import React from 'react';
import { Row, Col, Input, Form, Button, Divider, Checkbox, Descriptions } from 'antd';
import { BulbOutlined } from '@ant-design/icons';

import { IconText } from './utils/UX';

const toBinaryRepr = (str) =>
  str
    .split('')
    .map((c) => c.charCodeAt(0).toString(2).padStart(8, '0'))
    .join('');

const XOREncrypt = () => {
  const [form] = Form.useForm();
  const [plainText, setPlainText] = React.useState('');
  const [key, setKey] = React.useState('10101010');

  const onChangeBinaryDigitOnly = (e) => {
    const value = e.target.value;
    console.log(value);
    // every character is 0 or 1
    if (value.length > 0 && /^[01]+$/.test(value)) {
      // if the length is not 8, pad with 0
      if (value.length < 8) {
        setKey(value.padStart(8, '0'));
      } else {
        setKey(value.substring(0, 8));
      }
    } else {
      return;
    }
  };

  const xorCipher = (values) => {
    const plainText = toBinaryRepr(values.plain);
    const key = values.key;

    console.log('values', plainText, key);

    const cipherText = [];
    for (let i = 0; i < plainText.length; i++) {
      const char = plainText[i];
      const keyChar = key[i % key.length];
      const xor = char ^ keyChar;
      cipherText.push(xor);
    }
    console.log(cipherText.join(''));
    return cipherText.join('');
  };

  return (
    <div>
      <Form name="cipher" form={form} initialValues={{ key: key }} onFinish={xorCipher}>
        <Row gutter={8}>
          <Col span={24}>
            <h5>Encryption</h5>
            <Form.Item name="plain">
              <Input
                placeholder="Plain Text Password"
                maxLength={12}
                onChange={(e) => setPlainText(e.target.value)}
              />
            </Form.Item>

            {plainText && (
              <>
                <h5>
                  <a href="https://developer.mozilla.org/en-US/docs/Glossary/ASCII" target="_blank">
                    <IconText icon={BulbOutlined} text="ASCII" />:{' '}
                  </a>
                </h5>
                {plainText
                  .split('')
                  .map((c) => c.charCodeAt(0))
                  .join(', ')}
                <h5> ➡️ Binary Representation</h5>
                {toBinaryRepr(plainText)}
              </>
            )}
            <Divider />

            <h5>Binary Key</h5>
            <Form.Item name="key">
              <Input placeholder="1010101010" onChange={onChangeBinaryDigitOnly} />
            </Form.Item>

            {key && (
              <>
                <h5> ➡️ Byte-size Binary Key</h5>
                {key}
              </>
            )}

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Encrypt
              </Button>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Divider />
          <h6>Step-by-step Encryption</h6>
          <Descriptions title="Encryption Process">
            <Descriptions.Item span={3} label="Plain Text">
              Hello
            </Descriptions.Item>
            <Descriptions.Item span={3} label="ASCII">
              104 101 108 108 111
            </Descriptions.Item>
            <Descriptions.Item span={3} label="Binary">
              01001000 01100101 01101100 01101100 01101111
            </Descriptions.Item>
            <Descriptions.Item span={3} label="XOR">
              01010101 01010101 01010101 01010101
            </Descriptions.Item>
            <Descriptions.Item span={3} label="Encrypted">
              01010101 01010101 01010101 01010101
            </Descriptions.Item>
          </Descriptions>
        </Row>
        <Row>
          <Col span={24}>
            <h5>Decryption</h5>
            <Form.Item>
              <Input placeholder="Received Message" />
            </Form.Item>
            <Form.Item>
              <Input placeholder="Key" />
            </Form.Item>
            <Form.Item>
              <Button type="primary">Decrypt</Button>
            </Form.Item>
            <Form.Item></Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default XOREncrypt;
