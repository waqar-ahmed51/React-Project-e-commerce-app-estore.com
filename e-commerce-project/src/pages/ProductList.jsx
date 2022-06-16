import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Footer from "../components/Footer";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
  display: flex;
  justify-content: center;
  align-content: center;
  border-bottom: 1px solid #b7b7b7;
  padding-bottom: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 10px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Phones</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Phones:</FilterText>
          <Select>
            <Option disabled selected>
              RAM
            </Option>
            <Option>2 GB</Option>
            <Option>4 GB</Option>
            <Option>6 GB</Option>
            <Option>8 GB</Option>
            <Option>16 GB</Option>
          </Select>
          <Select>
            <Option disabled selected>
              ROM
            </Option>
            <Option>8 GB</Option>
            <Option>16 GB</Option>
            <Option>32 GB</Option>
            <Option>64 GB</Option>
            <Option>128 GB</Option>
            <Option>256 GB</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Phones:</FilterText>
          <Select>
            <Option disabled selected>
              Sort by
            </Option>
            <Option>Price Low to High</Option>
            <Option>Price High to Low</Option>
            <Option>Latest</Option>
            <Option>Popular</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Footer />
    </Container>
  );
};

export default ProductList;
