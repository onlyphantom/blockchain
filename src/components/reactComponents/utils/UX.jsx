import React from 'react';
import { Space, Popover, Tag, Divider } from 'antd';
import { TagsOutlined } from '@ant-design/icons';

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

const tagColors = [
  'magenta',
  'red',
  'volcano',
  'orange',
  'gold',
  'lime',
  'green',
  'cyan',
  'blue',
  'geekblue',
  'purple',
];

export const Tags = ({ name, list }) => {
  return (
    <div
      style={{
        boxShadow: '2px 2px 4px hsl(0deg 0% 0% / 20%)',
        border: '2px solid #fff',
        borderRadius: '7px',
        padding: '1%',
      }}
    >
      <Divider orientation="left">
        <h2>
          <TagsOutlined />
          {'  '}
          {name}
        </h2>
      </Divider>
      <div>
        {list.map((item, index) => {
          return (
            <Tag key={index} color={tagColors[index]}>
              {item}
            </Tag>
          );
        })}
      </div>
    </div>
  );
};

export const Quote = ({ text, src, author, img, cover }) => {
  return (
    <blockquote className={img ? 'quote-img' : 'quote-no-img'}>
      <p>{text}</p>
      <cite>
        {src && <small>{src}</small>} {author && <span className="cite-author">{author}</span>}
      </cite>

      {img && (
        <div
          className="blockquote-author-image"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: cover ? 'cover' : 'auto',
          }}
        />
      )}
    </blockquote>
  );
};
