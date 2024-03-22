import { Sliders } from '../../Links/Sliders';
import './Slider1.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Slider1 = () => {
    const NextArrow = (props) => {
        const { onClick } = props;

        return (
            <button onClick={onClick} className="right--arrow">
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        );
    };

    const PrevArrow = (props) => {
        const { onClick } = props;

        return (
            <button onClick={onClick} className="left--arrow">
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
        );
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        className: 'center',
        centerMode: true,
        centerPadding: '140px',
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        pauseOnHover: true,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        appendDots: (dots) => (
            <div>
                <ul className="custom-dots"> {dots} </ul>
            </div>
        ),
    };

    return (
        <div className="slider">
            <Slider {...settings}>
                {Sliders.map((slider, index) => (
                    <div key={index}>
                        <img src={slider.src} alt={slider.alt} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Slider1;
