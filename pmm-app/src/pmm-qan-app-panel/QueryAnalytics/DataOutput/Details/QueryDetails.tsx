import React, { useContext, useEffect, useState } from 'react';
import { Divider, Tabs } from 'antd';
import './QueryDetails.scss';
import Fingerprint from './Fingerprint';
import Explain from './Explain/Explain.container';
import Example from './Example/Example';
import Metrics from './Metrics/Metrics';
import { StateContext } from '../../StateContext';
import Tooltip from 'antd/es/tooltip';
import TableCreateContainer from './Table/TableContainer';
import { useDatabaseType } from './Details.hooks';
import { DATABASE, TabKeys } from './Details.constants';

const { TabPane } = Tabs;

const QueryDetails = () => {
  const {
    panelState: { queryId, groupBy, fingerprint, controlSum },
  } = useContext(StateContext);
  const databaseType = useDatabaseType();
  const [activeTab, setActiveTab] = useState(TabKeys.Details);

  useEffect(() => setActiveTab(TabKeys.Details), [queryId]);

  return (
    <div className="query-analytics-details-grid" id="query-analytics-details">
      <Fingerprint query={fingerprint} controlSum={controlSum} groupBy={groupBy} />
      <div className="details-tabs">
        <Divider />
        <Tabs activeKey={activeTab} onChange={setActiveTab} tabPosition="top">
          <TabPane tab={<span>Details</span>} key={TabKeys.Details}>
            <Metrics />
          </TabPane>
          <TabPane tab={<span>Examples</span>} key={TabKeys.Examples}>
            <Example />
          </TabPane>
          <TabPane
            tab={
              <Tooltip title="Available for MySQL only" placement="leftTop">
                Explain
              </Tooltip>
            }
            key={TabKeys.Explain}
            disabled={databaseType === DATABASE.postgresql}
          >
            <Explain />
          </TabPane>
          <TabPane tab={<span>Tables</span>} key={TabKeys.Tables}>
            <TableCreateContainer />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default QueryDetails;
