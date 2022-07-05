import styled from "styled-components";

const Title = styled.h1`
  margin: 20px;
  display: flex;
  justify-content: center;
  align-content: center;
  border-bottom: 1px solid #b7b7b7;
  padding-bottom: 20px;
`;

const PageTitle = ({ title }) => {
  return <Title>{title}</Title>;
};

export default PageTitle;
