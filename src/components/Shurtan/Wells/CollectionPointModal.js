import React, {useRef, useEffect, useCallback, useContext} from 'react';
import {AppContext} from '../../../context';
import { motion, AnimatePresence } from 'framer-motion';
import { TableModalShurtan, TdModalShurtanFirst, ModalDivShurtan, TdModalShurtan, TdModalShurtanData, ButtonModalShurtan } from '../../../styled';
import styled from 'styled-components';

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

const CollectionPointModal = ({showCollectionPointModal, setShowCollectionPointModal, idPoint, filtered}) => {
    const {refresh, dateTime} = useContext(AppContext);

    const modalRef = useRef();

    const closeModal = e => {
        if( modalRef.current === e.target ) {
            setShowCollectionPointModal(false);
        }
    };

    const keyPress = useCallback (e => {
        if(e.key === 'Escape' && showCollectionPointModal){
            setShowCollectionPointModal(false)
        }
    }, [setShowCollectionPointModal, showCollectionPointModal]);

    useEffect(()=>{
        document.addEventListener('keydown', keyPress);
        return() => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);

    return (
        <AnimatePresence>
            { showCollectionPointModal && (
                <motion.div className="backdrop"
                            variants={backdrop}
                            initial="hidden"
                            animate="visible"
                            ref={modalRef}
                            onClick={closeModal}
                >
                    <motion.div className="modal"
                                variants={modal}
                    >
                        <ModalDivShurtan>
                            <TableModalShurtan>
                                {filtered.map(el =>
                                    <tbody key={el}>
                                    <tr>
                                        <TdModalShurtanFirst>БВН:</TdModalShurtanFirst>
                                        <TdModalShurtan>{idPoint}</TdModalShurtan>
                                    </tr>
                                    <tr>
                                        <TdModalShurtanFirst>Рсп, кгс/см²:</TdModalShurtanFirst>
                                        <TdModalShurtan>{el.objectActionDto !== null ? Math.round(el.objectActionDto.pressure*10)/10 : ""}</TdModalShurtan>
                                    </tr>
                                    <tr>
                                        <TdModalShurtanFirst>Расход, тыс м³/ч:</TdModalShurtanFirst>
                                        <TdModalShurtan>{el.objectActionDto !== null ? Math.round((el.objectActionDto.expend/1000)*10)/10 : ""}</TdModalShurtan>
                                    </tr>
                                    <tr>
                                        <TdModalShurtanFirst>Темрература, °C:</TdModalShurtanFirst>
                                        <TdModalShurtan>{el.objectActionDto !== null ? Math.round(el.objectActionDto.temperature*10)/10 : ""}</TdModalShurtan>
                                    </tr>
                                    {el.objectActionDto !== null && el.objectActionDto.pressure === 0 && el.objectActionDto.temperature === 0 ?
                                    <tr>
                                        <TdModalShurtanRed colSpan="2">НЕТ СИГНАЛА</TdModalShurtanRed>
                                    </tr>
                                    : ""}
                                    <tr>
                                        <TdModalShurtanData colSpan="2">Дата Обновления</TdModalShurtanData>
                                    </tr>
                                    <tr>
                                        <TdModalShurtan colSpan="2">{dateTime}</TdModalShurtan>
                                    </tr>
                                    </tbody>
                                )}

                            </TableModalShurtan>
                            <ButtonModalShurtan onClick={() => setShowCollectionPointModal(prev => !prev)}>OK</ButtonModalShurtan>
                        </ModalDivShurtan>
                    </motion.div>
                </motion.div>
            ) }
        </AnimatePresence>
    )
}
const TdModalShurtanRed = styled(TdModalShurtan)`
  color:red;
`
export default CollectionPointModal
