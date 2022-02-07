import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Space, Collapse, Divider, message } from 'antd';
import { CopyOutlined, ReloadOutlined, EditOutlined } from '@ant-design/icons';

import { IconText } from './utils/UX';
import { copyToClipboard } from './utils/helpers';

const { Panel } = Collapse;

const handleCopy = (key) => {
  copyToClipboard(key);
  message.success('Copied to clipboard');
};

const Signing = () => {
  const randomBytes = require('randombytes');

  const [priK, setPriK] = useState(randomBytes(32).toString('hex'));
  const [pubK, setPubK] = useState('');
  const [signature, setSignature] = useState('');

  const [signForm] = Form.useForm();
  const [verifyForm] = Form.useForm();

  useEffect(() => {
    const SHA256 = require('crypto-js/sha256');
  });

  const generateRandomPrivateKey = () => {
    const privateKey = randomBytes(32);
    setPriK(privateKey.toString('hex'));
  };

  const generatePublicKey = (privateKey) => {
    if (privateKey != '') {
      const EC = require('elliptic').ec;
      const ec = new EC('secp256k1');
      const key = ec.keyFromPrivate(privateKey);
      const pubKey = key.getPublic('hex');
      return pubKey;
      setPubK(pubKey);
    }
  };

  useEffect(() => {
    let publickey = generatePublicKey(priK);
    setPubK(publickey);
    // set form values accordingly
    signForm.setFieldsValue({
      privateKey: priK,
    });

    verifyForm.setFieldsValue({
      publicKey: publickey,
      signature: signature,
    });
  }, [priK, signature]);

  const signWithPrivateKey = ({ message }) => {
    // digitally sign message with key
    const EC = require('elliptic').ec;
    const ec = new EC('secp256k1');
    const keyPair = ec.keyFromPrivate(priK);
    console.log(keyPair);
    const messageBuffer = Buffer.from(message, 'utf8');
    const hexSignature = Buffer.from(keyPair.sign(messageBuffer).toDER()).toString('hex');
    setSignature(hexSignature);
  };

  const verifySignature = ({ msg, signature }) => {
    const EC = require('elliptic').ec;
    const ec = new EC('secp256k1');
    const keyPair = ec.keyFromPublic(pubK, 'hex');
    let msgBuffer = Buffer.from(msg, 'utf8');
    let signatureBuff = Buffer.from(signature, 'hex');
    let result = keyPair.verify(msgBuffer, signatureBuff);
    console.log(result);

    if (result) {
      message.success('Signature verified');
    } else {
      message.error('Failed verification. Message is not authentic.');
    }
  };

  return (
    <div>
      <h2>Public and Private Keys</h2>
      Private Key:
      <Input
        placeholder="Private Key"
        value={priK}
        onChange={(e) => setPriK(e.target.value)}
        suffix={<ReloadOutlined onClick={() => generateRandomPrivateKey()} />}
      />
      Public Key:
      <Input placeholder="Public Key" disabled value={pubK} />
      <Button type="primary" onClick={() => handleCopy(pubK)}>
        <IconText icon={CopyOutlined} text="Copy Public Key to Clipboard" />
      </Button>
      <Divider />
      <h2>Signing</h2>
      <Collapse defaultActiveKey={['1']}>
        <Panel header="Signing" key="1">
          <Form
            form={signForm}
            name="signing"
            onFinish={signWithPrivateKey}
            initialValues={{ privateKey: priK }}
          >
            <Form.Item label="Private Key" name="privateKey">
              <Input disabled />
            </Form.Item>

            <Form.Item
              label="Message"
              name="message"
              rules={[{ required: true, message: 'You have to leave a private message here.' }]}
            >
              <Input.TextArea rows={6} style={{ width: '100%', minWidth: 360 }} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                <IconText icon={EditOutlined} text="Sign with Private Key" />
              </Button>
            </Form.Item>
            <Form.Item label="Signature" name="signature">
              <pre>{signature}</pre>
            </Form.Item>
          </Form>
        </Panel>
        <Panel header="Verification" key="2">
          <Form form={verifyForm} name="verification" onFinish={verifySignature}>
            <Form.Item label="Public Key" name="publicKey">
              <Input disabled />
            </Form.Item>
            <Form.Item label="Message" name="msg">
              <Input.TextArea rows={6} style={{ width: '100%', minWidth: 360 }} />
            </Form.Item>
            <Form.Item label="Signature" name="signature">
              <Input.TextArea rows={6} style={{ width: '100%', minWidth: 360 }} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                <IconText icon={EditOutlined} text="Verify Signature" />
              </Button>
            </Form.Item>
          </Form>
        </Panel>
      </Collapse>
    </div>
  );
};

export default Signing;
