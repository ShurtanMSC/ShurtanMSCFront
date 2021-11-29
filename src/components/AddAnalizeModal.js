    import React, {useRef, useEffect, useCallback} from 'react';
import { useSpring, animated } from 'react-spring';
import { Table, Tr, Th, TdFirst, Td, InputModal, H2Div, H2, SaveDiv, PModal, SpanModal, ModalContainerFluid, ModalContainer, SaveBtnModal, CloseBtnModal } from '../styled'

const AddAnalizeModal = ({showAddAnalizeModal, setShowAddAnalizeModal, analysis}) => {
    const modalRef = useRef();

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showAddAnalizeModal ? 1 : 0,
        transform: showAddAnalizeModal ? `translateY(0%)` : `translateY(-100%)`
    });

    const closeModal = e => {
        if(modalRef.current === e.target) {
            setShowAddAnalizeModal(false);
        }
    };

    const keyPress = useCallback (e => {
        if(e.key === 'Escape' && showAddAnalizeModal){
            setShowAddAnalizeModal(false)
        }
    }, [setShowAddAnalizeModal, showAddAnalizeModal])

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);

    return (
        <>
        { showAddAnalizeModal ? (
            <ModalContainerFluid ref={modalRef} onClick={closeModal}>
            <animated.div style={{animation}}>
            <ModalContainer showAddAnalizeModal={showAddAnalizeModal}>
                <H2Div>
                    <H2>Анализ добычи</H2>
                </H2Div>
                <Table>
                    <thead>
                        <Tr>
                            <Th rowSpan="2" style={{padding:'1rem'}}>Наименование</Th>
                            <Th colSpan="2">За текущий месяц</Th>
                            <Th colSpan="3">С начала года</Th>
                        </Tr>
                        <Tr>
                            <Th>План добычи тыс.м3</Th>
                            <Th>Факт добыча тыс.м3</Th>
                            <Th>План добычи тыс.м3</Th>
                            <Th>Факт добыча тыс.м3</Th>
                            <Th>За аналог. период прошлого года</Th>
                        </Tr>
                    </thead>
                    <tbody>
                    {analysis.map((add, key) =>
                        <Tr key={key}>
                            <TdFirst>{add.name}</TdFirst>
                            <Td> <InputModal type="number"  name="name" value={add.plan_m} required/> </Td>
                            <Td> <InputModal type="number"  name="name" value={add.fakt_m} required/> </Td>
                            <Td> <InputModal type="number"  name="name" value={add.plan_g} required/> </Td>
                            <Td> <InputModal type="number"  name="name" value={add.fakt_g} required/> </Td>
                            <Td> <InputModal type="number"  name="name" value={add.proshlom_god} required/> </Td>
                        </Tr>
                    )}
                    </tbody>
                </Table>
                <SaveDiv>
                    <div>
                        <PModal>Дата изменения: <SpanModal> 03.08.2021 </SpanModal> <SpanModal> 13:45:48 </SpanModal> </PModal>
                    </div>
                    <div>
                        {/*<SaveBtnModal>Сохранит</SaveBtnModal>*/}
                        <CloseBtnModal 
                            aria-label='Close modal' 
                            onClick={()=> setShowAddAnalizeModal(prev => !prev)}>Закрыт
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

export default AddAnalizeModal
