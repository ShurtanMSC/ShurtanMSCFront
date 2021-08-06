import {BASE_URL_ADMIN} from "../utills/constants";
import axios from "axios";
import {configHeader} from "../utills/congifHeader";

const {apiPath} = require("../apiPath/apiPath");

class SuperAdminRequests {


    /**
     ***************************************************** Users operations *******************************************************************************************
     **/
    static async addUser(data) {
        let response;
        await axios.post(BASE_URL_ADMIN + apiPath.addUser, data, configHeader)
            .then(res => {
                response = res.data
            }).catch(res => {
                console.log(res)
                response = res
            })
        return response
    }

    static async editUser(data) {
        let response;
        await axios.put(BASE_URL_ADMIN + apiPath.editUser, data, configHeader)
            .then(res => {
                response = res.data
            }).catch(res => {
                response = res.response.data
            })
        return response
    }

    static async deleteUser(id) {
        let response;
        await axios.delete(BASE_URL_ADMIN + apiPath.deleteUser + id, configHeader)
            .then(res => {
                response = res.data
            }).catch(res => {
                response = res.response.data
            })
        return response
    }

    static async allUser() {
        let response;
        await axios.get(BASE_URL_ADMIN + apiPath.allUsers, configHeader)
            .then(res => {
                response = res.data
            }).catch(res => {
                response = res.response.data
            })
        return response
    }

    static async getUser(id) {
        let response;
        await axios.get(BASE_URL_ADMIN + apiPath.byIdUser + id, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }


    /**
     ************************************************* Mining system operations ****************************************************************************************
     **/
    static async addMiningSystem(data) {
        let response;
        await axios.post(BASE_URL_ADMIN + apiPath.addMining, data, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }

    static async editMiningSystem(data) {
        let response;
        await axios.put(BASE_URL_ADMIN + apiPath.editMining, data, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }

    static async deleteMiningSystem(id) {
        let response;
        await axios.delete(BASE_URL_ADMIN + apiPath.deleteMining + id, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }

    static async allMiningSystem() {
        let response;
        await axios.get(BASE_URL_ADMIN + apiPath.allMinings, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }

    static async getMiningSystem(id) {
        let response;
        await axios.get(BASE_URL_ADMIN + apiPath.byIdMining + id, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }


    /**
     ****************************************************** Uppg operations *********************************************************************************************
     **/
    static async addUppg(data) {
        let response;
        await axios.post(BASE_URL_ADMIN + apiPath.addUppg, data, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }

    static async editUppg(data) {
        let response;
        await axios.put(BASE_URL_ADMIN + apiPath.editUppg, data, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }

    static async deleteUppg(id) {
        let response;
        await axios.delete(BASE_URL_ADMIN + apiPath.deleteUppg + id, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }

    static async allUppg() {
        let response;
        await axios.get(BASE_URL_ADMIN + apiPath.allUppgs, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }

    static async getUppg(id) {
        let response;
        await axios.get(BASE_URL_ADMIN + apiPath.byIdUppg + id, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }



    /**
     ************************************************* Collection Point operations ***************************************************************************************
     **/
    static async addCollectionPoint(data) {
        let response;
        await axios.post(BASE_URL_ADMIN + apiPath.addCollection, data, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }

    static async editCollectionPoint(data) {
        let response;
        await axios.put(BASE_URL_ADMIN + apiPath.editCollection, data, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }

    static async deleteCollectionPoint(id) {
        let response;
        await axios.delete(BASE_URL_ADMIN + apiPath.deleteCollection + id, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }

    static async allCollectionPoint() {
        let response;
        await axios.get(BASE_URL_ADMIN + apiPath.allCollections, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }

    static async getCollectionPoint(id) {
        let response;
        await axios.get(BASE_URL_ADMIN + apiPath.byIdCollection + id, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }




    /**
     ******************************************************* Well operations **********************************************************************************************
     **/
    static async addWell(data) {
        let response;
        await axios.post(BASE_URL_ADMIN + apiPath.addWell, data, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }

    static async editWell(data) {
        let response;
        await axios.put(BASE_URL_ADMIN + apiPath.editWell, data, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }

    static async deleteWell(id) {
        let response;
        await axios.delete(BASE_URL_ADMIN + apiPath.deleteWell + id, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }

    static async allWell() {
        let response;
        await axios.get(BASE_URL_ADMIN + apiPath.allWells, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }

    static async getWell(id) {
        let response;
        await axios.get(BASE_URL_ADMIN + apiPath.byIdWell + id, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }


}

export default SuperAdminRequests;