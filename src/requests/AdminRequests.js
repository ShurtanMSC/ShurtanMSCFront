import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import {BASE_URL} from "../../utills/constants";
import {apiPath} from "../../apiPath/apiPath";
import {configHeader} from "../../utills/congifHeader";
import {toast} from "react-toastify";

/** Admin requests **/
class AdminRequests {

    /** User operations **/
    static async allUsers() {
        let users = null;
        await axios.get(BASE_URL + apiPath.getAllUsersByPageable,
            configHeader)
            .then(res => {
                users = res.data;
                console.log(users, 'RES USERS')
            })
            .catch(err => {
                console.log(err,"errorr")
            })
        return users
    }

    static async allUsersByRoleSeller() {
        let sellers = {};
        await axios.get(BASE_URL + apiPath.getAllUsersRoleSeller,
            configHeader)
            .then(res => {
                sellers = res.data;
            })
            .catch(err => {

            })
        return sellers
    }

    static async saveOrEditUser(user){
        let response;
        await axios.post(BASE_URL+apiPath.saveOrEditUser,user,configHeader)
            .then(res=>{
                console.log(res,'SAVE Or EDIT RES')
                axios.get(BASE_URL + apiPath.getAllUsersByPageable,
                    configHeader)
                    response=res.data
                toast.success(res.data.message)
            }).catch(res=>{
            toast.error('Error')
        })
        return response
    }

    static async removeUser(id){
        let bool=false;
        await axios.get(BASE_URL + apiPath.deleteUser + id, configHeader)
            .then(res => {
                console.log(res, 'RES REMOVE USER')
                // toast.success(res.data.message)
                toast.success("Deleted")
                bool=true
            }).catch(error => {
            // toast.error(error.data.message?error.data.message:"Error")
            toast.error("Error")
            })
        return bool
    }

    static async changeUserActive(id,enable){
        let res="";
        await axios.get(BASE_URL+apiPath.changeUserActive+id,configHeader)
            .then(result=>{
                res=result;
            });
        return res;
    }


    /** Shop operations **/
    static async allShops() {
        let shops = {};
        await axios.get(BASE_URL + apiPath.getAllShopsByPageable,
            configHeader)
            .then(res => {
                console.log(res,"shops")
                shops = res.data;

            })
            .catch(err => {

            })
        return shops
    }

    static async saveOrEditShop(shop){
        let response;
        console.log(shop,"aaaaaaaaaa")
        await axios.post(BASE_URL+apiPath.saveOrEditShop,shop,configHeader)
            .then(res=>{
                console.log(res,'SAVE Or EDIT RES')
                axios.get(BASE_URL + apiPath.getAllShopsByPageable,
                    configHeader)
                response=res.data
                toast.success(res.data.message)
            }).catch(res=>{
                toast.error('Error')
            })
        return response
    }

    static async removeShop(id){
        let bool=false
        await axios.delete(BASE_URL + apiPath.deleteShop + id, configHeader)
            .then(res => {
                console.log(res, 'RES REMOVE USER')
                toast.success(res.data.message)
                bool=true
            }).catch(error => {
            toast.error(error.data?error.data:"Error")
        })
        return bool
    }

    static async changeShopActive(id,active){
        let res="";
        await axios.get(BASE_URL+apiPath.changeShopActive+id,configHeader)
            .then(result=>{
                res=result;
            });
        return res;
    }



    /** Warehouse operations **/
    static async allWarehouses() {
        let warehouses = {};
        await axios.get(BASE_URL + apiPath.getAllWarehousesByPageable,
            configHeader)
            .then(res => {
                warehouses = res.data;
            })
            .catch(err => {

            })
        return warehouses
    }

    static async saveOrEditWarehouse(warehouse){
        let response;
        console.log(warehouse,"aaaaaaaaaa")
        await axios.post(BASE_URL+apiPath.saveOrEditWarehouse,warehouse,configHeader)
            .then(res=>{
                console.log(res,'SAVE Or EDIT RES')
                axios.get(BASE_URL + apiPath.getAllWarehousesByPageable,
                    configHeader)
                response=res.data
                toast.success(res.data.message)
            }).catch(res=>{
                toast.error('Error')
            })
        return response
    }

    static async removeWarehouse(id){
        let bool=false
        await axios.delete(BASE_URL + apiPath.deleteWarehouse + id, configHeader)
            .then(res => {
                console.log(res, 'RES REMOVE USER')
                toast.success(res.data.message)
                bool=true
            }).catch(error => {
                toast.error(error.data?error.data:"Error")
            })
        return bool
    }

    static async changeWarehouseActive(id,active){
        let res="";
        await axios.get(BASE_URL+apiPath.changeWarehouseActive+id,configHeader)
            .then(result=>{
                res=result;
            });
        return res;
    }


    /** Category operations **/
    static async allCategories() {
        let categorys = [];
        await axios.get(BASE_URL + apiPath.getAllCategorysByPageable,
            configHeader)
            .then(res => {
                categorys = res.data;
            })
            .catch(err => {

            })
        return categorys
    }

    static async saveOrEditCategory(category){
        let response;
        console.log(category,"category")
        await axios.post(BASE_URL+apiPath.saveOrEditCategory,category,configHeader)
            .then(res=>{
                console.log(res,'SAVE Or EDIT RES')
                axios.get(BASE_URL + apiPath.getAllCategorysByPageable,
                    configHeader)
                response=res.data
                toast.success(res.data.message)
            }).catch(res=>{
                toast.error('Error')
            })
        return response
    }

    static async removeCategory(id){
        let bool=false
        await axios.get(BASE_URL + apiPath.deleteCategory + id, configHeader)
            .then(res => {
                console.log(res, 'RES REMOVE CATEGORY')
                toast.success(res.data.message)
                bool=true
            }).catch(error => {
                toast.error(error.data?error.data:"Error")
            })
        return bool
    }












    /** Product operations **/

    static async allProduct() {
        let products = {};
        await axios.get(BASE_URL + apiPath.getAllProductByPageable,
            configHeader)
            .then(res => {
                products = res.data;
            })
            .catch(err => {

            })
        return products
    }

    static async saveOrEditProduct(product){
        let response;
        console.log(product,"product")

        if (product.id){
            await axios.post(BASE_URL+apiPath.editProduct,product,configHeader)
                .then(res=>{
                    console.log(res,'EDIT RES')
                    axios.get(BASE_URL + apiPath.getAllProductByPageable,
                        configHeader)
                    response=res.data
                    toast.success(res.data.message)
                }).catch(res=>{
                    response=res
                    toast.error('Error')
                })
        }
        else {
            await axios.post(BASE_URL+apiPath.addProduct,product,configHeader)
                .then(res=>{
                    console.log(res,'EDIT RES')
                    axios.get(BASE_URL + apiPath.getAllProductByPageable,
                        configHeader)
                    response=res.data
                    toast.success(res.data.message)
                }).catch(res=>{
                    toast.error('Error')
                    response=res
                })
        }


        return response
    }

    static async removeProduct(id){
        let bool=false
        await axios.get(BASE_URL + apiPath.deleteProduct + id, configHeader)
            .then(res => {
                console.log(res, 'RES REMOVE PRODUCT')
                toast.success(res.data.message)
                bool=true
            }).catch(error => {
                toast.error(error.data?error.data:"Error")
            })
        return bool
    }

    static async changeProductActive(id,active){
        let res="";
        await axios.get(BASE_URL+apiPath.changeProductActive+id,configHeader)
            .then(result=>{
                res=result;
            });
        return res;
    }



}

export default AdminRequests;