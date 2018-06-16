import React from "react";
import { featureData } from "./featureData";
const FeatureBox = () => {
  return (
    <div>
      {featureData.map((item, i) => {
        return (
          <div key={i} className="col-1-of-4">
            <div className="feature-box">
              <i className={`feature-box__icon ${item.icon}`} />
              <h3 className="heading-tertiary u-margin-bottom-small">
                {item.name}
              </h3>
              <p className="feature-box__text">{item.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeatureBox;
