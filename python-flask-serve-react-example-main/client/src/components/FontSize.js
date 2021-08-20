import React from "react";

import RangeSlider from './RangeSlider';

import '../styles/FontSize.css';

class FontSizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fontSize: 16 };

    this.changeFontSize = this.changeFontSize.bind(this)
  }

  changeFontSize(value) {
    this.setState({ fontSize: value });
    
  }

  render() {
    const fontSizeUI = this.state.fontSize;
    return (
      <div className="font-size-main">
        <RangeSlider min={16} max={40} callback={this.changeFontSize} />
        <p className="apply-font" style={{fontSize: `${fontSizeUI}px`}}>Sample Text Size</p>
      </div>
    );
  }
}

export default FontSizer;
