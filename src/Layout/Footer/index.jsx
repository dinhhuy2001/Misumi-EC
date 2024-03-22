import './footer.css';
import FooterItem from '../../Components/FooterItem';
import FooterContactItem from '../../Components/FooterContactItem';
import { FooterUsing, FooterAbout } from '../../Links/Footer';

const Footer = () => {
    return (
        <div>
            <footer className="footer--container">
                <div className="footer--content">
                    <div className="footer--upper flex w-full items-stretch">
                        <div className="footer--using flex flex-col">
                            <FooterItem subject={FooterUsing[0].subject} />
                            <ul className="footer--using__content grid grid-cols-3 gap-x-5">
                                {FooterUsing.slice(1).map((item, index) => (
                                    <li key={index} className="footer--content__item">
                                        <a href={item.link}>{item.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="footer--about">
                            <FooterItem subject={FooterAbout[0].subject} />
                            <ul className="footer--about__content grid grid-cols-1 ">
                                {FooterAbout.slice(1).map((item, index) => (
                                    <li key={index} className="footer--content__item">
                                        <a href={item.link}>{item.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="footer--lower">
                        <FooterItem subject="お問い合わせ" />
                        <div className="footer--contact__container flex">
                            <div className="footer--contact__col">
                                <FooterContactItem
                                    title="商品の仕様・技術"
                                    link="https://jp.misumi-ec.com/inquiry?technicalContact=1"
                                    desc="Webお問い合わせフォーム"
                                    text="24時間受付"
                                />
                            </div>
                            <div className="footer--contact__col">
                                <FooterContactItem
                                    title="ご注文・お取り引き"
                                    link="https://jp.misumi-ec.com/inquiry"
                                    desc="https://jp.misumi-ec.com/inquiry"
                                    text="24時間受付"
                                />
                                <div className="footer--contact__info">
                                    <p className="footer__tel">0120-343-066</p>
                                    <p className="footer--contact__text">9:00～18:00（日曜日・年末年始は除く</p>{' '}
                                    <p className="footer--contact__text">
                                        お客様との通話は、サービス品質向上のため一部録音させていただいております。
                                    </p>
                                </div>
                            </div>
                            <div className="footer--contact__col">
                                <FooterContactItem
                                    title="その他お問い合わせ"
                                    link="https://jp.misumi-ec.com/contents/contact/"
                                    desc="お問い合わせ窓口はこちら"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <p className="footer--copyright">Copyright © MISUMI Corporation All Rights Reserved.</p>
                <div className="optimal__button"></div>
            </footer>
        </div>
    );
};

export default Footer;
