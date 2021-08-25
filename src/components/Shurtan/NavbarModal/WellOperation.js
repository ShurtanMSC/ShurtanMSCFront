import React, { useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AddGasNavbarModalDiv, NavbarModalP, LabelNavTitle,
    DataP, ButtonNavbarCancel, ButtonNavbarSave, ButtonDiv,
    ParametersP, ParametersDiv, ParametersCard, ParametersInput, SelectNavTitle, LabelNav, SelectNav } from '../../../styled'
import styled from 'styled-components'

const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
}

const modal = {
    hidden: {
        y: "-100vh",
        opacity: 0
    },
    visible: {
        y: "200px",
        opacity: 1,
        transition: { delay: 0.5 }
    }
}

const WellOperation = ({showWellOperation, setShowWellOperation}) => {
    const modalRef = useRef();

    const closeModal = e => {
        if( modalRef.current === e.target ) {
            setShowWellOperation(false);
        }
    };

    const keyPress = useCallback (e => {
        if(e.key === 'Escape' && showWellOperation){
            setShowWellOperation(false)
        }
    }, [setShowWellOperation, showWellOperation]);

    useEffect(()=>{
        document.addEventListener('keydown', keyPress);
        return() => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);

    return (
        <AnimatePresence>
            { showWellOperation && (
                <motion.div className="backdrop"
                            variants={backdrop}
                            initial="hidden"
                            animate="visible"
                            ref={modalRef}
                            onClick={closeModal}
                >
                    <motion.div className="modalWellOparation"
                                variants={modal}
                    >
                        <AddGasNavbarModalDiv>
                            <form>
                                <ParametersDiv>
                                    <ParametersCard>
                                    <LabelNavTitle for="well">Выберите скважину :</LabelNavTitle>
                                    <SelectNavTitle name="well" id="well">
                                        <option value="">--Выберите--</option>
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
                                    </SelectNavTitle>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <LabelNav for="uppg">УППГ</LabelNav>
                                        <SelectNav name="uppg" id="uppg">
                                            <option value="">--Выберите--</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                        </SelectNav>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <LabelNav for="sp">СП</LabelNav>
                                        <SelectNav name="sp" id="sp">
                                            <option value="">--Выберите--</option>
                                            <option value="sp-1">СП-1</option>
                                            <option value="sp-2">СП-2</option>
                                            <option value="sp-3">СП-3</option>
                                            <option value="sp-4">СП-4</option>
                                            <option value="bt-5">БТ-5</option>
                                            <option value="sp-6">СП-6</option>
                                            <option value="sp-9">СП-9</option>
                                            <option value="sp-10">СП-10</option>
                                            <option value="sp-12">СП-12</option>
                                            <option value="sp-14">СП-14</option>
                                            <option value="sp-15">СП-15</option>
                                            <option value="bt-16">БТ-16</option>
                                            <option value="bt-17">БТ-17</option>
                                            <option value="bt-19">БТ-19</option>
                                            <option value="sp-20">СП-20</option>
                                            <option value="bt-21">БТ-21</option>
                                            <option value="sp-22">СП-22</option>
                                            <option value="sp-24">СП-24</option>
                                            <option value="sp-26">СП-26</option>
                                            <option value="bt-30">БТ-30</option>
                                            <option value="sp-34">БТ-34</option>
                                        </SelectNav>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <ParametersPChange>Горизонт</ParametersPChange>
                                        <ParametersInputChange type="text" name="text"/>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <ParametersPChange>Дата ввода в эксплуатацию</ParametersPChange>
                                        <ParametersInputChange type="date" name="date"/>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <ParametersPChange>Дата начала бурения</ParametersPChange>
                                        <ParametersInputChange type="date" name="date"/>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <LabelNav for="category">Категория</LabelNav>
                                        <SelectNav name="category" id="category">
                                            <option value="">--Выберите--</option>
                                            <option value="mining">Добывающая</option>
                                            <option value="discharge">Нагнетательная</option>
                                            <option value="exploration">Разведочная</option>
                                            <option value="piezometric">Пьезометрическая</option>
                                        </SelectNav>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <LabelNav for="state">Состояние</LabelNav>
                                        <SelectNav name="state" id="state">
                                            <option value="">--Выберите--</option>
                                            <option value="working">в работе</option>
                                            <option value="idling">в простое</option>
                                            <option value="repairing">в ремонте</option>
                                            <option value="conservation">в консервации</option>
                                            <option value="liquidation">в ликвидации</option>
                                        </SelectNav>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <ParametersPChange>Изменение состояния</ParametersPChange>
                                        <ParametersInputChange type="date" name="date"/>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <ParametersPChange>Интервал перфарации</ParametersPChange>
                                        <ParametersInputChange type="number" name="number"/>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <ParametersPChange>Устьевое давление Ру, кгс/см²</ParametersPChange>
                                        <ParametersInputChange type="number" name="number"/>
                                    </ParametersCard>
                                    <ParametersCard>
                                        <ParametersPChange>Температура на устье, °С</ParametersPChange>
                                        <ParametersInputChange type="number" name="number"/>
                                    </ParametersCard>
                                </ParametersDiv>
                                <div>
                                    <NavbarModalP>Дата ввода данных</NavbarModalP>
                                    <DataP>2021-06-17 14:49:22</DataP>
                                </div>
                                <ButtonDiv>
                                    <ButtonNavbarCancel onClick={() => setShowWellOperation(prev => !prev)}>Назад</ButtonNavbarCancel>
                                    <ButtonNavbarSave>Сохранить</ButtonNavbarSave>
                                </ButtonDiv>
                            </form>
                        </AddGasNavbarModalDiv>
                    </motion.div>
                </motion.div>
            ) }
        </AnimatePresence>
    )
}
const ParametersPChange = styled(ParametersP)`
  text-align: center;
  width: 220px;
`
const ParametersInputChange = styled(ParametersInput)`
  width:170px;
`

export default WellOperation
