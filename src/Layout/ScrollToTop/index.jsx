import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTop = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scrolling behavior
        });
    };
    return (
        <a className="scroll__container flex justify-center items-center" onClick={scrollToTop}>
            <FontAwesomeIcon icon={faCaretUp} />
        </a>
    );
};

export default ScrollToTop;
