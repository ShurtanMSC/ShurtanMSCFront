import { combineReducers } from "redux";
import {graficReducer, graficTwoReducer} from './graficReducer';

const reducers = combineReducers({
    allGrafics:graficReducer,
    GraficTwo: graficTwoReducer,
})

export default reducers;