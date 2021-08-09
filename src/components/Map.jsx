import React from 'react'
import {Link} from 'react-router-dom'
import MainPageMap from '../image/MainPage/mainPageMapWay.svg'
import Head from '../image/MainPage/head.png'
import HeadOne from '../image/MainPage/headOne.png'
import HeadThree from '../image/MainPage/headThree.png'
import Neft from '../image/MainPage/neft.png'
import Cloud from '../image/MainPage/cloud.png'
import { MainPageImg, MapBox, HeadImg, HeadOneImg,  HeadTwoImg, HeadThreeImg, HeadFourImg, NeftImg, CloudImg} from '../styled'

const Map = () => {
    return (
        <MapBox>
            <MainPageImg src={MainPageMap} alt="map" />
            <HeadImg src={Head} alt="headPhoto" />
            <HeadOneImg src={HeadOne} alt="headOnePhoto" />
            <HeadTwoImg src={HeadOne} alt="headTwoPhoto" />
            <HeadThreeImg src={HeadThree} alt="headThreePhoto" />
            <HeadFourImg src={HeadThree} alt="headFourPhoto" />
            <NeftImg src={Neft} alt="neftPhoto" />
            <Link to="/shurtan">
                <CloudImg src={Cloud} alt="cloudPhoto" />
            </Link> 
        </MapBox>
    )
}

export default Map
