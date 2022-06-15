import { Facebook, Instagram, Twitter, YouTube } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3``;

const List = styled.ul``;

const ListItem = styled.li``;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

function Footer() {
  return (
    <Container>
      <Left>
        <Logo>estore.</Logo>
        <Desc>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint ipsam
          distinctio nostrum eum, aliquam excepturi cupiditate ad harum. Aliquid
          tenetur alias quod quia aut voluptate repellendus magni, quo nobis
          deleniti?
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <YouTube />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Laptops</ListItem>
          <ListItem>Phones</ListItem>
          <ListItem>Headphones</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
        </List>
      </Center>
      <Right></Right>
    </Container>
  );
}

export default Footer;
