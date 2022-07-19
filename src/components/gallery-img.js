import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';

const Images = [
    {
        number: "1",
        color: "grey",
    },
    {
        number: "2",
        color: "yellow",
    },
    {
        number: "3",
        color: "black",
    },
    {
        number: "4",
        color: "red",
    },
    {
        number: "5",
        color: "blue",
    },
    {
        number: "6",
        color: "green",
    }
];


function ImgAdd() {

    return (
        <Splide
        options={
            {
                perPage:3,
                type:'loop',
                height:'10rem',
                direction:'ttb',
            }
        }>
            <SplideSlide>
            <div className="gallery-img">
            {Images.map((Image) => (
                <div className="gallery-img">
                <p className="gallery-img-text" key={Image.number}> Image{Image.number}</p>
                </div>
                
                

            ))}
            </div>
            </SplideSlide>
    </Splide>
    );
}


export default ImgAdd