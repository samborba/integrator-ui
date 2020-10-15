import React from 'react';
import { Table, Tag } from 'antd';

import IntegratorApi from '../../../../services/IntegratorAPI';

export default class IntegrationsTable extends React.Component {
  state = { rows: [] };

  async componentDidMount() {
    const { data } = await IntegratorApi.listIntegrations();
    const records = data.integrations.map((integration, index) => {
      return {
        key: index,
        origin: integration.origin,
        experimentURL: integration.experimentURL,
        destination: integration.destination,
        status: [integration.status],
      };
    });

    this.setState({ rows: records });
  };

  columns = [
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
      render: status => (
        <>
        {status.map(currentStatus => {
            let color;

            if (currentStatus === "Running") {
              color = "green";
            } else if (currentStatus === "Stopped") {
              color = "yellow";
            } else {
              color = "red";
            }
            return (
              <Tag color={color} key={currentStatus}>
                {currentStatus.toUpperCase()}
              </Tag>
            );
          })
        }
        </>
      )
    },
  ];

  render() {
    return (
      <>
        <Table columns={this.columns} dataSource={this.state.rows} />
      </>
    );
  }
}
