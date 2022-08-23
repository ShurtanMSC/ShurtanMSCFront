import React, {useRef, useEffect, useCallback, useContext} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ModalDivShurtan, H2, H2Div, Table, Tr, Th, Td, SaveDiv, PModal, SpanModal, CloseBtnModal, InputModal, TdFirst, CurrentMonthDiv } from '../styled';
import { AppContext } from '../context';
import styled from 'styled-components';

const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
}

const modalSP = {
    hidden: {
        y: "-100vh",
        opacity: 0
    },
    visible: {
        y: "100px",
        opacity: 1,
        transition: { delay: 0.5 }
    }
}

const BalanceModal = ({showBalance, setShowBalance}) => {
    const modalRef = useRef();
    const {nameAllMining, uppgDatabase, dateTime} = useContext(AppContext);
    
    const closeModal = e => {
        if( modalRef.current === e.target) {
            setShowBalance(false);
        }
    };

    const keyPress = useCallback (e => {
        if(e.key === 'Escape' && showBalance) {
            setShowBalance(false);
        };
    }, [showBalance, setShowBalance]);

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return() => document.addEventListener( 'keydown', keyPress);
    }, [keyPress]);

    let B3 = 0;
    for ( let i = 0; i < uppgDatabase.length; i++ ) {
        if( uppgDatabase ) {
            B3 = uppgDatabase[i].nakoplenniy_obyom_s_nachalo_sutok++;
        } 
    }
    let C3 = ( B3*(0.619*0.5)/100 );
    let D3 = ( (B3 - C3) * ((9.457*0.5)/100) );
    let E3 = ( B3 - C3 - D3 );
    let F3 = ( E3*((9.457*0.53) + (0.619*0.5))/100 );
    let G3 = ( E3 - F3 );

    return (
        <AnimatePresence>
            { showBalance && (
                <motion.div className="backdrop"
                            variants={backdrop}
                            initial="hidden"
                            animate="visible"
                            // ref={modalRef}
                            // onClick={closeModal}
                >
                    <motion.div className="modalSP"
                                variants={modalSP}
                    >
                        <ModalDivShurtan>
                            <H2Div>
                                <H2>Баланс газа</H2>
                            </H2Div>
                            <Table>
                                <thead>
                                <Tr>
                                    <Th style={{padding:'1rem'}}>Наименование</Th>
                                    <Th style={{padding:'1rem'}}>Добыча газа, тыс.м<sup>3</sup>/сут</Th>
                                    <Th>СНиП при подготовке, тыс.м<sup>3</sup>/сут</Th>
                                    <Th>СНиП при компримировании, тыс.м<sup>3</sup>/сут</Th>
                                    <Th>Объем газа поставляемый на ГС Шуртан, тыс.м<sup>3</sup>/сут</Th>
                                    <Th>СНиП при переработке, тыс.м<sup>3</sup>/сут</Th>
                                    <Th>Объем товарного газа, тыс.м<sup>3</sup>/сут</Th>
                                </Tr>
                                </thead>
                                <tbody>
                                    {nameAllMining && nameAllMining.map((nameOfMining, index) =>
                                    <Tr key={index}>
                                        <TdFirst>{nameOfMining.name}</TdFirst>
                                        <Td> <InputModal
                                            type="text"
                                            name="name"
                                            defaultValue={nameOfMining.name === 'Шуртан' ? Math.round(B3*100)/100 : ''}
                                            disabled />
                                        </Td>
                                        <Td> <InputModal
                                            type="text"
                                            name="name"
                                            defaultValue={nameOfMining.name === 'Шуртан' ? Math.round(C3*100)/100 : ''}
                                            disabled />
                                        </Td>
                                        <Td> <InputModal
                                            type="text"
                                            name="name"
                                            defaultValue={nameOfMining.name === 'Шуртан' ? Math.round(D3*100)/100 : ''}
                                            disabled />
                                        </Td>
                                        <Td> <InputModal
                                            type="text"
                                            name="name"
                                            defaultValue={nameOfMining.name === 'Шуртан' ? Math.round(E3*100)/100 : ''}
                                            disabled />
                                        </Td>
                                        <Td> <InputModal
                                            type="text"
                                            name="name"
                                            defaultValue={nameOfMining.name === 'Шуртан' ? Math.round(F3*100)/100 : ''}
                                            disabled />
                                        </Td>
                                        <Td> <InputModal
                                            type="text"
                                            name="name"
                                            defaultValue={nameOfMining.name === 'Шуртан' ? Math.round(G3*100)/100 : ''}
                                            disabled />
                                        </Td>
                                    </Tr>
                                    )}
                                </tbody>
                            </Table>
                            <SaveDiv>
                                <div>
                                    <PModal>Дата изменения:
                                        <SpanModal>{dateTime}</SpanModal>
                                        <SpanModal>  </SpanModal>
                                    </PModal>
                                </div>
                                <div>
                                    {/*<SaveBtnModal>Сохранит</SaveBtnModal>*/}
                                    <CloseBtnModal
                                        onClick={()=> setShowBalance(prev => !prev)}>Закрыт
                                    </CloseBtnModal>
                                </div>
                            </SaveDiv>
                        </ModalDivShurtan>
                    </motion.div>
                </motion.div>
            ) }
        </AnimatePresence>
    )
}

const TdFirstChange = styled(TdFirst)`
  text-align:start;
  padding-left: 5px;
  width: 270px;
`

export default BalanceModal