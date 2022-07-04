import React, {useContext} from 'react';
import {AppContext} from "../../../context";
import styled from 'styled-components';
import SingleDoor from "./SingleDoor";

const SignalDoors = () => {
  const {pressureApi} = useContext(AppContext);

  return(
      <ContainerFluidSignal>
        {pressureApi && pressureApi.map((signal, index) =>
          <SingleDoor signal={signal} key={index} />
        )}
      </ContainerFluidSignal>
    )
}
const ContainerFluidSignal = styled.div`
  position: relative;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  position: fixed;
  bottom: 1%;
  right: 1%;
  overflow: hidden;
  transition: 1s ease-out;
`


export default SignalDoors