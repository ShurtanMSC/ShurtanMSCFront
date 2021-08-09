import axios from "axios";
import {BASE_URL_ADMIN, TOKEN} from "./constants";

export const request=(method,url,data)=>{
    // const token=localStorage.getItem(TOKEN)
    const headers={
        // 'Authorization':token,
        'Access-Control-Allow-Origin': '*'
    }
     return axios({
         url:BASE_URL_ADMIN+url,method,data,headers})
}