import React from 'react';

import { Modal, Form, Input, notification } from 'antd';

import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import IntegratorApi from '../../../services/IntegratorAPI';

export default class IntegrationButton extends React.Component {
  formRef = React.createRef();
  state = { visible: false };

  showModal = () => {
    this.setState({ visible: true })
  };

  handleCancel = () => {
    this.setState({ visible: false });
    this.formRef.current.resetFields();
  };

  handleSubmit = async () => {
    this.formRef.current.validateFields().then((values) => {
      const {
        origin,
        experimentURL,
        destination,
      } = values;
  
      IntegratorApi.createIntegration(origin, destination, experimentURL)
      .then(() => {
        this.setState({ visible: false });

        notification["success"]({
          message: "Integração Criada",
          description:
            "A integração foi criada com sucesso. Aguarde alguns segundos até que as conexões sejam estabelecidas.",
        });

        window.setTimeout(function() {window.location.reload()}, 3500);
      });
    }).catch((error) => {
      console.log("Empty fields");
    });
  };

  render() {
    return(
      <>
        <Button
          onClick={this.showModal}
          icon={<PlusOutlined />}
          className='newIntegrationButton'
          type='primary'
          style={{marginBottom: "20px"}}
        >
          Nova Integração
        </Button>
        <Modal
          title="Nova Integração"
          visible={this.state.visible}
          onOk={() => alert("Such a wow")}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Cancelar
            </Button>,
            <Button key="submit" type="primary" onClick={this.handleSubmit}>
              Criar
            </Button>
          ]}
        >
          <Form 
            id='integrationForm'
            layout='vertical'
            preserve={false}
            ref={this.formRef}
          >
            <Form.Item
              label='Origem'
              name='origin'
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: 'Por favor, insira a origem'
                }
              ]}>
              <Input placeholder="Sensor Origem"/>
            </Form.Item>
            <Form.Item
              label='URL do fluxo implantado'
              name='experimentURL'
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: 'Por favor, insira a URL do fluxo implantado'
                }
              ]}>
              <Input
                placeholder="<platiagro>/seldon/deployments/<experimentId>/api/v1.0/predictions"/>
            </Form.Item>
            <Form.Item
              label='Destino'
              name='destination'
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: 'Por favor, insira o destino'
                }
              ]}>
              <Input placeholder="Sensor Destino"/>
            </Form.Item>
          </Form>
        </Modal>
      </>
    )
  }
}  
