import styled from 'styled-components'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import {mobile} from './responsive';

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 40vh;
    position: relative;
    border-radius: 20px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    ${mobile({
      height: "30vh",
      fontSize: "12px",
      

    })}
`
const Image = styled.img`
margin-top: 10px;
    margin-bottom: 20px;
    width: 60%;
    height: 40%;
    object-fit: cover;
    ${mobile({
      marginBottom: "1px", 
      objectFit: "cover",
    })}

`
const Info = styled.div`
    /* position: absolute; */
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    font-weight: 600;
    /* margin-left: 7px; */
`
const Title = styled.div`
margin-bottom: 80px;
align-items: center;
${mobile({
      marginBottom: "1px", 
    })}
`


const Quantity = styled.div`
    position: absolute;
    left: 0;
    color: gray;
    margin-left: 10px ;
    bottom: 0;
    margin-bottom: 10px;
    ${mobile({
      marginBottom: "40px", 
    })}
`
const Price = styled.div`
    right: 0;
    position: absolute;
    margin-right: 10px;
    bottom: 0;
    margin-bottom: 10px;
    ${mobile({
      marginBottom: "40px", 
    })}
  `

const QuickAdd = styled.div`
    cursor: pointer;
    border-radius: 2px;
    color: #FA2966;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);    

`
const TrendingItem = ({item, handleClick}) => {

  return (
    <Container>
      <Image src={item.img}/>
      <Info>
      <Title>
        {item.title}
      </Title>
      <QuickAdd onClick={() => handleClick(item)}>
      <AddOutlinedIcon />
      </QuickAdd>
            <Quantity>
        {item.quantity}
      </Quantity>
      <Price>
        {item.price}
      </Price>
      </Info>
      </Container>
  )
}

export default TrendingItem