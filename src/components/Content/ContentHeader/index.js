// CORE LIBS
import React from 'react';
import PropTypes from 'prop-types';

// UI LIBS
import { PageHeader, Typography } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

// STYLES
import './style.less';

const { Title } = Typography;

/**
 * Content Header.
 * This component is responsible for displaying the content header with editable
 * title and go back arrow.
 *
 * @param props
 */
const ContentHeader = (props) => {
  // destructuring props
  const {
    handleGoBack,
    title,
    extra,
    backIcon,
  } = props;

  // RENDER
  return (
    // page header component
    <PageHeader
      className='contentHeader'
      title={
        // title component
        <Title level={3}>{title}</Title>
      }
      onBack={handleGoBack}
      extra={extra}
      backIcon={backIcon}
    />
  );
};

// PROP TYPES
ContentHeader.propTypes = {
  /** content header go back function */
  handleGoBack: PropTypes.func.isRequired,
  /** content header title */
  title: PropTypes.string.isRequired,
  /** content header is loading */
  loading: PropTypes.bool.isRequired,
  /** if false the back icon will not be displayed */
  backIcon: PropTypes.oneOfType([PropTypes.bool, PropTypes.element]),
};

// PROP DEFAULT VALUES
ContentHeader.defaultProps = {
  /* show back icon */
  backIcon: <ArrowLeftOutlined />,
};

// EXPORT
export default ContentHeader;
