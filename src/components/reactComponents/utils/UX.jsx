import React from 'react';
import { Space, Popover } from 'antd';

export const IconText = ({ icon, text, iconhover }) => (
  <Space>
    {iconhover ? (
      <>
        <Popover content={iconhover} style={{ width: 100 }}>
          {React.createElement(icon, { style: { marginRight: '4px', marginTop: '-3px' } })}
        </Popover>{' '}
        {text}
      </>
    ) : (
      <>
        {React.createElement(icon, { style: { marginRight: '4px', marginTop: '-3px' } })}
        {text}
      </>
    )}
  </Space>
);
