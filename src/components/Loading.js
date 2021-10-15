import React from 'react';
import styled from 'styled-components';
import LoadingImg from '../image/loading.gif';
import {Loader, ImgLoader, ShurtanMapContainer} from '../styled';

const Loading = () => {
    return(
        <LoaderShurtanMapContainer>
            <Loader>
                <ImgLoader src={LoadingImg} alt="Loading"/>
            </Loader>
        </LoaderShurtanMapContainer>
    )
}
const LoaderShurtanMapContainer = styled(ShurtanMapContainer)`
  justify-content: center;
`
export default Loading