import { hot } from 'react-hot-loader/root';

import React from 'react';

import { Layout } from 'antd';

import MainSider from '../MainSider/_';
import Content from '../Content/_';

import './style.less';

const App = () => (
  <Layout className='main-layout'>
    <MainSider />
    <Content />
  </Layout>
);

export default hot(App);
