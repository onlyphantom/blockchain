import React from 'react';
import { Row, Col, Input, Form, Button, Divider, Checkbox, Descriptions } from 'antd';

const XOREncrypt = () => {
  const [form] = Form.useForm();
  const [plainText, setPlainText] = React.useState('');
  const [key, setKey] = React.useState('');

  return (
    <div>
      <Form name="cipher" form={form}>
        <Row gutter={8}>
          <Col span={12}>
            <h5>Encryption</h5>
            <Form.Item>
              <Input
                placeholder="Plain Text Password"
                maxLength={8}
                onChange={(e) => setPlainText(e.target.value)}
              />
            </Form.Item>
            <Form.Item>
              <Input placeholder="Key" onChange={(e) => setKey(e.target.value)} />
            </Form.Item>
            <Form.Item>
              <Button type="primary">Encrypt</Button>
            </Form.Item>

            <Divider />
            <h6>Step-by-step Encryption</h6>
            <Descriptions title="Encryption Process" bordered>
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
          </Col>

          <Col span={12}>
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
