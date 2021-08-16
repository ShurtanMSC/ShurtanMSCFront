import {TOKEN} from "./constant";

export const configHeader=({headers:{
        'Authorization':localStorage.getItem(TOKEN),
        'Access-Control-Allow-Origin': '*'
    }})
