// CORE LIBS
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// UI LIBS
import { Layout } from 'antd';

// CONTENTS
import ContentError404 from '../ContentError404';
import IntegrationContent from '../../../containers/IntegrationContentContainer';

/**
 * Content.
 * This component is responsible for displaying the content.
 */
const Content = () => {
  // RENDER
  return (
    // layout component
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
  );
};

// EXPORT
export default Content;
