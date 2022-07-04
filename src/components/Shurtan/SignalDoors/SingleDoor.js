import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styled, {keyframes} from "styled-components";
import Open from '../../../image/open.mp3';
import ReactAudioPlayer from 'react-audio-player';

const SingleDoor = ({signal}) => {

  const [closeSig, setCloseSig] = useState(true);

  const closeSignal = () => {
    setCloseSig(false);
  }

  useEffect(()=>{
    setInterval(()=>{
      setCloseSig(closeSig)
    }, 300000)
  },[closeSig])


  return(
    <>
      { closeSig && signal.objectActionDto.door ?
        <ContainerSignal>
          <FontAwesomeIconExit icon={faTimes} color="white" onClick={closeSignal}/>
          <p>Door of the {signal.objectDto.name} is opened</p>
          <ReactAudioPlayer
            src={Open}
            controls
            autoPlay
            loop
            style={{width:'0'}}
          />
        </ContainerSignal>
        : null
      }
    </>
    )
}

const signalContent = keyframes`
  0%{
    transform: translateY(40px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`
const ContainerSignal = styled.div`
  width: 280px;
  height: 40px;
  background-color: rgba(0,161,220);
  border-radius: 10px;
  padding: 10px 15px;
  font-weight: 700;
  font-size: 14px;
  font-family: "Montserrat";
  position: relative;
  margin-bottom: 10px;
  animation: ${signalContent} 1s ease-out;
  box-shadow: 0 4px 8px rgba(0,0,0,.2);
`

const FontAwesomeIconExit = styled(FontAwesomeIcon)`
  color: #fff;
  position: absolute;
  top: 5px;
  right: 10px;
  cursor: pointer;
`
export default SingleDoor