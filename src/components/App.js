import React, { Fragment } from "react";
import Header from "./Header";
import About from "./About";
import Features from "./Features";
import Tours from "./Tours";
import Stories from "./Stories";

const App = () => {
  return (
    <Fragment>
      <Header />
      <About />
      <Features />
      <Tours />
      <Stories />
    </Fragment>
  );
};

export default App;
