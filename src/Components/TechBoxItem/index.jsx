import './styles.css';

const TechBoxItem = ({ title, links }) => {
    return (
        <div style={{ flex: '1' }}>
            <h3 className="techbox__title bold">{title}</h3>
            <div className="techbox__item__container">
                <ul className="techbox__item__box">
                    {links.map((item, index) => (
                        <a key={index} href="#">
                            {item}
                        </a>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TechBoxItem;
