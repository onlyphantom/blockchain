import React, { useState } from 'react';
import { BigNumber } from 'bignumber.js';

import { Row, Col, Input, Form, Button, Divider, message } from 'antd';
import {
  BulbOutlined,
  UnlockFilled,
  LockFilled,
  KeyOutlined,
  CopyOutlined,
} from '@ant-design/icons';

import { IconText } from './utils/UX';
import { copyToClipboard } from './utils/helpers';

const stringToAscii = (str) => {
  let asciiArray = [];
  for (let i = 0; i < str.length; i++) {
    asciiArray.push(str.charCodeAt(i));
  }
  return asciiArray;
};

const applyEquation = (array, p, m) => {
  let val = [];

  array.forEach((int) => {
    val.push(new BigNumber(int).pow(p).mod(m));
  });
  return val.map((x) => x.toNumber());
};

const asciiToString = (array) => {
  let str = '';
  array.forEach((int) => {
    str += String.fromCharCode(int);
  });
  return str;
};

const RSA = () => {
  const [publicKey, setPublicKey] = useState({ e: 29, n: 133 });
  const [privateKey, setPrivateKey] = useState(41);
  const [encrypted, setEncrypted] = useState(null);
  const [decrypted, setDecrypted] = useState(null);

  const [formEn] = Form.useForm();
  const [formDe] = Form.useForm();

  React.useEffect(() => {
    let x = new BigNumber(117);
    let ascii = [115, 97, 109, 117, 101, 108, 132];
    let y = applyEquation(ascii, publicKey.e, publicKey.n);
    console.log('y', y);
  }, []);

  const encrypt = (values) => {
    const encrypted = applyEquation(stringToAscii(values.encrypt), publicKey.e, publicKey.n);

    const encryptedStr = asciiToString(encrypted);
    setEncrypted(encryptedStr);

    copyToClipboard(encryptedStr);
    message.success('Encrypted and copied to clipboard!');
  };

  const decrypt = (values) => {
    const decrypted = applyEquation(stringToAscii(values.decrypt), privateKey, publicKey.n);

    const decryptedStr = asciiToString(decrypted);
    setDecrypted(decryptedStr);

    message.success('Successfully decrypted!');
  };

  const onFinishFailed = (errorInfo) => {
    message.error('Failed to encrypt/decrypt. Enter plain text (A-Za-z) for the demo.');
  };

  const handleCopy = (key) => {
    copyToClipboard(key);
    message.success('Copied to clipboard');
  };

  return (
    <div>
      <Divider orientation="left">Encrypt a Message with RSA</Divider>
      <Row>
        <Col span={12}>
          <Form form={formEn} name="encrypt" onFinish={encrypt} onFinishFailed={onFinishFailed}>
            <Form.Item
              label="Encrypt"
              name="encrypt"
              rules={[{ required: true, message: 'You have to leave a private message here.' }]}
            >
              <Input.TextArea rows={6} style={{ width: '100%', minWidth: 360 }} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                <IconText icon={LockFilled} text="Encrypt" />
              </Button>
            </Form.Item>

            {encrypted && (
              <>
                <h5> ➡️ Encrypted Message</h5>
                <p>{encrypted}</p>
              </>
            )}
          </Form>
        </Col>
      </Row>
      <Divider orientation="left">Decrypt a Message with RSA</Divider>
      <Row>
        <Col span={12}>
          <Form form={formDe} name="decrypt" onFinish={decrypt} onFinishFailed={onFinishFailed}>
            <Form.Item
              label="Decrypt"
              name="decrypt"
              rules={[{ required: true, message: 'You have to leave a private message here.' }]}
            >
              <Input.TextArea rows={6} style={{ width: '100%', minWidth: 360 }} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                <IconText icon={KeyOutlined} text="Decrypt" />
              </Button>
            </Form.Item>
            {decrypted && (
              <>
                <h5> ➡️ Decrypted Message</h5>
                <p>{decrypted}</p>
              </>
            )}
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default RSA;
