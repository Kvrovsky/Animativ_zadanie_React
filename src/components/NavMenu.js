import icon_cart from "../img/icon_cart.png";
import icon_plate from "../img/icon_plate.png";
import "./navbar/navmenu.css";


import React, { useState, useEffect } from "react";
function NavMenu() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);
  }, []);

  return (
    <nav>
      {(toggleMenu || screenWidth > 1050 ) && (
        <ul className="list">
          <li className="items">
            <a>Luxury Restaurant</a>
          </li>
          <li className="items">Home</li>
          <li className="items">Menu</li>
          <li className="items">Reservation</li>
          <li className="items">Recipe</li>
          <li className="items">Blog</li>
          <li className="items">Pages</li>
          <li className="items">Contact</li>
          <img src={icon_cart} className="img-menu" />
          <li className="booking-text">
            <div>
                <img className='icon_plate' src={icon_plate} alt="icon_plate" />
                <a className='book-text' href="#">BOOK YOUR TABLE</a>
            </div>
          </li>
        </ul>
      )}

      <button onClick={toggleNav} className="btn">
        MENU
      </button>
    </nav>
  );
}
export default NavMenu;
