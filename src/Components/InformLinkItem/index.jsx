import './styles.css';

const InformLinkItem = ({ time, content }) => {
    return (
        <li className="inform__link__item">
            <dl>
                <dt>{time}</dt>
                <dd>{content}</dd>
            </dl>
        </li>
    );
};

export default InformLinkItem;
