import { ActionTypes } from '../contants/action-type';

const initialState = {
    grafic: [],
    graficTwo: [],
};
export const graficReducer = ( state = initialState, {type, upLoad}) => {
    switch (type) {
        case ActionTypes.SET_GRAFIC:
            return {...state, grafic: upLoad};
        default:
            return state;
    }
}

export const graficTwoReducer = ( state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_GRAFICTWO:
            return {graficTwo: state.graficTwo};
        default:
            return state;
    }
}

// const initialState = {
//
// }
// export const pressureReducer = ( state = initialState, { type, upLoad }) => {
//     switch (type) {
//         case ActionTypes.SET_PRESSURE:
//             return { ...state, pressure: upLoad};
//         default:
//             return state;
//     }
// }
