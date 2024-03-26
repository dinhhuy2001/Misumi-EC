import { Logo } from '../../Links/Logo';
import './Navbar.css';
import Button from '../../Components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSortDown,
    faCircleUser,
    faCartShopping,
    faCircleExclamation,
    faFileLines,
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <>
            <div>
                <div id="navbar">
                    <div className="navbar__wrapper flex justify-between">
                        <div className="navbar--left flex flex-col w-full justify-between">
                            <div className="navbar--left--above flex">
                                <div className="navbar__logo">
                                    <img src={Logo.src} alt={Logo.alt} />
                                </div>
                                <div className="navbar__inform">
                                    <p className="navbar__inform--1">
                                        <span className="red">17時まで</span>
                                        のご注文で最短
                                        <span className="red">当日出荷</span>
                                        可能
                                    </p>
                                    <p className="navbar__inform--2">
                                        <span className="cover">当日出荷対象商品</span>
                                        <span className="red">135万点</span>
                                        拡大中！
                                    </p>
                                </div>
                            </div>
                            <div className="navbar--left--below flex">
                                <div className="navbar__menu">
                                    <button className="navbar__button">
                                        カテゴリ・メーカーから探す
                                        <span>
                                            <FontAwesomeIcon icon={faSortDown} />
                                        </span>
                                    </button>
                                </div>
                                <form className="navbar__search flex w-full relative">
                                    <input
                                        type="text"
                                        placeholder="キーワード・型番を入力してください"
                                        className="navbar__search__input"
                                        maxLength={200}
                                    />
                                    <div className="search__box__button">
                                        <Button content={'検索'} />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="navbar--right table">
                            <ul className="flex justify-end">
                                <li className="navbar__login__button">
                                    <Button
                                        icon={<FontAwesomeIcon icon={faCircleUser} />}
                                        content={'ログイン・新規登録'}
                                    />
                                </li>
                            </ul>
                            <ul className="navbar--right--below flex  items-center">
                                <li>
                                    <div className="navbar__cart__icon text-center">
                                        <FontAwesomeIcon icon={faCartShopping} />
                                        <p className="navbar__cart__content">カート</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="navbar__cart__icon text-center">
                                        <FontAwesomeIcon icon={faCircleExclamation} />
                                        <p className="navbar__cart__content">お問い合わせ</p>
                                    </div>
                                </li>
                                <li className="navbar__login__button yellow">
                                    <Button icon={<FontAwesomeIcon icon={faFileLines} />} content={'見積・注文'} />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
