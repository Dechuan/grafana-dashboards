import React, { useEffect, useState } from 'react';
import ExampleService from './Example.service';
import Highlight from 'react-highlight.js';
import { ReactJSON } from '../../../../../react-plugins-deps/components/ReactJSON/ReactJSON';
import { useExamples } from './Example.hooks';
import { useDatabaseType } from '../Details.hooks';

const getExample = databaseType => (example: any): any => {
  if (databaseType === 'mongodb') {
    return <ReactJSON json={JSON.parse(example.example)} />;
  }

  return <Highlight language="sql">{example.example}</Highlight>;
};

const Example = props => {
  const [examples] = useExamples();
  const databaseType = useDatabaseType();

  return (
    <div>
      {examples && examples.length
        ? examples.map(getExample(databaseType))
        : 'Sorry, no examples found for this query'}
    </div>
  );
};

export default Example;
