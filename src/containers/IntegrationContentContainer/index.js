import React from 'react';

import ContentHeaderContainer from '../ContentHeaderContainer';
import IntegrationsTableContainer from '../IntegrationTableContainer';

import IntegrationButton from '../../components/Content/IntegrationButton';

export default class IntegrationContent extends React.Component {
  render() {
    return (
      <>
        <ContentHeaderContainer title='Integrações' backIcon={false} />
        <div className='contentPage'
             style={{margin: "20px 20px 0px", padding: "10px"}}
        >
          <IntegrationButton />
          <IntegrationsTableContainer />
        </div>
      </>
    );
  };
};
