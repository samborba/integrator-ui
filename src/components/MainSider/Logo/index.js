import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ logoSrc, className, altText, collapse, collapsedSrc }) => (
  <div className={className}>
    {collapse ? (
      <img src={collapsedSrc} alt={altText} />
    ) : (
      <img src={logoSrc} alt={altText} />
    )}
  </div>
);

Logo.propTypes = {
  /** logo image src string */
  logoSrc: PropTypes.string.isRequired,
  /** logo css class string */
  className: PropTypes.string,
  /** logo alt text string */
  altText: PropTypes.string.isRequired,
  /** flag to change image to collapsed */
  collapse: PropTypes.bool.isRequired,
  /** collapsed logo image src */
  collapsedSrc: PropTypes.string.isRequired,
};

export default Logo;
