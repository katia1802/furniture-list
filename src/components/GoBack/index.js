import React, { Component } from "react";
import { Link } from "react-router-dom";

class GoBack extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <div>Go Back</div>
        </Link>
      </div>
    );
  }
}

export default GoBack;
