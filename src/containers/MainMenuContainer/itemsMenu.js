import React from 'react';

import { ApiOutlined, SettingOutlined } from '@ant-design/icons';

const itemsMenu = [
  {
    icon: <ApiOutlined />,
    title: 'Integração',
    path: '/',
  },
  {
    icon: <SettingOutlined />,
    title: 'Configurações',
    path: '/configuracoes',
  },
];

export default itemsMenu;
