import React, { useState } from 'react';

import { Layout } from 'antd';

import Logo from '../Logo';
import MainMenuContainer from '../../../containers/MainMenuContainer';

import './style.less';

import dojotCollapsed from '../../../assets/dojot-collapsed.png';
import long from '../../../assets/long.png';

const { Sider } = Layout;

const MainSider = () => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={() => setCollapsed(!collapsed)}
      width={250}
      className='mainSider'
    >
      <Logo
        collapse={collapsed}
        logoSrc={long}
        collapsedSrc={dojotCollapsed}
        className='dojotLogo'
        altText='Dojot logo'
      />
      <MainMenuContainer className='mainMenu' />
    </Sider>
  );
};

export default MainSider;
