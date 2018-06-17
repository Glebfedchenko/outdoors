import React, { Fragment } from "react";
import Header from "./Header";
import About from "./About";
import Features from "./Features";
import Tours from "./Tours";

const App = () => {
  return (
    <Fragment>
      <Header />
      <About />
      <Features />
      <Tours />
    </Fragment>
  );
};

export default App;
