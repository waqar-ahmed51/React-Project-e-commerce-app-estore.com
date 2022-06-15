import {
  Email,
  Facebook,
  Instagram,
  LinkedIn,
  Phone,
  Pinterest,
  Room,
  Twitter,
  YouTube,
} from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  margin: 0;
  padding: 0;
`;

const FooterContainer = styled.div`
  display: flex;
`;
const Left = styled.div`
  border-right: 1px solid black;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0px 20px 0px 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  text-align: justify;
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 0%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
    transition: all 0.3s ease;
  }
`;

const Center = styled.div`
  border-right: 1px solid black;
  flex: 1;
  padding: 0px 20px 0px 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    font-size: 120%;
    transition: all 0.3s ease;
  }
`;
const Right = styled.div`
  flex: 1;
  padding: 0px 20px 0px 20px;
`;

const ContactItem = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: center;
  cursor: pointer;
  &:hover {
    font-size: 120%;
    transition: all 0.3s ease;
  }
`;

const Payment = styled.img`
  width: 50%;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: all 0.3s ease;
  }
`;

const Copyrights = styled.div`
  height: 30px;
  background-color: #000000;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  margin-top: 20px;
`;
const Developer = styled.div`
  height: 30px;
  background-color: #000000;
  color: white;
  display: flex;
  align-items: center;
  font-size: 16px;
  justify-content: center;

  cursor: pointer;
  margin-left: 5px;
  &:hover {
    color: #d0fffa;
    transition: all 0.3s ease;
    font-size: 18px;
  }
`;

function Footer() {
  return (
    <Container>
      <FooterContainer>
        <Left>
          <Logo>estore.</Logo>
          <Desc>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint ipsam
            distinctio nostrum eum, aliquam excepturi cupiditate ad harum.
            Aliquid tenetur alias quod quia aut voluptate repellendus magni, quo
            nobis deleniti?
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
            <SocialIcon color="0A65C2">
              <LinkedIn />
            </SocialIcon>
            <SocialIcon color="B70A1B">
              <Pinterest />
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
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{ marginRight: "10px" }} /> Jami Commercial Phase 6,
            Karachi
          </ContactItem>
          <ContactItem>
            <Phone style={{ marginRight: "10px" }} />
            +9221 1122334
          </ContactItem>
          <ContactItem>
            <Email style={{ marginRight: "10px" }} />
            contact@estore.com
          </ContactItem>
          <Payment src="https://www.rhodesgraduation.com/wp-content/uploads/cards.png" />
        </Right>
      </FooterContainer>
      <Copyrights>
        © All Rights Reserved. Designed & Developed by
        <Developer> WAQAR AHMED</Developer>
      </Copyrights>
    </Container>
  );
}

export default Footer;
