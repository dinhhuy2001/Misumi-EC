import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const FooterContactItem = ({ title, link, desc, text }) => {
    return (
        <>
            <p className="footer__contact__title">{title}</p>
            <a href={link} className="footer__contact__link">
                {desc}{' '}
                <span className="footer__contact__icon">
                    <FontAwesomeIcon icon={faAngleRight} />
                </span>
            </a>
            <p className="footer__contact__text">{text}</p>
        </>
    );
};

export default FooterContactItem;
