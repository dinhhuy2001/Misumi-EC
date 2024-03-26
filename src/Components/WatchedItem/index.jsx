import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StarRating from '../StarRating';

const WatchedItem = ({ img, brand, name, starNumbers, price, isExportable }) => {
    // Fill starIcons array with full, half, or empty star icons based on rating

    return (
        <li className="watched__item__container">
            <a href="#">
                <div className="watched__item__img">
                    <img src={img} alt="viewed__item" />
                </div>
                <p className="watched__item__brand">{brand}</p>
                <p className="watched__item__name">{name}</p>
                <StarRating rating={starNumbers} />
                <p className="watched__item__price">
                    通常価格(税別): {price}
                    <span>円 -</span>
                </p>
                <p>通常出荷日: </p>
                <p>在庫品1日目</p>
                <div>
                    {isExportable ? <span className="watched__item__exportable">当日出荷可能</span> : <div></div>}
                </div>
            </a>
        </li>
    );
};

export default WatchedItem;
