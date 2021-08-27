import {TOKEN} from "./constant";

export const configHeader=({headers:{
        'Authorization':"Bearer "+localStorage.getItem(TOKEN),
        'Access-Control-Allow-Origin': '*'
    }})
