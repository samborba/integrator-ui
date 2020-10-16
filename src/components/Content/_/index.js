import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Layout } from 'antd';

import ContentError404 from '../ContentError404';
import IntegrationContent from '../../../containers/IntegrationContentContainer';


export default class Content extends React.Component {
  render() {
    return (
      <>
      <Layout>
        <Switch>
          {/* projects content */}
          <Route exact path='/'>
            <IntegrationContent />
          </Route>
          {/* error 404 content */}
          <Route path='*'>
            <ContentError404 />
          </Route>
        </Switch>
      </Layout>
      </>
    );
  };
};
