import React from "react";

export const WrapperComponent = ({ component: Component, history, location, match }) => (
  <div id="main-panel" className="main-panel">
    <Component history={history} location={location} match={match} />
  </div>
);

export default WrapperComponent;
