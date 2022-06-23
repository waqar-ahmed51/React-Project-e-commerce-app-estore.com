import styled from "styled-components";

const Container = styled.div`
  background-color: #fdfafa;
  margin: 10px;
  padding: 200px 0px;
  text-align: center;
  font-size: 70px;
`;

const ErrorPage = () => {
  return (
    <Container>
      <h1>Page Not Found!</h1>
      <h4>Check your URL or try refreshing the page.</h4>
    </Container>
  );
};

export default ErrorPage;
