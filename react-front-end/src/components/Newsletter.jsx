import { Send } from '@material-ui/icons';
import styled from "styled-components"

const Container = styled.div`
  height: 60vh;
  background-color: antiquewhite;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 40px;
`;

const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgrey;
`;


const Input = styled.input`
  border: none;
  flex:7;
  padding-left: 20px;
`;


const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #046b6b;
  color: white;
`;
const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get updates for your favorite products!</Description>
        <InputContainer>
            <Input placeholder='E-mail'/>
            <Button>
                <Send/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter
