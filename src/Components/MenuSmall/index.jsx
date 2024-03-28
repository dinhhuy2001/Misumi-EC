import './styles.css';

const MenuSmall = ({ content }) => {
    return (
        <div className="mb-2">
            {content.map((item, index) => (
                <div key={index}>
                    <h4 className="menu--item__title font-bold">{item?.titleSmall}</h4>
                    {item?.links.map((link, key) => (
                        <a href="#" key={key} className="menu--item__link">
                            {link}
                        </a>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default MenuSmall;
