import * as React from 'react';
import { Input } from 'antd';

import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

const scope = {
  React,
  Input,
};

const ReactLiveProvider = ({ code, hideCode }) => {
  return (
    <LiveProvider code={code} scope={scope} noInline={true}>
      {
        !hideCode &&
        <>
          <LiveEditor />
          <LiveError />
        </>
      }
      <LivePreview />
    </LiveProvider>
  );
};

export default ReactLiveProvider;
