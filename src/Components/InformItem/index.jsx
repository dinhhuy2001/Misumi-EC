import './styles.css';
import InformLinkItem from '../InformLinkItem';
const InformItem = ({ title, listTitle, linkContent }) => {
    return (
        <div className="inform__item__container">
            <div className="inform__item__title flex justify-between items-center">
                <h3 className="font-bold">{title}</h3>
                <a href="#">{listTitle}</a>
            </div>
            <ul className="inform__item__content">
                {linkContent.map((link, index) => (
                    <InformLinkItem key={index} {...link} />
                ))}
            </ul>
        </div>
    );
};

export default InformItem;
