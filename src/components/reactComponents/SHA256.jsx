import React, { useEffect, useState } from 'react';
import { Input, Divider, Alert, Form, Button } from 'antd';

// Documentation:
// https://nodejs.org/api/crypto.html#cryptocreatehashalgorithm-options

const hash256 = (string) => {
  const val = require('crypto').createHash('sha256').update(string).digest('hex');
  console.log(val);
  return val;
};

const hashSha1 = (string) => {
  const val = require('crypto').createHash('sha1').update(string).digest('hex');
  console.log(val);
  return val;
};

const hashSha512 = (string) => {
  const val = require('crypto').createHash('sha512').update(string).digest('hex');
  console.log(val);
  return val;
};

const SHA256 = () => {
  const [plaintext, setPlaintext] = useState('');
  const [sha256, setSha256] = useState(null);
  const [sha1, setSha1] = useState(null);
  const [sha512, setSha512] = useState(null);

  useEffect(() => {
    setSha1(hashSha1(plaintext));
    setSha256(hash256(plaintext));
    setSha512(hashSha512(plaintext));
  }, [plaintext]);

  return (
    <div>
      <Divider orientation="left">SHA Algorithms</Divider>

      <Input
        placeholder="Enter a string"
        style={{ width: '100%' }}
        onChange={() => setPlaintext(event.target.value)}
      />

      <br />
      <br />
      {sha256 && (
        <div>
          <h5> ➡️ Hash (SHA-1)</h5>
          <p>{sha1}</p>

          <h5> ➡️ Hash (SHA-256)</h5>
          <p>{sha256}</p>

          <h5> ➡️ Hash (SHA-512)</h5>
          <p style={{ wordBreak: 'break-all', whiteSpace: 'normal' }}>{sha512}</p>
        </div>
      )}
    </div>
  );
};

export default SHA256;
