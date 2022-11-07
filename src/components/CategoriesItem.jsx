import React from 'react'
import styled from 'styled-components'
import {mobile} from './responsive';


const Container = styled.div`
    cursor: pointer;
    display: flex;
    flex: 1;
    margin: 13px;
    position: relative;
    padding: 20px;
    background-color: #F5EDFA;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);    
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    &:hover{box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10}
    ${mobile({
      // display: "flex",
      fontSize: "12px",
      margin: "2px",
      flexDirection: "column", 
    })}
`

const Title = styled.div`

`
function CategoriesItem({item}) {
  return (
    <Container>
        <Title>
        {item.title}
      </Title>
    </Container>
  )
}

export default CategoriesItem