import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  border-bottom: 1px solid #b7b7b7;
  /* background-color: black; */
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 0.5px solid black;
  display: flex;
  align-items: center;
  margin-left: 25px;
  justify-content: space-between;
  padding: 0px;
`;

const Input = styled.input`
  border: none;
  flex: 8;
  height: 25px;
  cursor: pointer;
  display: flex;
`;
const Center = styled.div`
  flex: 1;
`;

const Logo = styled.h1`
  color: #000000;
  font-weight: bold;
  text-align: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

// const Link = styled.div``;

const Navbar = () => {
  function register() {
    console.log("Register Clicked!!!!!");
  }
  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/" class="CustomRouterLink">
            <Logo>estore.</Logo>
          </Link>
        </Left>
        <Center>
          <SearchContainer>
            <Input />
            <Search style={{ color: "black", fontSize: 20 }} />
          </SearchContainer>
        </Center>
        <Right>
          <MenuItem to="/register" onClick={register}>
            <Link to="/register" class="CustomRouterLink">
              REGISTER
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/signin" class="CustomRouterLink">
              SIGN IN
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/cart" class="CustomRouterLink">
              <Badge badgeContent={1} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
