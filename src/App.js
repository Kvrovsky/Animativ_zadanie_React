import './App.css';
import icon_cart from './img/icon_cart.png';
import icon_plate from './img/icon_plate.png';
import React from 'react';
import qwe from './img/7d8587.png';
import icon_phone from './img/icon_phone.png';
import pngg from './img/pngg.png';
import pngg2 from './img/pngg2.png';
import obraz from './components/obraz';
import pngg3 from './img/pngg3.png';
import fff from './img/fff.png';
import ImgAdd from './components/gallery-img';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import SimpleSlider from './components/gallery-img';
import { MultiSelectUnstyled } from '@mui/base';
import MultipleItems from './components/gallery-img';



function App() {
  return (
    <>
    <div className='container'></div>
      <header>
        <div className='flex-container'>
          <div className='napisy'>
            <h1 className='napis1'>LUXURY</h1>
            <h2 className='napis2'>Resteurant</h2>
          </div>
          <ul className='lista'>
            <li><a className='hom' href="#">HOME</a></li>
            <li><a className='men' href="#">MENU</a></li>
            <li><a className='res' href="#">RESERVATION</a></li>
            <li><a className='rec' href="#">RECIPE</a></li>
            <li><a className='blog' href="#">BLOG</a></li>
            <li><a className='pag' href="#">PAGES</a></li>
            <li><a className='cont' href="#">CONTACT</a></li>
            <div className='zdjecie1'>
              <img src={icon_cart} alt="icon_cart" />
            </div>
          </ul>
          <div className='ramka1'>
            <img className='icon_plate' src={icon_plate} alt="icon_plate" />
            <a className='napisz' href="#">BOOK YOUR TABLE</a>
          </div>
        </div>
      </header>

      <main>
        <div className='napisy3'>
          <h1 className='napis3'>IMAGE</h1>
          <h2>1970x750</h2>
        </div>

        <div className='napisy4'>
          <h1 className='napis4'>Teast your fav dish </h1>
          <h2 className='napis5'>from luxury resteurant</h2>
        </div>

        <img className='phone' src={icon_phone} alt="icon_phone" />

        <div className='napisy5'>
          <a className='napis6' href="#">CALL US AND BOOK YOUR TABLE</a>
          <h2 className='napis7'>1-008 005 006</h2>

        </div>
        <p><i class="arrow lewa"></i></p>
        <p><i class="arrow prawa"></i></p>

        <img src={qwe} alt="7d8587" />

        <div className='dupa'>
          <div className='foodmenu'>
            <h1 className='tytul'>Food Menu</h1>

            <div className='ultimate'>
              <div className='ultv2'>
                <h2>ULTIMATE ORGANIC FRUIT SALAD</h2>
                <h3>survived not olny live centuries but the leap</h3>
              </div>
              <p className='cena'>$50.00</p>
            </div>

            <div className='plain'>
              <div className='plainv2'>
                <h2>PLAIN PANCAKES</h2>
                <h3>Donec eget augue at diam euismod viverra</h3>
              </div>
              <p className='cenadruga'>$68.00</p>
            </div>

            <div className='toasted'>
              <div className='toastedv2'>
                <h2>TOASTED JAM</h2>
                <h3>Phasellus a ex accumsan, sollicitudin</h3>
              </div>
              <p className='cenatrzecia'>$22.00</p>
            </div>

            <div className='jam'>
              <div className='jamv2'>
                <h2>TOASTED JAM</h2>
                <h3>Phasellus a ex accumsan, sollicitudin</h3>
              </div>
              <p className='cenaczwarta'>$39.00</p>
            </div>

            <div className='przycisk'>
              <a className='napisz' href="#">EXPLORE FOOD MENU </a>
            </div>
          </div>
          <div className='todayss'>
            <h1 className='napisg'> Today Special</h1>
            <div className='todays'>
              <div className='ramka2'>
                <h2 className='napisnaramce'>IMAGE 320x210</h2>
                <img src={pngg} alt="pngg" />
              </div>

              <div className='ramka3>'>
                <h2 className='napisnaramce2'>IMAGE 320x172</h2>
                <img src={pngg2} alt="pngg2" />


              </div>
            </div>



          </div>
        </div>


        <div className='happy'>
          <div className='zdjecie11'>
            <h1 className='ttt22'>IMAGE 269x295</h1>
            <img src={pngg3} alt="pngg3" />
          </div>
          <div className='tekst11'>
            <h1 className='ttt'>Happy Clients</h1>
            <h2 className='ttt2'>Best atmosphere and food</h2>
            <h3 className='ttt3'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident.</h3>
            <h4 className='ttt4'>DR. PRABAKARAN JOHN</h4>
          </div>
        </div>

        <div className='reserve'>
          <img className='zdj1' src={fff}></img>
          <img className='zdj2' src={fff}></img>
          <div className='container'>
            <h1>Reserve your table</h1>
            <div className='split2'>
              <div>
                <input type='text' placeholder='Name'></input><br></br>
                <input type='text' placeholder='Time'></input><br></br>
                <input type='text' placeholder='Guests'></input><br></br>
                <div className='wrapper2'>
                  <button> MAKE RESERVATION</button>
                  <div className='np'>
                    <span className='napisr'>
                      <a> YOU CAN ALSO CALL </a><br />
                      <span className='napisr2'>
                        FOR A RESERVATION
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <input type='text' placeholder='Email address'></input><br></br>
                <input type='text' placeholder='Date'></input><br></br>
                <input type='text' placeholder='Phone'></input><br></br>
                <p>1-007 000 005</p>
              </div>
            </div>
          </div>
        </div>  

        <div className="container2">
          <ImgAdd/>
        </div>
        <footer>
      <div className='container'>
      <div className='row'>
        <div className='fcolumn left'>
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
        <div className='fcolumn middle'>
          <ul>
          <h1> News letter</h1>
         <li> <a> Enter your email address and subscribe daily newsletter</a> </li>
         <li><input type="text" placeholder='Email Address'></input>
          <button className='sub'>SUBSCRIBE</button> </li>
          <li>
            <button className='b1'></button>
            <button className='b2'></button>
            <button className='b3'></button>
          </li>
          </ul>
        </div>
        <div className='fcolumn right'>
          <h1> Our app avilable</h1>
          <ul>
            <li><button className='get'> <img src="img/icon_apple.png"></img>Avilable on the <br></br>
            <span>App Store </span>
            </button></li>
            <li><button className='get'> <img src="img/icon_Google_Play.png"></img> Get it on <br></br>
            <span>Google Play </span>
            </button></li>
          </ul>
        </div>
      </div>
      </div>
    </footer>
   
    <div className='dol'> <p className='copyright'> 2018 © LUXURY RESTAURANT, ALL RIGHTS RESERVED</p></div>
    </main></>


      

  );
}
export default App;
