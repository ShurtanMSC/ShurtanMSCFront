import React, {useRef, useEffect, useCallback} from 'react';
import { useSpring, animated } from 'react-spring';
import {
    Table,
    Tr,
    Th,
    TdFirst,
    Td,
    InputModal,
    H2Div,
    H2,
    SaveDiv,
    PModal,
    SpanModal,
    ModalContainerFluid,
    ModalContainer,
    SaveBtnModal,
    CloseBtnModal,
    InputDataModal, DivDataModal
} from '../styled'
import  styled from 'styled-components'

const ModesOfOperationModal = ({showModesOperationModal, setShowModesOperationModal}) => {
    const modalRef = useRef();

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModesOperationModal ? 1 : 0,
        transform: showModesOperationModal ? `translateY(0%)` : `translateY(-100%)`
    });

    const closeModal = e => {
        if(modalRef.current === e.target) {
            setShowModesOperationModal(false);
        }
    };

    const keyPress = useCallback (e => {
        if(e.key === 'Escape' && showModesOperationModal){
            setShowModesOperationModal(false)
        }
    }, [setShowModesOperationModal, showModesOperationModal])

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);

    return (
        <>
        { showModesOperationModal ? (
            <ModalContainerFluid ref={modalRef} onClick={closeModal}>
            <animated.div style={{animation}}>
            <ModalContainer showModesOperationModal={showModesOperationModal}>
                <H2Div>
                    <H2>Режимы эксплуатации ДКС</H2>
                </H2Div>
                <DivDataModal>
                    <InputModalDate type="date" name="date" />
                    <SaveBtnModal>Показать</SaveBtnModal>
                </DivDataModal>
                <Table>
                    <thead>
                        <Tr>
                            <Th rowSpan="2" style={{padding:'1rem'}}>Наименование объектов, агрегатов и марка ГТД</Th>
                            <Th colSpan="3">Давление газа, кгс/см2</Th>
                            <Th colSpan="3">Температура газа, С</Th>
                            <Th>Обороты СТ</Th>
                            <Th>Обороты газа ГПА</Th>
                            <Th colSpan="2">Объем газа КС</Th>
                            <Th>Расход топ.газа</Th>
                            <Th>Общая наработка ГТД</Th>
                            <Th>Эксплуатация после кап. ремонта</Th>
                        </Tr>
                        <Tr>
                            <Th>Р вх Стан</Th>
                            <Th>Р вх</Th>
                            <Th>Р вых</Th>
                            <Th>Т вх</Th>
                            <Th>Т вых</Th>
                            <Th>Т выхл</Th>
                            <Th>Об/мин</Th>
                            <Th>Q.тыс. м³/сут</Th>
                            <Th>Q.тыс. м3/сут по факту</Th>
                            <Th>Q.тыс. м3/сут по проекту</Th>
                            <Th>Q.тыс. м3/сут</Th>
                            <Th>мото/час</Th>
                            <Th>мото/час</Th>
                        </Tr>
                    </thead>
                    <tbody>
                        <Tr>
                            <TdFirst>ДКС-2 КМПО</TdFirst>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                        </Tr>
                        <Tr>
                            <TdFirst>ДКС-2 Батеман</TdFirst>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                        </Tr>
                        <Tr>
                            <TdFirst>ДКС-Сев.Нишан</TdFirst>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                            <Td> <InputModal type="number"  name="name" required/> </Td>
                        </Tr>
                    </tbody>
                </Table>
                <SaveDiv>
                    <div>
                        <PModal>Дата изменения: <SpanModal> 03.08.2021 </SpanModal> <SpanModal> 13:45:48 </SpanModal> </PModal>
                    </div>
                    <div>
                        <SaveBtnModal>Сохранит</SaveBtnModal>
                        <CloseBtnModal 
                            onClick={()=> setShowModesOperationModal(prev => !prev)}>Закрыт
                        </CloseBtnModal>
                    </div>
                </SaveDiv>
            </ModalContainer>
            </animated.div>
        </ModalContainerFluid> 
        ) : null}
        </>
    );
};
const InputModalDate = styled(InputModal)`
  margin-right: 8px;
  padding: 0.3em;
`
export default ModesOfOperationModal
