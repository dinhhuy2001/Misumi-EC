import './styles.css';

const NewsItem = ({ src, title, time, linkContent, alt, newNews }) => {
    return (
        <li className="news__item">
            <dl>
                <dt className="inline-flex justify-center items-center news__img__container">
                    <div className="news__img">
                        <img src={src} alt={alt} />
                    </div>
                    <div className="news__title text-center font-bold">{title}</div>
                </dt>
                <dd style={{ fontSize: '12px' }}>
                    <div className="flex gap-2 relative">
                        <span className="news__time">{time}</span>
                        {newNews && <strong className="news--new flex items-center">NEW</strong>}
                    </div>
                    <span className="news__link">
                        <a href="#">{linkContent}</a>
                    </span>
                </dd>
            </dl>
        </li>
    );
};

export default NewsItem;
