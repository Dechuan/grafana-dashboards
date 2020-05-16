import React, { useEffect, useState } from 'react';
import { Spin, Table } from 'antd';
import { useActionResult_with_errors } from '../../../Details.hooks';
import { databaseFactory } from '../../../database-models';
import { processTableData } from '../../TableContainer.tools';

export const Status = props => {
  const { tableName, databaseType, example } = props;
  const [data, setData] = useState<{ columns: any[]; rows: any[] }>({ columns: [], rows: [] });
  const [status, setActionId] = useActionResult_with_errors();

  useEffect(() => {
    const database = databaseFactory(databaseType);
    database.getStatuses({ example, tableName, setActionId });
  }, [databaseType]);

  useEffect(() => {
    setData(processTableData(status.value));
  }, [status.value]);

  return (
    <div>
      <Spin spinning={status.loading}>
        {status.error ? (
          <pre>{status.error}</pre>
        ) : data.rows.length ? (
          <Table
            dataSource={data.rows}
            columns={data.columns}
            scroll={{ x: '90%' }}
            pagination={false}
            size="small"
            bordered
          />
        ) : (
          <pre> No data found</pre>
        )}
      </Spin>
    </div>
  );
};
