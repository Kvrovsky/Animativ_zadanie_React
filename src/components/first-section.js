import icon_phone from "../img/icon_phone.png";
import Gallerybackground from "./gallery-first-section";


function FirstSection() {
  return (
    <>
    <div className="background-slider">
      <Gallerybackground />
      </div>
      <div className="slider">
        <div className="container">
          <div>

            <div className="slider-text-container">
              <div className="slider-text">
                Teast your fav dish from luxury restaurant
                <div className="logo-text">
                  <img src={icon_phone} className="phone-icon" />
                  <a>CALL US AND BOOK YOUR TABLE</a>
                  <br />
                  <a id="phone-number">1-008 005 006</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
export default FirstSection;
