import React from "react";
import TourBox from "./TourBox";

const Tours = () => {
  return (
    <section className="section-tours">
      <div className="section-tours-wrapper">
        <div className="u-text-center u-margin-bottom-big">
          <h2 className="heading-secondary">Most popular tours</h2>
        </div>
        <div className="row">
          <TourBox />
        </div>
        <div className="u-text-center u-margin-top-huge">
          <a href="" className="btn btn--green">
            Discover all tours
          </a>
        </div>
      </div>
    </section>
  );
};
export default Tours;
