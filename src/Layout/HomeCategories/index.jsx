import { Categories } from '../../Links/Categories';
import './styles.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const HomeCategories = () => {
    const NextArrow = (props) => {
        const { onClick } = props;

        return (
            <div className="arrow--new__container right">
                <button onClick={onClick} className="arrow--new">
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        );
    };

    const PrevArrow = (props) => {
        const { onClick } = props;

        return (
            <div className="arrow--new__container left">
                <button onClick={onClick} className="arrow--new">
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
            </div>
        );
    };

    const settings = {
        className: 'center',
        centerMode: true,
        infinite: true,
        centerPadding: '15px',
        slidesToShow: 1,
        speed: 300,
        rows: 2,
        slidesPerRow: 5,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    return (
        <>
            <div className="home__categories__container flex">
                <div className="home__categories--left">
                    <div className="categories--left__wrapper">
                        <h2 className="categories--left__title">おすすめカテゴリ</h2>
                        <div className="categories--left__slider slider">
                            <Slider {...settings}>
                                {Categories.map((category, index) => (
                                    <li key={index} className="left__slider__list">
                                        <a href="#" className="flex flex-col">
                                            <div className="categories--left__slider__img">
                                                <img src={category.src} alt={category.alt} />
                                            </div>
                                            <p className="categories--left__slider__text text-center mt-2">
                                                {category.title}
                                            </p>
                                        </a>
                                    </li>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
                <div className="home__categories__right">
                    <div className="home__register__form text-center">
                        <h2 className="home__register__title font-bold">初めての方へ</h2>
                        <div className="user__register__panel mt-4 w-full">
                            <a
                                href="https://jp.misumi-ec.com/customer/new"
                                className="register__panel__button flex items-center justify-center button"
                            >
                                会員登録（無料）
                            </a>
                            <p className="register__panel__appeal font-bold">
                                17時までのご注文で
                                <span className="red">最短当日出荷</span>
                            </p>
                            <a href="https://jp.misumi-ec.com/contents/regist/" className="register__panel__guild">
                                <p className="panel__guild__content">会員登録後にできること</p>
                                <p>オンライン見積・My部品表・CADデータダウンロード等</p>
                            </a>
                        </div>
                    </div>
                    <div className="home__login__form text-center">
                        <h2 className="categories--left__title">既に会員の方</h2>
                        <div className="mt-4 w-full">
                            <button className="home__login__button button">ログイン</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeCategories;
