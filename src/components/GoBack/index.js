import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./GoBack.scss"


class GoBack extends Component {
  render() {
    return (
      <div className="go-back">
        <Link to="/">
          Go Back
        </Link>
        </div>
    );
  }
}

export default GoBack;
