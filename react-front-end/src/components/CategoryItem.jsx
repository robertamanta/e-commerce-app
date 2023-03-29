
import styled from "styled-components"

const Container = styled.div`
flex:1;
margin: 3px;
height: 70vh;
position: relative;
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
   
`;
const Info = styled.div`
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 flex-direction: column;
 display: flex;
 align-items: center;
 justify-content: center;
`;
const Title = styled.h1`
margin-bottom: 20px;
background-color: #f5e7e7;

`;

const Button = styled.button`
border: none;
padding: 10px;
background-color: white;
color: #111010;
cursor: pointer;
font-weight: 600;
border: 1px solid black;
`;

const CategoryItem = ({item}) => {
  return (
    <Container>
       <Image src={process.env.PUBLIC_URL + item.img} />
       <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
       </Info>
    </Container>
  )
}

export default CategoryItem
//min51