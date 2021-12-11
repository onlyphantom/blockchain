import React, { useEffect, useState } from 'react';
import { Input, Divider, Alert, Form, Button } from 'antd';

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

const SHA256 = () => {
  const [plaintext, setPlaintext] = useState('');
  const [sha256, setSha256] = useState(null);
  const [sha1, setSha1] = useState(null);

  useEffect(() => {
    setSha256(hash256(plaintext));
    setSha1(hashSha1(plaintext));
  }, [plaintext]);

  return (
    <div>
      <Divider orientation="left">SHA256</Divider>

      <Input
        placeholder="Enter a string"
        style={{ width: '100%' }}
        onChange={() => setPlaintext(event.target.value)}
      />

      <br />
      <br />
      {sha256 && (
        <div>
          <h5> ➡️ Hash (SHA-256)</h5>
          <p>{sha256}</p>

          <h5> ➡️ Hash (SHA-1)</h5>
          <p>{sha1}</p>
        </div>
      )}
    </div>
  );
};

export default SHA256;
