import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';

const Images = [
    {
        number: "1",
        css: {  color: 'blue' }
    },
    {
        number: "2",
        css: { color: 'red' }
    },
    {
        number: "3",
        css: { color: 'green' }
    },
    {
        number: "4",
        css: { color: 'yellow' }
    },
    {
        number: "5",
        css: { color: 'pink' }
    },
    {
        number: "6",
        css: { color: 'purple' }
    }
];


function Gallerybackground() {

    return (
        <Splide tag="section"
            options={
                {
                    perPage: 1,
                    type: 'loop',
                    perMove: 1,
                    autoplay: true,
                }
                
            } >
            {Images.map((Image) => (
                <SplideSlide>
                    <p style={Image.css} className="gallery-background-img-text" key={Image.number} > Image{Image.number}</p>

                </SplideSlide>
            ))}
        </Splide>
    );
}


export default Gallerybackground