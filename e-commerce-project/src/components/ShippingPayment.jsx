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

<<<<<<< HEAD
const SelectFiled = styled.select`
  padding: 10px;
  border: 1px solid black;
  margin-bottom: 10px;
  width: 104%;
`;
const Option = styled.option``;

const PurchaseSummary = styled.div`
  border: 1px solid black;
  margin: 10px 0px;
  /* background-color: #edeaea; */
  padding: 10px;
  padding-bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const PriceContianer = styled.div`
  display: flex;
  /* justify-content: center;
  align-content: center; */
`;
const PriceTitle = styled.p`
  background-color: black;
  border-bottom: 0.2px solid white;
  color: white;
  display: flex;
  padding: 5px;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  font-size: 15px;
`;
const PriceDetail = styled.p`
=======
const Agreement = styled.div`
>>>>>>> parent of 10e36e9 (Update ShippingPayment.jsx)
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

const PaymentMethod = styled.div`
  height: 50px;
  width: 100%;
  padding-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const CashOnDelivery = styled.div`
  padding-right: 90px;
`;
const OnlinePayment = styled.div``;

const ShippingPayment = () => {
  return (
    <Wrapper>
<<<<<<< HEAD
      <ShippingPaymentContainer>
        <Title>SHIPPING AND PAYMENT DETAILS</Title>
        <PurchaseSummary>
          <SummaryTitle>Summary</SummaryTitle>
          <PriceContianer>
            <PriceTitle>Subtotal </PriceTitle>
            <PriceDetail>3,20,000 PKR</PriceDetail>
          </PriceContianer>
          <PriceContianer>
            <PriceTitle>Delivery </PriceTitle>
            <PriceDetail>1000 PKR</PriceDetail>
          </PriceContianer>
          <PriceContianer>
            <PriceTitle style={{ fontSize: "30px" }}>Total </PriceTitle>
            <PriceDetail style={{ fontSize: "30px" }}>3,21,000 PKR</PriceDetail>
          </PriceContianer>
        </PurchaseSummary>
        <InputField placeholder="Full Name"></InputField>
        <InputField placeholder="Contact" type="number"></InputField>
        <SelectFiled>
          <Option disabled selected>
            City
          </Option>
          <Option>Karachi</Option>
          <Option>Lahore</Option>
          <Option>Islamabad</Option>
          <Option>Multan</Option>
        </SelectFiled>
        <InputFieldAddress placeholder="Address"></InputFieldAddress>
        <PaymentMethod>
          <Checkbox color="black" checked />
          <CashOnDelivery>Cash on delivery</CashOnDelivery>
          <Checkbox color="black" />
          <OnlinePayment>Online Payment</OnlinePayment>
        </PaymentMethod>
        <SubmitButton>PLACE ORDER</SubmitButton>
      </ShippingPaymentContainer>
=======
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
>>>>>>> parent of 10e36e9 (Update ShippingPayment.jsx)
    </Wrapper>
  );
};

export default ShippingPayment;
