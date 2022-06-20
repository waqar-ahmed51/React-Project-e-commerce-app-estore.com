import styled from "styled-components";
import { Checkbox } from "@material-ui/core";

const Wrapper = styled.div`
  margin: 20px;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  padding: 20px 0px 20px 0px;
  font-size: 20px;
  margin-bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const RegisterFields = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const InputField = styled.input`
  border: 1px solid black;
  padding: 10px;
  margin-bottom: 10px;
  width: 30vw;
`;
const SubmitButton = styled.button`
  border: none;
  border: 1px solid black;
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 20px;
  margin-bottom: 50px;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
    transform: scale(1.1);
    transition: all 0.5s ease;
  }
`;

const Agreement = styled.div`
  display: flex;
  align-items: center;
`;
const AgreementText = styled.p`
  font-size: 15px;
  color: #757575;
  &:hover {
    color: black;
  }
`;

const ShippingPayment = () => {
  return (
    <Wrapper>
      <RegisterFields>
        <Title>CREATE YOUR ACCOUNT</Title>
        <InputField placeholder="First Name"></InputField>
        <InputField placeholder="Last Name"></InputField>
        <InputField placeholder="Email"></InputField>
        <InputField placeholder="Password" type="password"></InputField>
        <InputField placeholder="Confirm Password" type="password"></InputField>
        <Agreement>
          <Checkbox color="black" />
          <AgreementText>AGREE TO OUR TERMS AND POLICIES</AgreementText>
        </Agreement>
        <SubmitButton>REGISTER</SubmitButton>
      </RegisterFields>
    </Wrapper>
  );
};

export default ShippingPayment;
