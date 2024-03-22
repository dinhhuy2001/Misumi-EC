import './content.css';

const Content = ({ children }) => {
    return (
        <div>
            <div className="content--main">{children}</div>
        </div>
    );
};

export default Content;
