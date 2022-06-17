import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Container = styled.div``;

const Title = styled.h1`
  padding: 20px 0px 20px 0px;
  font-size: 50px;
  margin-bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  /* background-color: #e4e0e0; */
  /* width: 100vw;
  height: 70vh; */
`;

const RegistreForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const InputField = styled.input`
  border: 1px solid black;
  padding: 10px;
  margin-bottom: 20px;
  width: 30%;
`;
const SubmitButton = styled.button`
  border: none;
  border: 1px solid black;
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 20px;
  margin-bottom: 50px;
  &:hover {
    background-color: white;
    color: black;
    transform: scale(1.1);
    transition: all 0.5s ease;
  }
`;

const Register = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <RegistreForm>
          <Title>Create your account</Title>
          <InputField placeholder="First Name"></InputField>
          <InputField placeholder="First Name"></InputField>
          <InputField placeholder="First Name"></InputField>
          <InputField placeholder="First Name"></InputField>
          <InputField placeholder="First Name"></InputField>
          <InputField placeholder="First Name"></InputField>
          <InputField placeholder="First Name"></InputField>
          <InputField placeholder="First Name"></InputField>
          <SubmitButton>Register</SubmitButton>
        </RegistreForm>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Register;
