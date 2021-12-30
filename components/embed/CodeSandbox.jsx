import { Sandpack } from '@codesandbox/sandpack-react';
import '@codesandbox/sandpack-react/dist/index.css';
import React from 'react';

export default function CodeSandbox(props) {
  console.log(props, 'props');
  return (
    <Sandpack
      template={props.template || 'react'}
      files={props.files}
      customSetup={props.customSetup}
    />
  );
}
