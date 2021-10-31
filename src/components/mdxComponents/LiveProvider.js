import * as React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

const ReactLiveProvider = ({ code, hideCode }) => {
  return (
    <LiveProvider code={code} noInline={true}>
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
