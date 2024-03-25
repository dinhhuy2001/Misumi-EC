import './styles.css';
import { WatchedLink } from '../../Links/WatchedLink';
import WatchedItem from '../../Components/WatchedItem';

const WatchedContainer = () => {
    return (
        <div className="mt-20">
            <h2 className="watched__container__title">最近見た商品</h2>
            <p className="watched__container__note mt-5">通常価格、通常出荷日が表示と異なる場合がございます</p>
            <ul className="watched__item__list flex">
                {WatchedLink.map((item, index) => (
                    <WatchedItem key={index} {...item} />
                ))}
            </ul>
        </div>
    );
};

export default WatchedContainer;
