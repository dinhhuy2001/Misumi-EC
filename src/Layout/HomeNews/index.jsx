import './styles.css';
import { News } from '../../Links/News';
import NewsItem from '../../Components/NewsItem';

const HomeNews = () => {
    return (
        <div className="mt-20">
            <div className="news__title__area">
                <h2>
                    <strong>
                        <img
                            src="https://jp.misumi-ec.com/operation/top/img/promo_area/20201126/top_promo_title.png"
                            alt="new news"
                        />
                    </strong>
                </h2>
            </div>
            <div className="news__container">
                <ul className="flex justify-between flex-wrap">
                    {News.map((item, index) => (
                        <NewsItem key={index} {...item} />
                    ))}
                </ul>
                <p className="news__button ">
                    <a href="#">ミスミの進化について詳しくはこちら</a>
                </p>
            </div>
        </div>
    );
};

export default HomeNews;
