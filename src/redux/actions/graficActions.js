import { ActionTypes } from '../contants/action-type'

export const setGrafic = (grafic) => {
    return {
        type: ActionTypes.SET_GRAFIC,
        upLoad: grafic,
    }
}
export const setGraficTwo = (graficTwo) => {
    return {
        type: ActionTypes.SET_GRAFICTWO,
        upLoad: graficTwo,
    }
}
// export const setPressure = (pressure) => {
//     return {
//         type: ActionTypes.SET_PRESSURE,
//         upLoad: pressure,
//     }
// }