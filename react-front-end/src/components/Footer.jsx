import { Facebook } from "@material-ui/icons";
import styled from "styled-components"


const Container = styled.div`
    display: flex;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-left: 20px;
`;

const Logo  = styled.h1`
    
`;
const Desc  = styled.p`
    
`;
const SocialContainer  = styled.div`
    
`;
const SocialIcon  = styled.div`
    
`;
const Center = styled.div`
    flex: 1;
`;
const Right = styled.div`
    flex: 1;
`;
const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>R-SHOP.</Logo>
            <Desc>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </Desc>
            <SocialContainer>
                <SocialIcon>
                    <Facebook/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center></Center>
        <Right></Right>
    </Container>
  )
}

export default Footer
///1h25