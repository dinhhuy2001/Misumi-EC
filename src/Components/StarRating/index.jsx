import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarHalfStroke, faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as whiteStar } from '@fortawesome/free-regular-svg-icons';
const StarRating = ({ rating }) => {
    const starIcons = [];

    // Fill starIcons array with full, half, or empty star icons based on rating
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            starIcons.push(<FontAwesomeIcon icon={faStar} />);
        } else if (i - 0.5 == rating) {
            starIcons.push(<FontAwesomeIcon icon={faStarHalfStroke} />);
        } else {
            starIcons.push(<FontAwesomeIcon icon={whiteStar} />);
        }
    }

    return <div className="star__container">{starIcons}</div>;
};

export default StarRating;
