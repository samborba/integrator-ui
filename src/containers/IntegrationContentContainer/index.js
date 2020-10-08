import React from 'react';

import ContentHeaderContainer from '../ContentHeaderContainer';
import IntegrationsTableContainer from '../IntegrationTableContainer';

import IntegrationButton from '../../components/Content/IntegrationButton';

const IntegrationContent = () => (
  <>
    <ContentHeaderContainer title='Integrações' backIcon={false} />
    <div className='contentPage'>
      <IntegrationButton handleClick={() => alert('TODO')} />
      <IntegrationsTableContainer />
    </div>
  </>
);

export default IntegrationContent;
