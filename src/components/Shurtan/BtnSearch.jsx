import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faSearch } from '@fortawesome/free-solid-svg-icons'
import { BtnDiv, BtnSerach, Select, Table, Tr, Th, TdFirst, Td, LabelNavTitle } from '../../styled'
import styled from 'styled-components'
import BtnSearchModal from "./BtnSearchModal";
import BdUppgModal from './BdUppgModal'

const BtnSearch = () => {
    const [ showBtnSearch, setShowBtnSearch] = useState(false);
    const [ showBdUppgModal, setShowBdUppgModal] = useState(false);
    const [ openUppg, setOpenUppg ] = useState(false);

    const openBtnSearchModal = () => {
        setShowBtnSearch(prev => !prev);
    }
    const openBdUppgModal = () => {
        setShowBdUppgModal(prev => !prev)
    }

    return (
        <SearchDiv>
            <BtnDiv>
                <Select name="text" id="text">
                    <option value="text">УППГ-1</option>
                    <option value="text">УППГ-2</option>    
                </Select>
                <BtnSerach onClick={()=> setOpenUppg(!openUppg)}>
                    <FontAwesomeIcon icon={faSearch} /> Поиск скважины
                </BtnSerach>
                <BdUppgModal showBdUppgModal={showBdUppgModal}
                                setShowBdUppgModal={setShowBdUppgModal}/>
                <BtnSerach onClick={openBdUppgModal}> БД УППГ </BtnSerach>
            </BtnDiv>
            <SearcherSK openUppg={openUppg}>
                <Form>
                    <LabelChange htmlFor="searcher">Введите номер скважины:</LabelChange>
                    <SelectChange  htmlFor='searcher' id="searcher">
                        <option value=""> --Поиск скважины-- </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="7">7</option>
                        <option value="10">10</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="21">21</option>
                        <option value="23">23</option>
                        <option value="33">33</option>
                        <option value="37">37</option>
                        <option value="51">51</option>
                        <option value="52">52</option>
                        <option value="53">53</option>
                        <option value="55">55</option>
                        <option value="56">56</option>
                        <option value="57">57</option>
                        <option value="61">61</option>
                        <option value="67">67</option>
                        <option value="71">71</option>
                        <option value="72">72</option>
                        <option value="79">79</option>
                        <option value="83">83</option>
                        <option value="86">86</option>
                        <option value="92">92</option>
                        <option value="96">96</option>
                        <option value="101">101</option>
                        <option value="102">102</option>
                        <option value="103">103</option>
                        <option value="108">108</option>
                        <option value="110">110</option>
                        <option value="111">111</option>
                        <option value="115">115</option>
                        <option value="118">118</option>
                        <option value="119">119</option>
                        <option value="120">120</option>
                        <option value="122">122</option>
                        <option value="123">123</option>
                        <option value="125">125</option>
                        <option value="127">127</option>
                        <option value="128">128</option>
                        <option value="129">129</option>
                        <option value="130">130</option>
                        <option value="131">131</option>
                        <option value="132">132</option>
                        <option value="136">136</option>
                        <option value="137">137</option>
                        <option value="139">139</option>
                        <option value="140">140</option>
                        <option value="141">141</option>
                        <option value="144">144</option>
                        <option value="145">145</option>
                        <option value="151">151</option>
                        <option value="153">153</option>
                        <option value="154">154</option>
                        <option value="155">155</option>
                        <option value="157">157</option>
                        <option value="158">158</option>
                        <option value="159">160</option>
                        <option value="161">161</option>
                        <option value="163">163</option>
                        <option value="164">164</option>
                        <option value="165">165</option>
                        <option value="167">167</option>
                        <option value="169">169</option>
                        <option value="170">170</option>
                        <option value="171">171</option>
                        <option value="172">172</option>
                        <option value="173">173</option>
                        <option value="174">174</option>
                        <option value="175">175</option>
                        <option value="178">178</option>
                        <option value="179">179</option>
                        <option value="182">182</option>
                        <option value="183">183</option>
                        <option value="184">184</option>
                        <option value="185">185</option>
                        <option value="190">190</option>
                        <option value="192">192</option>
                        <option value="193">193</option>
                        <option value="194">194</option>
                        <option value="195">195</option>
                        <option value="196">196</option>
                        <option value="197">197</option>
                        <option value="198">198</option>
                        <option value="199">199</option>
                        <option value="200">200</option>
                        <option value="201">201</option>
                        <option value="202">202</option>
                        <option value="203">203</option>
                        <option value="207">207</option>
                        <option value="208">208</option>
                        <option value="210">210</option>
                        <option value="211">211</option>
                        <option value="218">218</option>
                        <option value="219">219</option>
                        <option value="225">225</option>
                        <option value="233">233</option>
                        <option value="236">236</option>
                        <option value="240">240</option>
                        <option value="244">244</option>
                        <option value="251">251</option>
                        <option value="252">252</option>
                        <option value="253">253</option>
                        <option value="254">254</option>
                        <option value="256">256</option>
                        <option value="257">257</option>
                        <option value="258">258</option>
                        <option value="259">259</option>
                        <option value="260">260</option>
                        <option value="261">261</option>
                        <option value="264">264</option>
                        <option value="266">266</option>
                        <option value="267">267</option>
                        <option value="268">268</option>
                        <option value="275">275</option>
                        <option value="278">278</option>
                        <option value="280">280</option>
                        <option value="282">282</option>
                        <option value="283">283</option>
                        <option value="284">284</option>
                        <option value="285">285</option>
                        <option value="286">286</option>
                        <option value="287">287</option>
                        <option value="288">288</option>
                        <option value="289">289</option>
                        <option value="290">290</option>
                        <option value="292">292</option>
                        <option value="293">293</option>
                        <option value="296">296</option>
                        <option value="300">300</option>
                        <option value="301">301</option>
                        <option value="303">303</option>
                        <option value="304">304</option>
                        <option value="305">305</option>
                        <option value="306">306</option>
                        <option value="307">307</option>
                        <option value="308">308</option>
                        <option value="309">309</option>
                        <option value="310">310</option>
                        <option value="311">311</option>
                        <option value="312">312</option>
                        <option value="313">313</option>
                        <option value="314">314</option>
                        <option value="315">315</option>
                        <option value="316">316</option>
                        <option value="317">317</option>
                        <option value="318">318</option>
                        <option value="319">319</option>
                        <option value="320">320</option>
                        <option value="321">321</option>
                        <option value="323">323</option>
                    </SelectChange>
                </Form>
                <Table>
                    <tbody>
                        <Tr>
                            <TdFirstChange>Скважина</TdFirstChange>
                            <TdChange>4</TdChange>
                        </Tr>
                        <Tr>
                            <TdFirstChange>Сборный пункт</TdFirstChange>
                            <TdChange>СП-2</TdChange>
                        </Tr>
                        <Tr>
                            <TdFirstChange>Дата ввода в эксплуатацию</TdFirstChange>
                            <TdChange>1980-11-03</TdChange>
                        </Tr>
                        <Tr>
                            <TdFirstChange>Горизонт</TdFirstChange>
                            <TdChange>XV-НР</TdChange>
                        </Tr>
                        <Tr>
                            <TdFirstChange>Интервал перфарации</TdFirstChange>
                            <TdChange>2796-2839</TdChange>
                        </Tr>
                        <Tr>
                            <TdFirstChange>Состояние скважины</TdFirstChange>
                            <TdChange>В простое</TdChange>
                        </Tr>
                        <Tr>
                            <TdFirstChange>Дата изменения состояния</TdFirstChange>
                            <TdChange>2021-06-18</TdChange>
                        </Tr>
                        <Tr>
                            <TdFirstChange>Давление Pу, кгс/см²</TdFirstChange>
                            <TdChange>0.00</TdChange>
                        </Tr>
                        <Tr>
                            <TdFirstChange>Температура T, °C</TdFirstChange>
                            <TdChange>50.00</TdChange>
                        </Tr>
                    </tbody>
                </Table>
                <Table>
                    <thead>
                    <Tr>
                        <Th>Добыча</Th>
                        <Th>Часовая</Th>
                        <Th>За тек. сутки</Th>
                        <Th>За тек. месяц</Th>
                        <Th>С нач. года</Th>
                    </Tr>
                    </thead>
                    <tbody>
                    <Tr>
                        <TdFirst>Расход, тыс.м³/час</TdFirst>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                        <Td>0</Td>
                    </Tr>
                    </tbody>
                </Table>
            </SearcherSK>
            <BtnSearchModal showBtnSearch={showBtnSearch}
                            setShowBtnSearch={setShowBtnSearch}/>
            <Table>
                <thead>
                <Tr>
                    <Th style={{position:'relative'}}>
                        <FontAwesomeIcon style={{position:'absolute',
                                                top:'10px',
                                                left:'10px',
                                                cursor:'pointer'}}
                                                icon={faEdit}
                                                onClick={openBtnSearchModal}/> Наименование</Th>
                    <Th>2-х часовая</Th>
                    <Th>За тек. сутки</Th>
                    <Th>За тек. месяц</Th>
                    <Th>С нач. года</Th>
                </Tr>
                </thead>
                <tbody>
                <Tr>
                    <TdFirst>Проектная производительность <br/> м3/год</TdFirst>
                    <Td>15</Td>
                    <Td>20</Td>
                    <Td>40</Td>
                    <Td>12</Td>
                </Tr>
                <Tr>
                    <TdFirst>Фактическая производителность <br/> м3/год</TdFirst>
                    <Td>15</Td>
                    <Td>20</Td>
                    <Td>40</Td>
                    <Td>12</Td>
                </Tr>
                <Tr>
                    <TdFirst>По газу, тыс м3</TdFirst>
                    <Td>15</Td>
                    <Td>20</Td>
                    <Td>40</Td>
                    <Td>12</Td>
                </Tr>
                <Tr>
                    <TdFirst>По конденсату, тыс.т</TdFirst>
                    <Td>15</Td>
                    <Td>20</Td>
                    <Td>40</Td>
                    <Td>12</Td>
                </Tr>
                <Tr>
                    <TdFirst>По воде, тыс. т</TdFirst>
                    <Td colSpan="4">15</Td>
                </Tr>
                <Tr>
                    <TdFirst>Входное  давление, кгс\см2</TdFirst>
                    <Td colSpan="4">15</Td>
                </Tr>
                <Tr>
                    <TdFirst>Выходное  давление, кгс\см2</TdFirst>
                    <Td colSpan="4">15</Td>
                </Tr>
                <Tr>
                    <TdFirst>Входная температура, *С</TdFirst>
                    <Td colSpan="4">15</Td>
                </Tr>
                <Tr>
                    <TdFirst>Выходная температура, *С</TdFirst>
                    <Td colSpan="4">15</Td>
                </Tr>
                </tbody>
            </Table>
        </SearchDiv>
        
    )
}
const SearchDiv = styled.div`
  width: 400px;
  position: relative;
`
const SearcherSK = styled.div`
  width:100%;
  height:${({openUppg}) => (openUppg ? "100%" : "0")};
  position:absolute;
  top:35px;
  z-index: 2;
  background: #fff;
  overflow: hidden;
  transition: height 0.5s ease-in;
`
const TdFirstChange = styled(TdFirst)`
  width: 40%;    
`
const TdChange = styled(Td)`
  width: 50%;
`
const Form = styled.form`
  width:100%;
  height:50px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const LabelChange = styled(LabelNavTitle)`
  font-size:15px;
`
const SelectChange = styled(Select)`
  padding:2px 5px;
  margin-left: 5px;
  background: #fff;
`
export default BtnSearch
