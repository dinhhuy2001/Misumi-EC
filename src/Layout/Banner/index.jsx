import './styles.css';
import { Banners } from '../../Links/Banners';

const Banner = () => {
    return (
        <>
            <div className="banner__wrapper">
                <div className="columns-4 gap-x-7">
                    <a href="#" className="banner__item">
                        <img src={Banners[0].src} alt={Banners[0].alt} />
                    </a>
                    <a href="#" className="banner__item">
                        <img src={Banners[1].src} alt={Banners[1].alt} />
                    </a>
                    <a href="#" className="banner__item">
                        <div className="banner3__content">
                            <p className="font-bold">技術情報</p>
                            <p>製造現場の設計、加工、保全技術から工具豆知識まで</p>
                        </div>
                    </a>
                    <a href="#" className="banner__item">
                        <img src={Banners[2].src} alt={Banners[2].alt} />
                    </a>
                </div>
            </div>
        </>
    );
};

export default Banner;
