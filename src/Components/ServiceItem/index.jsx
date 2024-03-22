import './styles.css';

const ServiceItem = ({ imgSrc, title, content }) => {
    return (
        <a className="service--item flex">
            <img src={imgSrc} alt="service" />
            <div className="service--item__content">
                <h5 className="bold">{title}</h5>
                <ul>
                    {content.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                </ul>
            </div>
        </a>
    );
};

export default ServiceItem;
