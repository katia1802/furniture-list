import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./GoBack.scss"


class GoBack extends Component {
  render() {
    return (
      <div className="go-back">
        <Link to="/">
          Go back
        </Link>
        </div>
    );
  }
}

export default GoBack;
