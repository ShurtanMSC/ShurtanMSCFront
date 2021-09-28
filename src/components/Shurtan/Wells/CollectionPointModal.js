import React, {useRef, useEffect, useCallback, useState} from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TableModalShurtan, TdModalShurtanFirst, ModalDivShurtan, TdModalShurtan, TdModalShurtanData, ButtonModalShurtan } from '../../../styled'
import axios from "axios";

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

const CollectionPointModal = ({showCollectionPointModal, setShowCollectionPointModal, idPoint}) => {
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

    // GET API
    const [pressureApi, setPressureApi] = useState([]);
    useEffect( () => {
        axios.get('https://shurtan.herokuapp.com/api/collection_point/all/action/mining_system/' + 1)
            .then(res => {setPressureApi(res.data.object)
            })
            .catch(err => {console.log(err)
            })
    }, [])

    const filtered = pressureApi.filter(el => el.objectDto.name === idPoint )

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
                                        <TdModalShurtan>{el.objectActionDto !== null ? el.objectActionDto.pressure : ""}</TdModalShurtan>
                                    </tr>
                                    <tr>
                                        <TdModalShurtanFirst>Расход, м³/ч:</TdModalShurtanFirst>
                                        <TdModalShurtan>{el.objectActionDto !== null ? el.objectActionDto.expand : ""}</TdModalShurtan>
                                    </tr>
                                    <tr>
                                        <TdModalShurtanFirst>Темрература, °C:</TdModalShurtanFirst>
                                        <TdModalShurtan>{el.objectActionDto !== null ? el.objectActionDto.temperature : ""}</TdModalShurtan>
                                    </tr>
                                    <tr>
                                        <TdModalShurtanData colSpan="2">Дата Обновления</TdModalShurtanData>
                                    </tr>
                                    <tr>
                                        <TdModalShurtan colSpan="2">2021-06-17 14:49:22</TdModalShurtan>
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

export default CollectionPointModal
