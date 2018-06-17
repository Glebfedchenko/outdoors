import React, { Fragment } from "react";
import Header from "./Header";
import About from "./About";
import Features from "./Features";
import Tours from "./Tours";
import Stories from "./Stories";
import Booking from "./Booking";
import { Provider } from "react-redux";
import { ConnectedRouter as Router } from "react-router-redux";
import { Route, Switch } from "react-router-dom";
import { history, store } from "../redux/store/store";

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route
            path="/"
            render={() => (
              <Fragment>
                <Header />
                <About />
                <Features />
                <Tours />
                <Stories />
                <Booking />
              </Fragment>
            )}
          />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
