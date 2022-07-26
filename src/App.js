import "./App.css";
import React from "react";
import ImgAdd from "./components/gallery-img";
import NavMenu from "./components/NavMenu";
import FirstSection from "./components/first-section";
import FoodMenuSlider from "./components/Food-Menu-slider";
import TodaySpecial from "./components/Today-special";
import Reservation from "./components/Reservation";
import HappyClients from "./components/HappyClients";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <header>
        <NavMenu />
      </header>
      <div className="first-section">
        <FirstSection />
      </div>
      <div className="second-section-container">
        <div className="foodmenu">
          <h1 className="tytul">Food Menu</h1>
          <FoodMenuSlider />
          <div className="foodmenu-btn">
            <a className="napisz" href="#">
              EXPLORE FOOD MENU{" "}
            </a>
          </div>
        </div>
        <TodaySpecial />
      </div>
      <Reservation />
      <HappyClients/>

      <div className="container2">
        <ImgAdd />
      </div>
      <Footer/>
    </>
  );
}
export default App;
