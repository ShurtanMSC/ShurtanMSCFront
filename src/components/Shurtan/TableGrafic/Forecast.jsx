import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const  findMonth=(month)=>{
    if (!month) {
        throw new Error("Season is not defined")
    }
    switch (month) {
        case "JANUARY": return "Январь"
        case "FEBRUARY": return "Февраль"
        case "MARCH": return "Март"
        case "APRIL": return "Апрель"
        case "MAY": return "Май"
        case "JUNE": return "Июнь"
        case "JULY": return "Июль"
        case "AUGUST": return "Август"
        case "SEPTEMBER": return "Сентябрь"
        case "OCTOBER": return "Октябрь"
        case "NOVEMBER": return "Ноябрь"
        case "DECEMBER": return "Декабр"
        default:return ""
    }
}
const Forecast = ({ data }) => {

    const myData =[]
    if (data){
        for (let i = 0; i < data.length; i++) {
            myData.push({
                name:findMonth(data[i].month),
                'в прошлом году':data[i].amount,
                'этот год':data[i+1].amount,
                amt:2400
            })
            i++;
        }
    }


    return (
        <ResponsiveContainer width="100%" height="320px" aspect={2.8}>
              <BarChart
                  width={500}
                  height={300}
                  data={myData}
                  margin={{
                      top: 15,
                      right: 5,
                      left: -15,
                      bottom: 0,
                  }}
              >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" tick={{
                                              fontSize:'12px', 
                                              fontFamily:'Montserrat', 
                                              fontStyle:'normal', 
                                              fontWeight:'bold', 
                                              color:'#363636'}}/>
                  <YAxis tick={{
                              fontSize:'12px', 
                              fontFamily:'Montserrat', 
                              fontStyle:'normal', 
                              fontWeight:'bold', 
                              color:'#363636'}} />
                  <Tooltip wrapperStyle={{
                              fontSize:'12px', 
                              fontFamily:'Montserrat', 
                              fontStyle:'normal', 
                              fontWeight:'bold', 
                              color:'#363636'}}/>
                  <Bar dataKey="в прошлом году" fill="#FF914B" />
                  <Bar dataKey="этот год" fill="#00A0DC" />
              </BarChart>
          </ResponsiveContainer>
        );
  }

  export default Forecast
