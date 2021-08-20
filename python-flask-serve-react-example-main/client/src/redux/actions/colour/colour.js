import {API_REQUEST} from "../../constants/actionsTypes";
import { GET_COLOUR_PALETTE } from "../../constants/actionsTypes";

export const fetchColourPalette = { 
        type: API_REQUEST,
        payload: Object.assign({
        url: `http://localhost:5000/random-palette`,
        next: GET_COLOUR_PALETTE,
        method: 'GET'
        })
    }
  