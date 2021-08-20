import React from "react";

import "../styles/RangeSlider.css";

class RangeSlider extends React.Component {
  constructor(props) {
    super(props);
    this.callback = this.props.callback;
    this.min = this.props.min || 1;
    this.max = this.props.max || 50;
    this.state = { value: (this.max + this.min) / 2 };
    
  }
  handleInput(value) {
    this.callback(value);
    this.setState({ value: value });
  }

  render() {
    const that = this;
    return (
      <div class="slidecontainer">
        <input
          type="range"
          min={this.min}
          max={this.max}
          value={this.state.value}
          class="slider"
          onInput={function(e) {
            that.handleInput(e.target.value);
          }}
        />
        <div>{this.state.value}</div>
      </div>
    );
  }
}

export default RangeSlider;
