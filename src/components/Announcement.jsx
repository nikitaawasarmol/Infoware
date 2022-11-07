import React from 'react'
import styled from 'styled-components'
import {mobile} from './responsive';



const Span = styled.div`
    font-weight: 600;
    margin-left: 2.5px;
    margin-right: 2.5px;
`
const Container = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    padding: 10px; 
    background: #d3bfe3;
    ${mobile({
      fontSize: "12px", 
    })}
`
function Announcement() {
  return (
    <Container>
        Add Fruits & Vegetables worth <Span> Rs249 </Span> to get <Span> 15% off on them</Span> 
    </Container>
  )
}

export default Announcement