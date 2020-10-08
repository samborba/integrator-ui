import React from 'react';
import PropTypes from 'prop-types';

import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const IntegrationButton = ({ handleClick }) => (
  <Button
    onClick={handleClick}
    icon={<PlusOutlined />}
    className='newIntegrationButton'
    type='primary'
  >
    Nova Integração
  </Button>
);

IntegrationButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default IntegrationButton;
