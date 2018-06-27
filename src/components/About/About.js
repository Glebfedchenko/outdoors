import React from 'react';
import photo1 from '../../styles/img/nat-1-large.jpg';
import photo2 from '../../styles/img/nat-2-large.jpg';
import photo3 from '../../styles/img/nat-3-large.jpg';

const About = () => (
  <main>
    <section className="section-about">
      <div className="u-text-center">
        <h2 className="heading-secondary">
Exiting tours for adveturous people
        </h2>
      </div>
      <div className="row">
        <div className="u-margin-bottom-big">
          <div className="col-1-of-2">
            <h3 className="heading-tertiary u-margin-bottom-small">
              You are going to fall in love with nature
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere doloremque placeat
              aliquam temporibus totam esse ex odit error odio voluptate? Ipsam maiores, dolores
              incidunt doloribus nam molestiae voluptatum qui aliquam.
            </p>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Live advetures like you never have before
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere doloremque placeat
              aliquam temporibus totam esse ex odit error odio voluptate? Ipsam maiores, dolores
              incidunt doloribus nam molestiae voluptatum qui aliquam.
            </p>
            <a href="/x" className="btn-text">
              Learn more &rarr;
            </a>
          </div>
          <div className="col-1-of-2">
            <div className="composition">
              <img
                src={photo1}
                alt="Photo1"
                className="composition__photo composition__photo--p1"
              />
              <img
                src={photo2}
                alt="Photo2"
                className="composition__photo composition__photo--p2"
              />
              <img
                src={photo3}
                alt="Photo3"
                className="composition__photo composition__photo--p3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default About;
