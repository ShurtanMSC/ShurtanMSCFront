import {
    BASE_URL_ADMIN,
    BASE_URL_COLLECTION,
    BASE_URL_GASCOMPOSITION,
    BASE_URL_MINING,
    BASE_URL_UPPG,
    BASE_URL_WELL
} from "../utills/constant";
import axios from "axios";
import {configHeader} from "../utills/congifHeader";

const {apiPath} = require("../apiPath/apiPath");

class SuperAdminRequests {


    /**
     ************************************************ Users operations *******************************************************************************************
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
     ******************************************** Mining system operations ****************************************************************************************
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
     ************************************************* Uppg operations *********************************************************************************************
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
     ******************************************** Collection Point operations ***************************************************************************************
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
     ************************************************** Well operations **********************************************************************************************
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


    /**
     ************************************************** Well action **********************************************************************************************
     **/
    static async allWells() {
        let response;
        await axios.get(BASE_URL_WELL + apiPath.getAllWells, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }

    static async getAllActionByUppg(id) {
        let response;
        await axios.get(BASE_URL_WELL + apiPath.getAllActionByUppg + id, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }

    static async wellsWithAction() {
        let response;
        await axios.get(BASE_URL_WELL + apiPath.wellsWithAction, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }

    static async wellsWithActionByCollectionPoint(id) {
        let response;
        await axios.get(BASE_URL_WELL + apiPath.wellsWithActionByCollectionPoint + id, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }

    static async wellsByCollectionPoint(id) {
        let response;
        await axios.get(BASE_URL_WELL + apiPath.wellsByCollectionPoint + id, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }

    static async getAllByMiningSystem(id) {
        let response;
        await axios.get(BASE_URL_WELL + apiPath.getAllByMiningSystem + id, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }

    static async getCountByInWork(id) {
        let response;
        await axios.get(BASE_URL_WELL + apiPath.getCountByInWork, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }

    static async addAction(data) {
        let response;
        await axios.post(BASE_URL_WELL + apiPath.addAction, data, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }

    static async getOneWithAction(id) {
        let response;
        await axios.get(BASE_URL_WELL + apiPath.getOneWithAction + id, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }

    static async getOneWell(id) {
        let response;
        await axios.get(BASE_URL_WELL + apiPath.getOneWell + id, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }


    /**
     ************************************************** Uppg action **********************************************************************************************
     **/

    static async allUppgs() {
        let response;
        await axios.get(BASE_URL_UPPG + apiPath.getAllUppgs, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }

    static async uppgsWithAction() {
        let response;
        await axios.get(BASE_URL_UPPG + apiPath.uppgsWithAction, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }

    static async uppgsWithActionByMiningSystem(id) {
        let response;
        await axios.get(BASE_URL_UPPG + apiPath.uppgsWithActionByMiningSystem + id, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }

    static async uppgsByMiningSystem(id) {
        let response;
        await axios.get(BASE_URL_UPPG + apiPath.uppgsByMiningSystem + id, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }

    static async getOneUppg(id) {
        let response;
        await axios.get(BASE_URL_UPPG + apiPath.getOneUppg + id, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }

    static async getOneUppgWithAction(id) {
        let response;
        await axios.get(BASE_URL_UPPG + apiPath.getOneUppgWithAction + id, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }

    static async addActionUppg(data) {
        let response;
        await axios.post(BASE_URL_UPPG + apiPath.addActionUppg, data, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }


    /**
     ************************************************** Collection Point action **********************************************************************************************
     **/

    static async allCollectionPoints() {
        let response;
        await axios.get(BASE_URL_COLLECTION + apiPath.allCollectionPoints, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }

    static async collectionsWithActionByMiningSystem(id) {
        let response;
        await axios.get(BASE_URL_COLLECTION + apiPath.collectionsWithActionByMiningSystem + id, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }

    static async allCollectionsWithAction(id) {
        let response;
        await axios.get(BASE_URL_COLLECTION + apiPath.allCollectionsWithAction, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }

    static async collectionsByMiningSystem(id) {
        let response;
        await axios.get(BASE_URL_COLLECTION + apiPath.collectionsByMiningSystem + id, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }

    static async collectionsByUppg(id) {
        let response;
        await axios.get(BASE_URL_COLLECTION + apiPath.collectionsByUppg + id, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }

    static async oneCollectionWithAction(id) {
        let response;
        await axios.get(BASE_URL_COLLECTION + apiPath.oneCollectionWithAction + id, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }

    static async addActionCollection(data) {
        let response;
        await axios.post(BASE_URL_COLLECTION + apiPath.addActionCollection, data, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }

    static async getOneCollection(id) {
        let response;
        await axios.get(BASE_URL_COLLECTION + apiPath.getOneCollection + id, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }


    /**
     ************************************************** Mining System action **********************************************************************************************
     **/

    static async allMiningSystems() {
        let response;
        await axios.get(BASE_URL_MINING + apiPath.allMiningSystems, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }

    static async allMiningSystemsWithAction() {
        let response;
        await axios.get(BASE_URL_MINING + apiPath.allMiningSystemsWithAction, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }

    static async oneMiningSystemWithAction(id) {
        let response;
        await axios.get(BASE_URL_MINING + apiPath.oneMiningSystemWithAction + id, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }

    static async getOneMiningSystem(id) {
        let response;
        await axios.get(BASE_URL_MINING + apiPath.getMiningSystem + id, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }


    /**
     ************************************************** Gas Composition **********************************************************************************************
     **/

    static async saveGasComposition(data) {
        let response;
        await axios.post(BASE_URL_GASCOMPOSITION + apiPath.saveGasComposition, data, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }

    static async allGasComposition() {
        let response;
        await axios.get(BASE_URL_GASCOMPOSITION + apiPath.allGasComposition, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }

    static async editGasComposition(data) {
        let response;
        await axios.put(BASE_URL_GASCOMPOSITION + apiPath.editGasComposition, data, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }

    static async getGasCompositionById(id) {
        let response;
        await axios.get(BASE_URL_GASCOMPOSITION + apiPath.getGasCompositionById + id, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }

    static async deleteGasComposition(id) {
        let response;
        await axios.delete(BASE_URL_GASCOMPOSITION + apiPath.deleteGasComposition + id, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }

    static async saveMiningSystemGasComposition(data) {
        let response;
        await axios.post(BASE_URL_GASCOMPOSITION + apiPath.saveMiningSystemGasComposition, data, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }

    static async allMiningSystemGasComposition() {
        let response;
        await axios.get(BASE_URL_GASCOMPOSITION + apiPath.allMiningSystemGasComposition, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }

    static async editMiningSystemGasComposition(data) {
        let response;
        await axios.put(BASE_URL_GASCOMPOSITION + apiPath.editMiningSystemGasComposition, data, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }

    static async getMiningSystemGasComposition(id) {
        let response;
        await axios.get(BASE_URL_GASCOMPOSITION + apiPath.getMiningSystemGasComposition+id, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }

    static async deleteMiningSystemGasComposition(id) {
        let response;
        await axios.delete(BASE_URL_GASCOMPOSITION + apiPath.deleteMiningSystemGasComposition+id, configHeader)
            .then(res => {
                response = res.data
            }).catch(error => {
                response = error.response.data
            })
        return response
    }

}

export default SuperAdminRequests;