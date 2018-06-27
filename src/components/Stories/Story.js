import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Story = ({ storyData }) => (
  <div>
    {storyData.map(s => (
      <div key={s.name} className="row">
        <div className="story">
          <figure className="story__shape">
            <img src={s.image} alt="story_photo" className="story__img" />
            <figcaption className="story__caption">
              {s.name}
            </figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              {s.review}
            </h3>
            <p>
              {s.text}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
);
Story.propTypes = {
  storyData: PropTypes.array.isRequired,
};
export default connect(state => ({ storyData: state.stories }))(Story);
