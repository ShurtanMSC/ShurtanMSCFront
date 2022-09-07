import React, {useRef, useEffect, useCallback, useContext} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ModalDivShurtan, H2, H2Div, Table, Tr, Th, Td, SaveDiv, PModal, SpanModal, CloseBtnModal, InputModal, TdFirst, TdTotal, TdTotalCount } from '../../styled';
import { AppContext } from '../../context';

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
        y: "200px",
        opacity: 1,
        transition: { delay: 0.5 }
    }
}

const BalanceGasModal = ({showBalanceGasModal, setShowBalanceGasModal}) => {
    const {uppgDatabase, dateTime} = useContext(AppContext);
    const modalRef = useRef();
    
    const closeModal = e => {
        if( modalRef.current === e.target) {
            setShowBalanceGasModal(false);
        }
    };

    const keyPress = useCallback (e => {
        if(e.key === 'Escape' && showBalanceGasModal) {
            setShowBalanceGasModal(false);
        };
    }, [showBalanceGasModal, setShowBalanceGasModal]);

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return() => document.addEventListener( 'keydown', keyPress);
    }, [keyPress]);

    let dobicha = uppgDatabase&&uppgDatabase[0] ? uppgDatabase[0].nakoplenniy_obyom_za_vchera : '';
    let snipPriPodgotovki = dobicha*(0.619*0.5)/100;
    let dobichaGaza = snipPriPodgotovki + dobicha;
    let snipPriKomprimirovani = (dobichaGaza - snipPriPodgotovki)*( (9.457*0.5)/100 );
    let obyomGazaPostavlyaemiy = dobichaGaza - snipPriPodgotovki - snipPriKomprimirovani;
    let snipPriPrerabotke = obyomGazaPostavlyaemiy*( (9.457*0.53) + (0.619*0.5) )/100;
    let obyomTovarnogoGaza = obyomGazaPostavlyaemiy - snipPriPrerabotke;

    let dobicha2 = uppgDatabase&&uppgDatabase[1] ? uppgDatabase[1].nakoplenniy_obyom_za_vchera : '';
    let snipPriPodgotovki2 = dobicha2*(0.619*0.5)/100;
    let dobichaGaza2 = snipPriPodgotovki2 + dobicha2;
    let snipPriKomprimirovani2 = (dobichaGaza2 - snipPriPodgotovki2)*( (9.457*0.5)/100 );
    let obyomGazaPostavlyaemiy2 = dobichaGaza2 - snipPriPodgotovki2 - snipPriKomprimirovani2;
    let snipPriPrerabotke2 = obyomGazaPostavlyaemiy2*( (9.457*0.53) + (0.619*0.5) )/100;
    let obyomTovarnogoGaza2 = obyomGazaPostavlyaemiy2 - snipPriPrerabotke2;
    
    let itogDobicha = dobicha + dobicha2;
    let itogSnipPriPodgotovki = snipPriPodgotovki + snipPriPodgotovki2;
    let itogDobichaGaza = dobichaGaza + dobichaGaza2;
    let itogSnipPriKomprimirovani = snipPriKomprimirovani + snipPriKomprimirovani2;
    let itogObyomGazaPostavlyaemiy = obyomGazaPostavlyaemiy + obyomGazaPostavlyaemiy2;
    let itogSnipPriPrerabotke = snipPriPrerabotke + snipPriPrerabotke2;
    let itogObyomTovarnogoGaza = obyomTovarnogoGaza + obyomTovarnogoGaza2;

    return (
        <AnimatePresence>
            { showBalanceGasModal && (
                <motion.div className="backdrop"
                            variants={backdrop}
                            initial="hidden"
                            animate="visible"
                            ref={modalRef}
                            onClick={closeModal}
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
                                    <Th>Добыча газа, тыс.м<sup>3</sup>/сут</Th>
                                    <Th>СНиП при подготовке, тыс.м<sup>3</sup>/сут</Th>
                                    <Th>Объем газа на выходе УППГ, тыс.м<sup>3</sup>/сут</Th>
                                    <Th>СНиП при компримировании, тыс.м<sup>3</sup>/сут</Th>
                                    <Th>Объем газа поставляемый на ГС Шуртан, тыс.м<sup>3</sup>/сут</Th>
                                    <Th>СНиП при переработке, тыс.м<sup>3</sup>/сут</Th>
                                    <Th>Объем товарного газа, тыс.м<sup>3</sup>/сут</Th>
                                </Tr>
                                </thead>
                                <tbody>
                                    <Tr>
                                        <TdFirst>УППГ-1</TdFirst>
                                        <Td> <InputModal
                                            type="text"
                                            name="name"
                                            defaultValue={Math.round(dobichaGaza*100)/100}
                                            disabled />
                                        </Td>
                                        <Td> <InputModal
                                            type="text"
                                            name="name"
                                            defaultValue={Math.round(snipPriPodgotovki*100)/100}
                                            disabled />
                                        </Td>
                                        <Td> <InputModal
                                            type="text"
                                            name="name"
                                            defaultValue={Math.round(dobicha*100)/100}
                                            disabled />
                                        </Td>
                                        <Td> <InputModal
                                            type="text"
                                            name="name"
                                            defaultValue={Math.round(snipPriKomprimirovani*100)/100}
                                            disabled />
                                        </Td>
                                        <Td> <InputModal
                                            type="text"
                                            name="name"
                                            defaultValue={Math.round(obyomGazaPostavlyaemiy*100)/100}
                                            disabled />
                                        </Td>
                                        <Td> <InputModal
                                            type="text"
                                            name="name"
                                            defaultValue={Math.round(snipPriPrerabotke*100)/100}
                                            disabled />
                                        </Td>
                                        <Td> <InputModal
                                            type="text"
                                            name="name"
                                            defaultValue={Math.round(obyomTovarnogoGaza*100)/100}
                                            disabled />
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <TdFirst>УППГ-2</TdFirst>
                                        <Td> <InputModal
                                            type="text"
                                            name="name"
                                            defaultValue={Math.round(dobichaGaza2*100)/100}
                                            disabled />
                                        </Td>
                                        <Td> <InputModal
                                            type="text"
                                            name="name"
                                            defaultValue={Math.round(snipPriPodgotovki2*100)/100}
                                            disabled />
                                        </Td>
                                        <Td> <InputModal
                                            type="text"
                                            name="name"
                                            defaultValue={Math.round(dobicha2*100)/100}
                                            disabled />
                                        </Td>
                                        <Td> <InputModal
                                            type="text"
                                            name="name"
                                            defaultValue={Math.round(snipPriKomprimirovani2*100)/100}
                                            disabled />
                                        </Td>
                                        <Td> <InputModal
                                            type="text"
                                            name="name"
                                            defaultValue={Math.round(obyomGazaPostavlyaemiy2*100)/100}
                                            disabled />
                                        </Td>
                                        <Td> <InputModal
                                            type="text"
                                            name="name"
                                            defaultValue={Math.round(snipPriPrerabotke2*100)/100}
                                            disabled />
                                        </Td>
                                        <Td> <InputModal
                                            type="text"
                                            name="name"
                                            defaultValue={Math.round(obyomTovarnogoGaza2*100)/100}
                                            disabled />
                                        </Td>
                                    </Tr>
                                </tbody>
                                <tfoot>
                                    <Tr>
                                        <TdTotal>Итого</TdTotal>
                                        <TdTotalCount>{itogDobichaGaza}</TdTotalCount>
                                        <TdTotalCount>{itogSnipPriPodgotovki}</TdTotalCount>
                                        <TdTotalCount>{itogDobicha}</TdTotalCount>
                                        <TdTotalCount>{itogSnipPriKomprimirovani}</TdTotalCount>
                                        <TdTotalCount>{itogObyomGazaPostavlyaemiy}</TdTotalCount>
                                        <TdTotalCount>{itogSnipPriPrerabotke}</TdTotalCount>
                                        <TdTotalCount>{itogObyomTovarnogoGaza}</TdTotalCount>
                                    </Tr>
                                </tfoot>
                            </Table>
                            <SaveDiv style={{marginTop:'5%'}}>
                                <div>
                                    <PModal>Дата изменения:
                                        <SpanModal>{dateTime}</SpanModal>
                                        <SpanModal>  </SpanModal>
                                    </PModal>
                                </div>
                                <div>
                                    {/*<SaveBtnModal>Сохранит</SaveBtnModal>*/}
                                    <CloseBtnModal
                                        onClick={()=> setShowBalanceGasModal(prev => !prev)}>Закрыт
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

export default BalanceGasModal