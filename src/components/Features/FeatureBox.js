import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const FeatureBox = ({ featureData }) => (
  <div>
    {featureData.map((item, i) => (
      <div key={item.name} className="col-1-of-4">
        <div className="feature-box">
          <i className={`feature-box__icon ${item.icon}`} />
          <h3 className="heading-tertiary u-margin-bottom-small">
            {item.name}
          </h3>
          <p className="feature-box__text">
            {item.text}
          </p>
        </div>
      </div>
    ))}
  </div>
);

FeatureBox.propTypes = {
  featureData: PropTypes.arrayOf(Object).isRequired,
};
export default connect(state => ({ featureData: state.features }))(FeatureBox);
