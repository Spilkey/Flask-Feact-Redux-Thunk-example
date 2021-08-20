import { combineReducers } from "redux";
import colourPaletteReducer from "./colourPaletteReducer";


const colourReducer = combineReducers({
    color: colourPaletteReducer

});

export default colourReducer;