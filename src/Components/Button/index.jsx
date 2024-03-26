import './button.css';

const Button = ({ icon, content }) => {
    return (
        <>
            <div className="button">
                {icon && <div className="button__icon">{icon}</div>}
                <div className="button__content">{content}</div>
            </div>
        </>
    );
};

export default Button;
