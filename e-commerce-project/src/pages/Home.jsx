import React, { Component } from "react";
import Categories from "../components/Categories";
import NewsLetter from "../components/NewsLetter";
import PopularPorductsHeading from "../components/PopularPorductsHeading";
import Products from "../components/Products";
import Slider from "../components/Slider";

class Home extends Component {
  state = {};

  render() {
    // console.log("Home Props", this.props);
    return (
      <div>
        <Slider />
        <Categories />
        <PopularPorductsHeading />
        <Products />
        <NewsLetter />
      </div>
    );
  }
}

export default Home;
