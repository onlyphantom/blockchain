import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Space, Collapse, message } from 'antd';
import { CopyOutlined, ReloadOutlined } from '@ant-design/icons';

import { IconText } from './utils/UX';
import { copyToClipboard } from './utils/helpers';

const handleCopy = (key) => {
  copyToClipboard(key);
  message.success('Copied to clipboard');
};

const Signing = () => {
  const [priK, setPriK] = useState('');
  const [pubK, setPubK] = useState('');

  useEffect(() => {
    const SHA256 = require('crypto-js/sha256');
  });

  const generateRandomPrivateKey = () => {
    const randomBytes = require('randombytes');
    const privateKey = randomBytes(32);
    setPriK(privateKey.toString('hex'));
  };

  const generatePublicKey = (privateKey) => {
    if (privateKey != '') {
      const EC = require('elliptic').ec;
      const ec = new EC('secp256k1');
      const key = ec.keyFromPrivate(privateKey);
      const pubKey = key.getPublic('hex');
      setPubK(pubKey);
    }
  };

  useEffect(() => {
    generatePublicKey(priK);
  }, [priK]);

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
    </div>
  );
};

export default Signing;
