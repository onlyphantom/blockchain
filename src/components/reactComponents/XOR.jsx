import React from 'react';
import { Row, Col, Input, Form, Button, Divider, message } from 'antd';
import {
  BulbOutlined,
  LockOutlined,
  LockFilled,
  KeyOutlined,
  CopyOutlined,
} from '@ant-design/icons';

import { IconText } from './utils/UX';
import { copyToClipboard } from './utils/helpers';

const toBinaryRepr = (str) =>
  str
    .split('')
    .map((c) => c.charCodeAt(0).toString(2).padStart(8, '0'))
    .join('');

const XOREncrypt = () => {
  const [form] = Form.useForm();
  const [plainText, setPlainText] = React.useState('');
  const [key, setKey] = React.useState('10101010');
  const [encrypted, setEncrypted] = React.useState(null);

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
    setEncrypted(cipherText.join(''));
  };

  return (
    <div>
      <Form name="cipher" form={form} initialValues={{ key: key }} onFinish={xorCipher}>
        <Row gutter={8}>
          <Col span={24}>
            <h3>Encryption</h3>
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
                <br />
                <br />
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
                <IconText icon={LockFilled} text="Encrypt" />
              </Button>
            </Form.Item>

            {encrypted && (
              <>
                <h5> ➡️ Encrypted Binary</h5>
                <p>{encrypted}</p>
                <Button
                  onClick={() => {
                    message.success('Copied to clipboard!');
                    copyToClipboard(encrypted);
                  }}
                >
                  <IconText icon={CopyOutlined} text="Copy to Clipboard" />
                </Button>
              </>
            )}
          </Col>
        </Row>
        <Divider />
        <Row>
          <Col span={24}>
            <h3>Decryption</h3>
            <Form.Item>
              <Input placeholder="Received Message" />
            </Form.Item>
            <Form.Item>
              <Input placeholder="Key" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                <IconText icon={KeyOutlined} text="Decrypt" />
              </Button>
            </Form.Item>
            <Form.Item></Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default XOREncrypt;
