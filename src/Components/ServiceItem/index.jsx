import './styles.css';

const ServiceItem = ({ imgSrc, title, content }) => {
    return (
        <a className="service__item flex">
            <img src={imgSrc} alt="service" />
            <div className="service__item__content">
                <h5 className="font-bold">{title}</h5>
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
