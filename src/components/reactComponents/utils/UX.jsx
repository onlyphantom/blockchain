import React from 'react';
import { Space, Popover, Tag, Divider } from 'antd';

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
    <>
      <Divider orientation="left">{name}</Divider>
      <div>
        {list.map((item, index) => {
          return (
            <Tag key={index} color={tagColors[index]}>
              {item}
            </Tag>
          );
        })}
      </div>
    </>
  );
};

export const Quote = ({ text, src, author, img, cover }) => {
  return (
    <blockquote className={img ? 'quote-img' : 'quote-no-img'}>
      <p>{text}</p>
      <cite>
        {src && <small>{src}</small>} {author && <span class="cite-author">{author}</span>}
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
