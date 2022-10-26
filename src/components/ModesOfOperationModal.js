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
    DivDataModal
} from '../styled'
import  styled from 'styled-components'

const ModesOfOperationModal = ({showModesOperationModal, setShowModesOperationModal, date}) => {
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
                            <Th colSpan="3">Давление газа, кгс/см<sup>2</sup></Th>
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
                            <Th>Q.тыс. м<sup>3</sup>/сут</Th>
                            <Th>Q.тыс. м<sup>3</sup>/сут по факту</Th>
                            <Th>Q.тыс. м<sup>3</sup>/сут по проекту</Th>
                            <Th>Q.тыс. м<sup>3</sup>/сут</Th>
                            <Th>мото/час</Th>
                            <Th>мото/час</Th>
                        </Tr>
                    </thead>
                    <tbody>
                        <Tr>
                            <TdFirst>ДКС-2 КМПО</TdFirst>
                            <Td> <InputModal type="number"  name="name" defaultValue={7.7} required/> </Td>
                            <Td> <InputModal type="number"  name="name" defaultValue={7.4} required/> </Td>
                            <Td> <InputModal type="number"  name="name" defaultValue={8.6} required/> </Td>
                            <Td> <InputModal type="number"  name="name" defaultValue={20.2} required/>  </Td>
                            <Td> <InputModal type="number"  name="name" defaultValue={32} required/> </Td>
                            <Td> <InputModal type="number"  name="name" defaultValue={95} required/> </Td>
                            <Td> <InputModal type="number"  name="name" defaultValue={553} required/> </Td>
                            <Td> <InputModal type="number"  name="name" defaultValue={5285} required/> </Td>
                            <Td> <InputModal type="number"  name="name" defaultValue={24698} required/> </Td>
                            <Td> <InputModal type="number"  name="name" defaultValue={25802} required/> </Td>
                            <Td> <InputModal type="number"  name="name" defaultValue={635} required/> </Td>
                            <Td> <InputModal type="number"  name="name" defaultValue={68993} required/> </Td>
                            <Td> <InputModal type="number"  name="name" defaultValue={11704} required/> </Td>
                        </Tr>
                        <Tr>
                            <TdFirst>ДКС-2 Батеман</TdFirst>
                            <Td> <InputModal type="number"  name="name" defaultValue={16.8} required/> </Td>
                            <Td> <InputModal type="number"  name="name" defaultValue={16.3} required/> </Td>
                            <Td> <InputModal type="number"  name="name" defaultValue={53.1} required/> </Td>
                            <Td> <InputModal type="number"  name="name" defaultValue={34} required/> </Td>
                            <Td> <InputModal type="number"  name="name" defaultValue={111} required/> </Td>
                            <Td> <InputModal type="number"  name="name" defaultValue={735} required/> </Td>
                            <Td> <InputModal type="number"  name="name" defaultValue={5500} required/> </Td>
                            <Td> <InputModal type="number"  name="name" defaultValue={6175} required/> </Td>
                            <Td> <InputModal type="number"  name="name" defaultValue={24698} required/> </Td>
                            <Td> <InputModal type="number"  name="name" defaultValue={40800} required/> </Td>
                            <Td> <InputModal type="number"  name="name" defaultValue={470} required/> </Td>
                            <Td> <InputModal type="number"  name="name" defaultValue={103435} required/> </Td>
                            <Td> <InputModal type="number"  name="name" defaultValue={36631} required/> </Td>
                        </Tr>
                        <Tr>
                            <TdFirst>ДКС-Сев.Нишан</TdFirst>
                            <Td> <InputModal type="number"  name="name" defaultValue={9.5} required/> </Td>
                            <Td> <InputModal type="number"  name="name" defaultValue={9.3} required/> </Td>
                            <Td> <InputModal type="number"  name="name" defaultValue={52.7} required/> </Td>
                            <Td> <InputModal type="number"  name="name" defaultValue={14} required/> </Td>
                            <Td> <InputModal type="number"  name="name" defaultValue={42} required/> </Td>
                            <Td> <InputModal type="number"  name="name" defaultValue={446} required/> </Td>
                            <Td> <InputModal type="number"  name="name" defaultValue={4500} required/> </Td>
                            <Td> <InputModal type="number"  name="name" defaultValue={1339} required/> </Td>
                            <Td> <InputModal type="number"  name="name" defaultValue={2677} required/> </Td>
                            <Td> <InputModal type="number"  name="name" defaultValue={6061} required/> </Td>
                            <Td> <InputModal type="number"  name="name" defaultValue={237} required/> </Td>
                            <Td> <InputModal type="number"  name="name" defaultValue={36796} required/> </Td>
                            <Td> <InputModal type="number"  name="name" defaultValue={3295} required/> </Td>
                        </Tr>
                    </tbody>
                </Table>
                <SaveDiv>
                    <div>
                        <PModal>Дата изменения: <SpanModal> {date} </SpanModal> </PModal>
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
