import styled from "styled-components"


const Container = styled.div`
    height: 30px;
    background-color: #ef9273;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`
const Announcement = () => {
  return (
    <div>
      <Container>
         Free shipping on Orders over 50$!
      </Container>
    </div>
  )
}

export default Announcement
