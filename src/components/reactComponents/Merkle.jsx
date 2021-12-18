import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Space, Collapse } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

const Merkle = () => {
  const [mtree, setMTree] = useState(null);
  // const [usernames, setUsernames] = useState(['alice +100', 'bob +60', 'charlie +30']);
  const [usernames, setUsernames] = useState([]);

  useEffect(() => {
    const { MerkleTree } = require('merkletreejs');
    const SHA256 = require('crypto-js/sha256');

    const leaves = usernames.map((x) => SHA256(x));
    const tree = new MerkleTree(leaves, SHA256);
    const root = tree.getRoot().toString('hex');
    const leaf = SHA256('bob +60');
    const proof = tree.getProof(leaf);
    console.log('proof', proof);
    console.log('root', root);
    console.log('bob in tree:', tree.verify(proof, leaf, root));

    const impostor = SHA256('bob +65');
    const badproof = tree.getProof(impostor);
    console.log('carol in tree:', tree.verify(badproof, impostor, root));

    setMTree(tree);
  }, [usernames]);

  const validateMtree = ({ tree, leaf }) => {
    const proof = tree.getProof(leaf);
    const root = tree.getRoot().toString('hex');
    return tree.verify(proof, leaf, root);
  };

  const onFinish = ({ donors }) => {
    console.log('Received values of form:', donors);
    setUsernames(donors.map((x) => `${x.username} +${x.amount}`));
  };

  return (
    <div>
      <h1>Merkle Tree</h1>

      <Collapse accordion defaultActiveKey={['1']}>
        <Panel header="Merkle Tree" key="1">
          <div>
            <h2>Fundraising List</h2>
            <Form name="fundraising" onFinish={onFinish}>
              <Form.List name="donors">
                {(fields, { add, remove }) => {
                  return (
                    <div>
                      {fields.map(({ key, name, fieldKey, ...field }) => (
                        <Space
                          key={key}
                          style={{ display: 'flex', marginBottom: 8 }}
                          align="baseline"
                        >
                          <Form.Item
                            {...field}
                            name={[name, 'username']}
                            fieldKey={[fieldKey, 'username']}
                            rules={[{ required: true, message: 'Please input username of donor' }]}
                          >
                            <Input placeholder="Username" />
                          </Form.Item>
                          <Form.Item
                            {...field}
                            name={[name, 'amount']}
                            fieldKey={[fieldKey, 'amount']}
                            rules={[{ required: true, message: 'Please input donation amount' }]}
                          >
                            <Input placeholder="Donation Amount" />
                          </Form.Item>
                          <MinusCircleOutlined onClick={() => remove(name)} />
                        </Space>
                      ))}
                      <Form.Item>
                        <Button
                          type="dashed"
                          onClick={() => add({ username: '', amount: '100' })}
                          block
                          icon={<PlusOutlined />}
                        >
                          Add field
                        </Button>
                      </Form.Item>
                    </div>
                  );
                }}
              </Form.List>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
            {usernames.length > 0 && <h5>Tree Representation</h5>}
            <pre>{mtree?.toString()}</pre>
          </div>
        </Panel>
        <Panel header="Verification" key="2"></Panel>
      </Collapse>
    </div>
  );
};

export default Merkle;
