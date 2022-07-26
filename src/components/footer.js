import icon_apple from "../img/icon_apple.png";
import icon_Google_Play from "../img/icon_Google_Play.png";

function Footer() {
  return(
  <>
    <footer>
      <div className="container">
        <div className="row">
          <div className="fcolumn left">
            <h1> Navigation</h1>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Menu</li>
              <li>Reservation</li>
              <li>Recipe</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="fcolumn middle">
            <ul>
              <h1> News letter</h1>
              <li>
                {" "}
                <a>
                  {" "}
                  Enter your email address and subscribe daily newsletter
                </a>{" "}
              </li>
              <li>
                <input type="text" placeholder="Email Address"></input>
                <button className="sub">SUBSCRIBE</button>{" "}
              </li>
              <li>
                <button className="b1"></button>
                <button className="b2"></button>
                <button className="b3"></button>
              </li>
            </ul>
          </div>
          <div className="fcolumn right">
            <h1> Our app avilable</h1>
            <ul>
              <li>
                <button className="get">
                  {" "}
                  <img src={icon_apple}></img>Avilable on the <br></br>
                  <span>App Store </span>
                </button>
              </li>
              <li>
                <button className="get">
                  {" "}
                  <img src={icon_Google_Play}></img> Get it on <br></br>
                  <span>Google Play </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    <div className="dol">
      {" "}
      <p className="copyright">
        {" "}
        2018 © LUXURY RESTAURANT, ALL RIGHTS RESERVED
      </p>
    </div>
  </>
  );
}
export default Footer;
