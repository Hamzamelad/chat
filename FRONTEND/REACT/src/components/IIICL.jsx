import React from 'react'
import styled from 'styled-components'

import Menu from './Menu'

const IIICL = () => {
  return (
    <Styled>
        <Menu />
    </Styled>
  )
}

export default IIICL

const Styled = styled.div`
    flex: 1;
    display: flex;
    background-color: white;
    
`