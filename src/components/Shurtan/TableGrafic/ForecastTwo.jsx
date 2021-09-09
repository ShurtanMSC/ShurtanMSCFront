import React, {useEffect, useState} from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import axios from "axios";

const ForecastTwo = () => {
    const [ firstLastYear, setFirstLastYear ] = useState([]);
    const [ firstThisYear, setFirstThisYear ] = useState([]);
    const [ secondLastYear, setSecondLastYear ] = useState([]);
    const [ secondThisYear, setSecondThisYear ] = useState([]);
    const [ thirdLastYear, setThirdLastYear ] = useState([]);
    const [ thirdThisYear, setThirdThisYear ] = useState([]);
    const [ fourthLastYear, setFourthLastYear ] = useState([]);
    const [ fourthThisYear, setFourthThisYear ] = useState([]);
    const [ fifthLastYear, setFifthLastYear ] = useState([]);
    const [ fifthThisYear, setFifthThisYear ] = useState([]);
    const [ sixthLastYear, setSixthLastYear ] = useState([]);
    const [ sixthThisYear, setSixthThisYear ] = useState([]);
    const [ seventhLastYear, setSeventhLastYear ] = useState([]);
    const [ seventhThisYear, setSeventhThisYear ] = useState([]);
    const [ eighthLastYear, setEighthLastYear ] = useState([]);
    const [ eighthThisYear, setEighthThisYear ] = useState([]);
    const [ ninthLastYear, setNinthLastYear ] = useState([]);
    const [ ninthThisYear, setNinthThisYear ] = useState([]);
    const [ tenthLastYear, setTenthLastYear ] = useState([]);
    const [ tenthThisYear, setTenthThisYear ] = useState([]);
    const [ eleventhLastYear, setEleventhLastYear ] = useState([]);
    const [ eleventhThisYear, setEleventhThisYear ] = useState([]);
    const [ twelfthLastYear, setTwelfthLastYear ] = useState([]);
    const [ twelfthThisYear, setTwelfthThisYear ] = useState([]);

    useEffect(()=> {
        axios.get('https://shurtan.herokuapp.com/api/forecast/condensate/all/mining_system/' + 1 + '/' + ((new Date().getFullYear()) - 1) + '/' + new Date().getFullYear())
            .then(res => {
                console.log(res.data.object);
                if (res.data.object.length!==0){
                    setFirstLastYear(res.data.object[0].amount);
                    setFirstThisYear(res.data.object[12].amount);
                    setSecondLastYear(res.data.object[1].amount);
                    setSecondThisYear(res.data.object[13].amount);
                    setThirdLastYear(res.data.object[2].amount);
                    setThirdThisYear(res.data.object[14].amount);
                    setFourthLastYear(res.data.object[3].amount);
                    setFourthThisYear(res.data.object[15].amount);
                    setFifthLastYear(res.data.object[4].amount);
                    setFifthThisYear(res.data.object[16].amount);
                    setSixthLastYear(res.data.object[5].amount);
                    setSixthThisYear(res.data.object[17].amount);
                    setSeventhLastYear(res.data.object[6].amount);
                    setSeventhThisYear(res.data.object[18].amount);
                    setEighthLastYear(res.data.object[7].amount);
                    setEighthThisYear(res.data.object[19].amount);
                    setNinthLastYear(res.data.object[8].amount);
                    setNinthThisYear(res.data.object[20].amount);
                    setTenthLastYear(res.data.object[9].amount);
                    setTenthThisYear(res.data.object[21].amount);
                    setEleventhLastYear(res.data.object[10].amount);
                    setEleventhThisYear(res.data.object[22].amount);
                    setTwelfthLastYear(res.data.object[11].amount);
                    setTwelfthThisYear(res.data.object[23].amount);
                }

            });
    }, [])

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
        <ResponsiveContainer width="100%" height="280px" aspect={2.8}>
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

  export default ForecastTwo
