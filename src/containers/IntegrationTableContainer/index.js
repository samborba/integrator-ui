import React from 'react';
import { connect } from 'react-redux';

import IntegrationsTable from '../../components/Content/ContentIntegrationsTable/IntegrationsTable';

const mapStateToProps = (state) => {
  return {};
};

const IntegrationsTableContainer = () => {
  return <IntegrationsTable />;
};

export default connect(mapStateToProps)(IntegrationsTableContainer);
