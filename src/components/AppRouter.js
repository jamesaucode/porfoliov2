import React from "react";
import Landing from './Landing';
import Navigation from "./Navigation";
import About from './About';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

const NotFoundPage = () => (
  <div>
    404 - <Link to="/">Go home</Link>
  </div>
);

const AppRouter = () => (
  <BrowserRouter>
  <div>
    <Navigation />
    <Switch>
      <Route path="/" exact={true} component={Landing} />
      <Route path="/" component={About} />
      {/* <Route path="/home/blog" component={Blog} /> */}
      {/* <Route path="/home" component={Blog} />
      <Route path="/about" exact={true} component={About} /> */}
      <Route component={NotFoundPage} />
    </Switch>
  </div>
</BrowserRouter>
);

export default AppRouter;