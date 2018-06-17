import React from "react";
import { toursData } from "./tourdata";

const TourBox = () => {
  return (
    <div>
      {toursData.map((t, i) => {
        return (
          <div key={i} className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className={`card__picture ${t.pictureStyle}`} />
                <h4 className="card__heading">
                  <span className={`card__heading-span ${t.headingSpan}`}>
                    {t.heading}
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>{t.details.days}day tour</li>
                    <li>Up to {t.details.people} people</li>
                    <li>{t.details.guides} tour guides</li>
                    <li>Speep in {t.details.feature}</li>
                    <li>Diffuculty: {t.details.difficulty}</li>
                  </ul>
                </div>
              </div>
              <div className={`card__side card__side--back ${t.backStyle}`}>
                <div className="card__actionbox">
                  <div className="card__pricebox">
                    <p className="card__pricebox-only">Only</p>
                    <p className="card__pricebox-value">${t.price}</p>
                  </div>
                  <a href="" className="btn btn--white">
                    Book now!
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default TourBox;