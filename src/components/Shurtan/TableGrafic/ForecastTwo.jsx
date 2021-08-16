import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
 
const data = [
  {
    name: 'Январь',
    '2020г': 14.8,
    '2021г': 15.7,
    amt: 2400,
  },
  {
    name: 'Февраль',
    '2020г': 14.8,
    '2021г': 15.7,
    amt: 2210,
  },
  {
    name: 'Март',
    '2020г': 14.8,
    '2021г': 15.7,
    amt: 2290,
  },
  {
    name: 'Апрель',
    '2020г': 14.8,
    '2021г': 15.7,
    amt: 2000,
  },
  {
    name: 'Май',
    '2020г': 14.8,
    '2021г': 15.7,
    amt: 2181,
  },
  {
    name: 'Июнь',
    '2020г': 14.8,
    '2021г': 15.7,
    amt: 2500,
  },
  {
    name: 'Июль',
    '2020г': 14.8,
    '2021г': 15.7,
    amt: 2100,
  },
  {
    name: 'Август',
    '2020г': 14.8,
    '2021г': 15.7,
    amt: 2100,
  },
  {
    name: 'Сентябрь',
    '2020г': 14.8,
    '2021г': 15.7,
    amt: 2100,
  },
  {
    name: 'Октябрь',
    '2020г': 14.8,
    '2021г': 15.7,
    amt: 2100,
  },
  {
    name: 'Ноябрь',
    '2020г': 14.8,
    '2021г': 15.7,
    amt: 2100,
  },
  {
    name: 'Декабр',
    '2020г': 14.8,
    '2021г': 15.7,
    amt: 2100,
  },
];

const ForecastTwo = () => {
      return (
        <ResponsiveContainer width="210%" height="280px" aspect={2.8}>
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
                  <Bar dataKey="2020г" fill="#FF914B" />
                  <Bar dataKey="2021г" fill="#00A0DC" />
              </BarChart>
          </ResponsiveContainer>
        );
  }

  export default ForecastTwo
