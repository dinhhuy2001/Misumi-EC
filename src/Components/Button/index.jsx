import './button.css';

const Button = ({ icon, content }) => {
    return (
        <>
            <div className="button">
                {icon && <div className="button--icon">{icon}</div>}
                <div className="button--content">{content}</div>
            </div>
        </>
    );
};

export default Button;
