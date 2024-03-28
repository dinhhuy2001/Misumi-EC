import './styles.css';

const MenuBig = ({ title, children }) => {
    return (
        <div className="menu--mega mb-4">
            <h3 className="menu--mega__title font-bold">{title}</h3>
            {children}
        </div>
    );
};

export default MenuBig;
