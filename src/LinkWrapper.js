import React from "react";

import { NavLink } from "react-router-dom";

const LinkWrapper = (props) => {
  return <NavLink activeStyle={{ backgroundColor: "#5c6bc0" }} {...props} />;
};

export default LinkWrapper;
