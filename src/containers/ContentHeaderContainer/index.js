import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import ContentHeader from '../../components/Content/ContentHeader';

const mapStateToProps = (state) => {
  return {
  };
};

const ContentHeaderContainer = (props) => {
  const { title, subTitle, backIcon } = props;

  const history = useHistory();

  const goBackHandler = () => history.goBack();

  return (
    <ContentHeader
      title={title}
      subTitle={subTitle}
      handleGoBack={goBackHandler}
      backIcon={backIcon}
    />
  );
};

ContentHeaderContainer.propTypes = {
  /** content header title */
  title: PropTypes.string,
  /** content header subtitle */
  subTitle: PropTypes.string,
  /** content header backIcon */
  backIcon: PropTypes.oneOfType([PropTypes.bool, PropTypes.element]),
};

export default connect(
  mapStateToProps,
)(ContentHeaderContainer);
