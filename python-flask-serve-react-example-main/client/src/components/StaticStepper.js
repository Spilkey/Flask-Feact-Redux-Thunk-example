import React from "react";

import "../styles/CreateTheme.css";

class StaticStepper extends React.Component {
    constructor(props){
        super(props);
        this.content = this.props.content;
        this.stepNumber = this.props.stepNumber;
        this.stepTitle = this.props.stepTitle;
    }

  render() {
    return (
      <div className="theme-step active">
        <div className="top">
          <div className="step-number">{this.stepNumber}</div>
          <div className="title">{this.stepTitle}</div>
        </div>
        <div className="bottom">
          <div className="line"></div>
          <div className="content">{this.content}</div>
        </div>
      </div>
    );
  }
}
export default StaticStepper;
