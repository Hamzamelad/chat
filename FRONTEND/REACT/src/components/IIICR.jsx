import React from 'react'
import styled from 'styled-components'

import Chat from './chat/Chat'

const IIICR = () => {
  return (
    <Styled>
        <Chat />
    </Styled>
  )
}

export default IIICR

const Styled = styled.div`
    flex: 1.85;
    display: flex;
    background-color: white;
`