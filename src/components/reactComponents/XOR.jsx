import React from 'react';
import { Row, Col, Input, Form, Button, Divider, Checkbox, Descriptions } from 'antd';

const XOREncrypt = () => {
  return (
    <div>
      <Form>
        <Row gutter={8}>
          <Col span={12}>
            <h5>Encryption</h5>
            <Form.Item>
              <Input placeholder="Plain Text Password" maxLength={8} />
            </Form.Item>
            <Form.Item>
              <Input placeholder="Key" />
            </Form.Item>
            <Form.Item>
              <Button type="primary">Encrypt</Button>
            </Form.Item>

            <Divider />
            <h6>Step-by-step Encryption</h6>
            <Descriptions title="Encryption Process" bordered>
              <Descriptions.Item span={3} label="Plain Text">
                Let Me In!
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
