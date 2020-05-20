import React, { useContext } from 'react';
import Highlight from 'react-highlight.js';
import { ReactJSON } from '../../../../../../react-plugins-deps/components/Elements/ReactJSON/ReactJSON';
import { useExamples } from './Example.hooks';
import { useDatabaseType } from '../Details.hooks';
import { DATABASE } from '../Details.constants';
import { PanelProvider } from '../../../../../panel/panel.provider';

const getExample = databaseType => (example: any): any => {
  if (databaseType === DATABASE.mongodb) {
    return <ReactJSON json={JSON.parse(example)} />;
  }

  return <Highlight language="sql">{example}</Highlight>;
};

const Example = () => {
  const {
    panelState: { fingerprint },
  } = useContext(PanelProvider);
  const databaseType = useDatabaseType();
  let [examples] = useExamples();
  return (
    <div>
      {databaseType === DATABASE.postgresql ? (
        getExample(databaseType)(fingerprint)
      ) : examples && examples.filter(example => example.example).length ? (
        examples
          .filter(example => example.example)
          .map(example => example.example)
          .map(getExample(databaseType))
      ) : (
        <pre>Sorry, no examples found for this query</pre>
      )}
    </div>
  );
};

export default Example;
