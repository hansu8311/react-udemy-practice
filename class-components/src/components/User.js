import classes from "./User.module.css";

import React, { Component } from "react";
//Component를 확장해서 사용했기때문에 props 등 사용가능.
class User extends Component {
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// export default User;

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
