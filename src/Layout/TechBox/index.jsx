import './styles.css';
import TechBoxItem from '../../Components/TechBoxItem';
import { TechBoxLink } from '../../Links/TechBoxLink';
const TechBox = () => {
    return (
        <div className="mt-20 techbox__wrapper">
            {TechBoxLink.map((item, index) => (
                <TechBoxItem key={index} {...item} />
            ))}
        </div>
    );
};

export default TechBox;
