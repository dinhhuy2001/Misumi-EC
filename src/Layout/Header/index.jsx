import './Header.css';

const Header = () => {
    return (
        <>
            <div className="inform__header flex flex-col items-center ">
                <p className="inform__header__title">2024年2月26日(月)にMISUMIサイトがリニューアルしました</p>
                <p className="inform__header__detail">
                    変更内容のお問い合わせは <span className="font-bold">0120-258-226</span> をご利用ください。受付時間
                    9:00～18:00（土曜日・日曜日・祝日は除く）
                </p>
            </div>
        </>
    );
};

export default Header;
