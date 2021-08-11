import styled from "styled-components"

// admin page
export const Window = styled.div`
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: flex-start;
    overflow: hidden;
`
export const ContainerFluid = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Img = styled.img`
    width:100%;
    height: 100%;
    object-fit: cover;
`
export const Input = styled.input`
    background: #F2F2F2;
    border-radius: 5px;
    width:150%;
    padding: 0.75rem 1.5rem;
    margin-bottom: 20px;
    outline:none;
    border:none;
    &::placeholder{
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 22px;
        color: #000000;
        opacity: 0.5;
    }
    &:focus{
        border:1px solid #3393DB;
        box-shadow: 0 0 2px 2px #3392db6c; 
    }
    @media(max-width:400px){
        width:120%;
    }
`
export const Button = styled.button`
    width: 100%;
    padding:0.5rem 1.5rem;
    outline: none;
    background: #00A0DC;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    color: #FFFFFF;
    &:focus{
        box-shadow: 0 0 2px 2px #3392db6c;
    }
    @media(max-width:400px){
        width:120%;
    }
`

// Navbar
export const H1 = styled.h1`
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    color: #363636;
    cursor: pointer;
    z-index: 2;
    margin: 0 auto;
    @media(max-width:1777px){
        margin: 0 5%;
    }
    @media(max-width:1400px){
        margin: 0 5%;
    }
    @media(max-width:1090px){
        font-size:14px;
    }
`
export const P = styled.p`
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    display: flex;
    align-items: center;
    color: #363636;
    cursor: pointer;
    z-index:2;
    @media(max-width:1090px){
        font-size:10px;
    }
`
export const NavbarCard = styled.div`
    display: flex;
    @media(max-width:1777px){
        margin:0 1%;
    }
`
export const HumanImg = styled.img`
    margin-right: 10px;
`
export const DateAndOclock = styled.div`
    z-index:2;
    width: 100px;
    margin: 0 2%;
    @media(max-width:1777px){
        width:150px;
        margin: 0 1%;
    }
    @media(max-width:1300px){
        display:none;
    }
`
export const DateP = styled.p`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    text-align: end;
    color: #363636;
    @media(max-width:1090px){
        font-size:10px;
    }
`
export const OclockP = styled.p`
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    text-align: end;
    color: #363636;
    @media(max-width:1400px){
        font-size:16px;
    }
    @media(max-width:1090px){
        font-size:12px;
    }
`
export const Burger = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 30px;
    cursor: pointer;
    @media(max-width:1090px){
        height:20px;
    }
`
export const BtnBurger = styled.div`
    background: #363636;
    width: 40px;
    height: 4px;
    @media(max-width:1090px){
        width:30px;
        height:2px;
    }
`
// MainPage
export const FirstBox = styled.div`
    /* width:20%; */
    min-height: 91vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    @media(max-width:1900px){
        width:100%;
        margin-bottom:5px;
        margin-right: 5px;
    }
    @media(min-height:1090px){
        min-height:60vh;
    }
`
export const FirstBoxOut = styled.div`
    display:flex;
`
export const SecondBox = styled.div`
    /* width:55%; */
    min-height: 91vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin:0 5px;
    @media(max-width:1900px){
        width:100%;
        margin-bottom:5px;
    }
    @media(min-height:1090px){
        min-height:60vh;
    }
`
export const ThirdBox = styled.div`
    /* width:24%; */
    min-height: 91vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    @media(max-width:1900px){
        display:none;
        width:100%;
        margin-bottom:5px;
    }
    @media(min-height:1090px){
        min-height:60vh;
    }
`
export const ThirdBoxLittleSize = styled.div`
    display: none;
    @media(max-width:1900px){
        display: block;
        min-height: 91vh;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width:100%;
        margin-bottom:5px;
    }
    @media(min-height:1090px){
        min-height:60vh;
    }
`
// AddGas
export const Table = styled.table`
    width:100%;
    border: 0px solid #F4B790;
    overflow-y: scroll;
    display: block;
    &::-webkit-scrollbar{
    width: 0;
}
`
export const Tr = styled.tr`
    border: 1px solid #F4B790;
`
export const Th = styled.th`
    border: 1px solid #F4B790;
    background: #C3E7FA;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    text-align: center;
    color: #363636;
    padding: 2px;
`
export const TdFirst = styled.td`
    border: 1px solid #F4B790;
    background: #FFE5D3;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    text-align: center;
    color: #363636;
    padding: 2px;
`
export const Td = styled.td`
    background: #FAFAFA;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    color: #363636;
    box-shadow: 0 0 1.5px #aaa;
`
export const TdTotal = styled.td`
    border: 1px solid #F4B790;
    background: #FFE5D3;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 1000;
    font-size: 14px;
    text-align:center;
    color: #363636;
    padding: 2px;
    position: sticky;
    bottom: 0;
`
export const TdTotalCount = styled.td`
    background: #FFE5D3;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    color: #363636;
    padding: 2px;
    position: sticky;
    bottom: 0;
`

// GasBalance

// Map

export const MainPageImg = styled.img`
    width: 100%;
    height: 100%;
`
export const MapBox = styled.div`
    /* width:1030px;
    height:535px; */
    width: 100%;
    height: 100%;
    position: relative;
    background: #fff;
    transition: 2s ease;
    z-index: 2;
    margin:10px 2px 2px 2px;
    display:flex;
    justify-content: center;
    align-items: center;
    /* &:hover{
        transform: scale(1.3, 1.3);
        z-index:2;
        box-shadow: 0 4px 8px #999;
    } */
`

// Shurtan
export const ShurtanBoxOne = styled.div`
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @media(max-width:1900px){
        width:100%;
        margin-bottom:5px;
    }
`
export const ShurtanBoxTwo = styled.div`
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @media(max-width:1900px){
        width:100%;
        margin-bottom:5px;
    }
`
export const ShurtanBoxThree = styled.div`
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @media(max-width:1900px){
        width:100%;
        margin-bottom:5px;
    }
`

// BtnSearch
export const BtnDiv = styled.div`
    margin:5px 0;
    padding:0 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const BtnSerach = styled.button`
    background: #FFE5D3;
    border: 1px solid #FF914B;
    box-sizing: border-box;
    border-radius: 5px;
    cursor: pointer;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    padding: 3px 5%;
    text-align: center;
    color: #363636;
    &:first-child{
        margin: 0 200px;
    }
`
export const Select = styled.select`
    background: #FFE5D3;
    border: 1px solid #FF914B;
    box-sizing: border-box;
    border-radius: 5px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    padding: 2px 5%;
    text-align: center;
    color: #363636;
    outline: none;
`

// ShurtanMap
export const ShurtanMapContainer = styled.div`
    width:100%;
    min-height: 91vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const ShurtanMapImg = styled.img`
    width: 100%;
    height: 100%;
    background: #E5E5E5;
`
export const H1shurtan = styled.h1`
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    color: #363636;
`
export const Status = styled.div`
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding: 0 10px;
    @media(max-width:1900px){
        max-width:1080px;
    }
`
export const H4 = styled.h4`
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    display: flex;
    align-items: center;
    color: #000000;
`
export const Circle = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
`
export const CircleImg = styled.img`
    margin-right: 5px;
`
export const Pcircle = styled.p`
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    display: flex;
    align-items: center;
    color: #000000;
`
// Grafic
export const H2 = styled.h2`
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    color: #363636;
    padding: 5px;
`