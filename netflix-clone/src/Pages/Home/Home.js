import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Baneer from "../../Components/Banner/Baneer";
import RowList from "../../Components/Rows/RowList/RowList";

const Home = () => {
  return (
    <>
      <Header />
      <Baneer/>
      <RowList/>
      <Footer />
    </>
  );
};

export default Home;
