import { GET_COLOUR_PALETTE } from "../../constants/actionsTypes";

// Define an initial state value for the app
const initialState = {
    loading: false,
    error: false,
    numColors: 5,
}

// Create a "reducer" function that determines what the new state
// should be when something happens in the app
function colourPaletteReducer(state = initialState, action) {
    // Reducers usually look at the type of action that happened
    // to decide how to update the state

    const { payload } = action;

    switch (action.type) {
        case GET_COLOUR_PALETTE.PENDING:
            return {
                ...state,
                loading: true,
                error: false,
            }
        case GET_COLOUR_PALETTE.SUCCESS:

            return {
                ...state,
                ...payload,
                loading: false,
                error: false
            }

        case GET_COLOUR_PALETTE.ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            };

        default:
            // If the reducer doesn't care about this action type,
            // return the existing state unchanged
            return state
    }
}



export default colourPaletteReducer;