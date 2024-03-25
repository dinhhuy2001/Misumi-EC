import './inform.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

const Inform = () => {
    return (
        <div>
            <ul className="inform--box">
                <li className="inform--message flex items-center ">
                    <div className="inform--icon">
                        <FontAwesomeIcon icon={faCircleExclamation} />
                    </div>
                    <div className="inform--message__content">
                        <span>お問い合わせ混雑時は0120-343-603への電話、または</span>
                        <a href="mailto:tech-support.personal@misumi.co.jp">tech-support.personal@misumi.co.jp</a>
                        <span>へのメール（受付時間9:00～18:00 ※土曜日・日曜日・祝日は除く）をご利用ください。</span>
                    </div>
                </li>
                {/* <li></li> */}
            </ul>
        </div>
    );
};

export default Inform;
