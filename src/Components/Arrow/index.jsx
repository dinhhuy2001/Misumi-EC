import './arrow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const NextArrow = (props) => {
    return (
        <button onClick={() => props.ref?.current?.slickNext()}>
            <FontAwesomeIcon icon={faChevronRight} />
        </button>
    );
};

const PrevArrow = (props) => {
    return (
        <button onClick={() => props.ref?.current?.slickPrev()}>
            <FontAwesomeIcon icon={faChevronLeft} />
        </button>
    );
};
export { NextArrow, PrevArrow };
