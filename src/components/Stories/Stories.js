import React from "react";
import Story from "./Story";
import video from "../../styles/img/video.mp4";
import video1 from "../../styles/img/video.webm";

const Stories = () => {
  return (
    <section className="section-stories">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={video} type="video/mp4" />
          <source src={video1} type="video/webm" />
          Your browser is not supported
        </video>
      </div>
      <div className="u-text-center u-margin-bottom-big">
        <h2 className="heading-secondary">We make people genuinely happy</h2>
      </div>
      <Story />
      <div className="u-text-center u-margin-top-huge">
        <a href="" className="btn-text">
          Read all stories &rarr;
        </a>
      </div>
    </section>
  );
};
export default Stories;
