import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: <strong>Origem</strong>,
    dataIndex: 'name',
  },
  {
    title: <strong>URL Fluxo Implantado</strong>,
    dataIndex: 'age',
  },
  {
    title: <strong>Destino</strong>,
    dataIndex: 'address',
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
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
