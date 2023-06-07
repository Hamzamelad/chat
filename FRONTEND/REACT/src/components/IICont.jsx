import React from 'react'
import styled from 'styled-components'

import TopBar from './TopBar'
import IIICont from './IIICont'

const IICont = () => {
  return (
    <Styled>
        <TopBar></TopBar>
        <IIICont>
            
        </IIICont>
    </Styled>
  )
}

export default IICont

const Styled = styled.div`
    flex: 6.58;
    display: flex;
    flex-direction: column;

`