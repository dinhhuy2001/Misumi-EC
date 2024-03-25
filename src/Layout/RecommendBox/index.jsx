import './styles.css';
import WatchedItem from '../../Components/WatchedItem';
import { RecommendItems } from '../../Links/RecommendItems';
import { WatchedLink } from '../../Links/WatchedLink';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const RecommendBox = () => {
    const NextArrow = (props) => {
        const { onClick } = props;

        return (
            <div className="arrow--new__container right recommend__slider__button--next">
                <button onClick={onClick} className="arrow__new">
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        );
    };

    const PrevArrow = (props) => {
        const { onClick } = props;

        return (
            <div className="arrow--new__container left recommend__slider__button--prev">
                <button onClick={onClick} className="arrow__new">
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
            </div>
        );
    };
    const settings = {
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
        // infinite: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    return (
        <div className="mt-20" style={{ marginBottom: '-140px' }}>
            <h2 className="watched__container__title">最近見た商品からのおすすめ商品</h2>
            <p className="watched__container__note mt-5">通常価格、通常出荷日が表示と異なる場合がございます</p>
            <div className="view__history__item__container flex w-full">
                <div className="view__history__item">
                    <h3 className="view__history__item__title bold">閲覧履歴の商品</h3>
                    <WatchedItem {...WatchedLink[0]} />
                </div>
                <ul className="recommend__slider slider">
                    <Slider {...settings}>
                        {RecommendItems.map((item, index) => (
                            <WatchedItem key={index} {...item} />
                        ))}
                    </Slider>
                </ul>
            </div>
        </div>
    );
};

export default RecommendBox;
