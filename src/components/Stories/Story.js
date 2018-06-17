import { storyData } from "./storydata";

import React from "react";
const Story = () => {
  return (
    <div>
      {storyData.map((s, i) => {
        return (
          <div key={i} className="row">
            <div className="story">
              <figure className="story__shape">
                <img src={s.image} alt="photo" className="story__img" />
                <figcaption className="story__caption">{s.name}</figcaption>
              </figure>
              <div className="story__text">
                <h3 className="heading-tertiary u-margin-bottom-small">
                  {s.review}
                </h3>
                <p>{s.text}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Story;
