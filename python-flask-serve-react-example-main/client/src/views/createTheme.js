import React from "react";

import StaticStepper from '../components/StaticStepper'
import ColorPaletteSelector, { ColorPaletteSelectorFunc } from '../components/ColorPaletteSelector'
import FontSelector from '../components/FontPicker';
import FontSizer from '../components/FontSize'

import "../styles/CreateTheme.css";

class CreateTheme extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="create-theme-main">
        <StaticStepper stepNumber="1" stepTitle="Color Palette" content={<ColorPaletteSelector/>}/>
        <StaticStepper stepNumber="1" stepTitle="Color Palette" content={<ColorPaletteSelectorFunc/>}/>
        <StaticStepper stepNumber="2" stepTitle="Font Picker" content={<FontSelector/>}/>
        <StaticStepper stepNumber="3" stepTitle="Font Size" content={<FontSizer/>}/>
      </div>
    );
  }
}

export default CreateTheme;
