import React from "react";
import { Link } from "react-router-dom";

class StyledButton extends React.Component {
  constructor(props) {
    super(props);
    this.href = this.props.href || null;
    this.target = this.props.target || "";
    this.buttonSize = this.props.size || "medium";
    this.title = this.props.title || "";
  }

  render() {
    let link = this.href ? (
      <Link to={this.href}>
        <button className={this.buttonSize}>
          <span>{this.title}</span>
        </button>
      </Link>
    ) : (
      <button className={this.buttonSize}>
        <span>{this.title}</span>
      </button>
    );
    return <div>{link}</div>;
  }
}

export default StyledButton;
