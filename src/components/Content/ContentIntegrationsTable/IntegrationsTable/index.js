import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: <strong>Origem</strong>,
    dataIndex: 'origin',
  },
  {
    title: <strong>URL Fluxo Implantado</strong>,
    dataIndex: 'experimentURL',
  },
  {
    title: <strong>Destino</strong>,
    dataIndex: 'destination',
  },
  {
    title: <strong>Status</strong>,
    dataIndex: 'status',
  }
];
const data = [
  {
    key: '1',
    origin: 'Prometheus',
    experimentURL: "http://awsplatiagro04/seldon/deployments/59a44281-3055-4907-b890-7df7c1a328d4/api/v1.0/predictions",
    destination: 'Athenas',
    status: 'Running',
  },
  {
    key: '2',
    origin: 'Selene',
    experimentURL: "http://awsplatiagro02/seldon/deployments/8417e9d0-2ac9-41cb-8e1d-a5a89ef68212/api/v1.0/predictions",
    destination: 'Eros',
    status: 'Stopped',
  },
  {
    key: '4',
    origin: 'Herácles',
    experimentURL: "http://awsplatiagro06/seldon/deployments/dc381760-1a69-439e-8e76-3f45d9562bac/api/v1.0/predictions",
    destination: 'Belerofonte',
    status: 'Failed',
  },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      'selectedRows: ',
      selectedRows
    );
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};

const MaintenanceCalendar = () => {
  return <Table columns={columns} dataSource={data} />;
};

export default MaintenanceCalendar;
