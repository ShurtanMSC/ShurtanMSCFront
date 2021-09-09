import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Forecast = ({firstLastYear, firstThisYear, secondLastYear,
                      secondThisYear, thirdLastYear, thirdThisYear,
                      fourthLastYear, fourthThisYear, fifthLastYear,
                      fifthThisYear, sixthLastYear, sixthThisYear,
                      seventhLastYear, seventhThisYear, eighthLastYear,
                      eighthThisYear, ninthLastYear, ninthThisYear,
                      tenthLastYear, tenthThisYear, eleventhLastYear,
                      eleventhThisYear, twelfthLastYear, twelfthThisYear }) => {



    const data = [
        {
            name: 'Январь',
            'в прошлом году': firstLastYear,
            'этот год': firstThisYear,
            amt: 2400,
        },
        {
            name: 'Февраль',
            'в прошлом году': secondLastYear,
            'этот год': secondThisYear,
            amt: 2210,
        },
        {
            name: 'Март',
            'в прошлом году': thirdLastYear,
            'этот год': thirdThisYear,
            amt: 2290,
        },
        {
            name: 'Апрель',
            'в прошлом году': fourthLastYear,
            'этот год': fourthThisYear,
            amt: 2000,
        },
        {
            name: 'Май',
            'в прошлом году': fifthLastYear,
            'этот год': fifthThisYear,
            amt: 2181,
        },
        {
            name: 'Июнь',
            'в прошлом году': sixthLastYear,
            'этот год': sixthThisYear,
            amt: 2500,
        },
        {
            name: 'Июль',
            'в прошлом году': seventhLastYear,
            'этот год': seventhThisYear,
            amt: 2100,
        },
        {
            name: 'Август',
            'в прошлом году': eighthLastYear,
            'этот год': eighthThisYear,
            amt: 2100,
        },
        {
            name: 'Сентябрь',
            'в прошлом году': ninthLastYear,
            'этот год': ninthThisYear,
            amt: 2100,
        },
        {
            name: 'Октябрь',
            'в прошлом году': tenthLastYear,
            'этот год': tenthThisYear,
            amt: 2100,
        },
        {
            name: 'Ноябрь',
            'в прошлом году': eleventhLastYear,
            'этот год': eleventhThisYear,
            amt: 2100,
        },
        {
            name: 'Декабр',
            'в прошлом году': twelfthLastYear,
            'этот год': twelfthThisYear,
            amt: 2100,
        },
    ];

      return (
        <ResponsiveContainer width="100%" height="320px" aspect={2.8}>
              <BarChart
                  width={500}
                  height={300}
                  data={data}
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
