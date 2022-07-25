import React from "react";
import Header from "./components/layout/Header";
import Slider from "./components/includes/Slider";
import Contents from "./components/layout/Contents";
import Text from "./components/includes/Text";
import Image from "./components/includes/Image";
import Card from "./components/includes/Card";
import Banner from "./components/includes/Banner";
import ReviewText from "./components/includes/ReviewText";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Header />
      <Slider />
      <Contents>
        <Text />
        <Image />
        <Card />
        <Banner />
        <ReviewText />
      </Contents>
      <Footer />
    </>
  );
}

export default App;
