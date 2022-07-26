import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
const FoodMenu = [
  {
    title: "ULTIMATE ORGANIC FRUIT SALAD",
    description: "survived not olny live centuries but the leap",
    prcie: "$50.00",
  },
  {
    title: "PLAIN PANCAKES",
    description: "Donec eget augue at diam euismod viverra",
    prcie: "$60.00",
  },
  {
    title: "TOASTED JAM",
    description: "Phasellus a ex accumsan, sollicitudin",
    prcie: "$22.00",
  },
  {
    title: "TOASTED JAM",
    description: "Phasellus a ex accumsan, sollicitudin",
    prcie: "$50.00",
  },
  {
    title: " JAM",
    description: "Phasellus a ex accumsan, sollicitudin",
    prcie: "$660.00",
  },
  {
    title: "TOAST",
    description: "sollicitudin",
    prcie: "$50.00",
  },
];

function FoodMenuSlider() {
  return (
    <>
    <Splide
      tag="section"
      options={{
        direction: "ttb",
        height: "10rem",
        wheel: true,
        perPage: 3,
        permove: 3,
        arrows: false,
      }}
    >
      {FoodMenu.map((Fooddata) => (
        <SplideSlide>
          <div class="offer">
            <a> {Fooddata.title}</a>
            <br />
            <a> {Fooddata.description} </a>
            <br />
          </div>
          <div class="prices">
            <a>{Fooddata.prcie}</a>
          </div>
        </SplideSlide>
      ))}
    </Splide>
    <div className="explore-menu"><a> EXPLORE FOOD MENU </a><br /></div>
    </>
  );
}
export default FoodMenuSlider;
