import './footer.css';
import FooterItem from '../../Components/FooterItem';
import FooterContactItem from '../../Components/FooterContactItem';
import { FooterUsing, FooterAbout } from '../../Links/Footer';

const Footer = () => {
    return (
        <div>
            <footer className="footer__container">
                <div className="footer__content">
                    <div className="footer__upper flex w-full items-stretch">
                        <div className="footer__using flex flex-col">
                            <FooterItem subject={FooterUsing[0].subject} />
                            <ul className="footer__using__content grid grid-cols-3 gap-x-5">
                                {FooterUsing.slice(1).map((item, index) => (
                                    <li key={index} className="footer__content__item">
                                        <a href={item.link}>{item.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="footer__about">
                            <FooterItem subject={FooterAbout[0].subject} />
                            <ul className="footer__about__content grid grid-cols-1 ">
                                {FooterAbout.slice(1).map((item, index) => (
                                    <li key={index} className="footer__content__item">
                                        <a href={item.link}>{item.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="footer__lower">
                        <FooterItem subject="お問い合わせ" />
                        <div className="footer__contact__container flex">
                            <div className="footer__contact__col">
                                <FooterContactItem
                                    title="商品の仕様・技術"
                                    link="https://jp.misumi-ec.com/inquiry?technicalContact=1"
                                    desc="Webお問い合わせフォーム"
                                    text="24時間受付"
                                />
                            </div>
                            <div className="footer__contact__col">
                                <FooterContactItem
                                    title="ご注文・お取り引き"
                                    link="https://jp.misumi-ec.com/inquiry"
                                    desc="Webお問い合わせフォーム"
                                    text="24時間受付"
                                />
                                <div className="footer__contact__info">
                                    <p className="footer__tel">0120-343-066</p>
                                    <p className="footer__contact__text">9:00～18:00（日曜日・年末年始は除く</p>{' '}
                                    <p className="footer__contact__text">
                                        お客様との通話は、サービス品質向上のため一部録音させていただいております。
                                    </p>
                                </div>
                            </div>
                            <div className="footer__contact__col">
                                <FooterContactItem
                                    title="その他お問い合わせ"
                                    link="https://jp.misumi-ec.com/contents/contact/"
                                    desc="お問い合わせ窓口はこちら"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <p className="footer__copyright">Copyright © MISUMI Corporation All Rights Reserved.</p>
                <div className="optimal__button flex justify-center items-center">
                    <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABORJREFUeNrcWT1oU1EUvnlKLahYcfAH1BQFRdBULCIqmE46WG2xizqkGYSKg3ZykrY4OaUOQsAhzaAulcafwU5NQcWh0sSCqChNF/+wqFgHXfR+972b3t7cv5emVj1wk/fy7j33yznnnr8XIfOheLqBfrbREaOjCb8YZufpKNBRpCNH8l1fqt02UiVYAE0EgKulHB1ZCj63sKB9sCk6oqR2VKKjOwz4iCNYgMxY1D9fgvkkKfiSbaLnALiTfo4vMGAS8B8P9jPSEgvg3sAc6smfoXp2TqJHI6R0Px/ePOJpmEMnWTwaoKaSdAftS7jHlXt03UrSdjBKYlvWsGs+Su+/lUfxzTTJPSyx6xDUR4H32kH7NpVx4Qig50/sJPGmDe6nrfCWXL09wf6AI+FwDuhB+14Ch67BJtnMxXgFWAAaLb4jX2Z+kMLradK0dQ1pWLGMHIqtV85NXsm7SB5BaLfoVWTQIzYvASAjqWMUTJ3PceYnk1z/4DN2rSPMv9Cxi2lGXNvSfZf9Qas7zHe1VIL2A8dQGMBQcfLKiBGsCnzmYgszrZDA23kAEv10ymYSImCotv3ScCjAHCTWdV97XP4TIl8Dpeb6aV/KXaYVQ5cPk+2bfFPHhum7z+flz548/0i+fv9JjuzdSOrrlpB9O9aS7PAro5Ko/y5S//2CSzphjDH0EPGDBJPoH5yoiSMGH+5FxD0MlPBt2k8vP9ukDBuEahtP3lCaBNTbk2hm82BK5WyIegcA68uOaddN3jrNvjEPpmOh1Z4tvQQzfmjgJVQb4zk2vtCxcw5gfhbwO55zPrKNgy/n42DbbV6QwBsCSONsXH3wUgkYmrBthudcYxXxWuAr7qehmBdUHPoZNDSD4JLkQMDdVxjCfPkPgi93ebKmVJ7XcwkmPILJBBt2UKfS9mUqvP7EvhE9bSms57oZ3JPKNKoh1bqpDzPO651Br1pepww43HT6sk/LKrbdq0xAxX/eoE1SvfOoRHoHxphbE+951JPvw/IPBTp1bn/Z4UM6Oud//ECUPUMyxO8BoiexR3mvCl5c+rjGvubCNp7+pXNPMki4JuQcnCZvnXI57ZXlN/UWjSdvCh4lTjqPbJMO5jRLpFRxwbNJWOezeUivquEhrVP5ZngtnTv1gtJ9DiGR17krUSK60GzL8rjtg8BP5zZxFlS5tRc0SyRJTGo3hX2KAJBPhyE5/xb5OeIoAPSoShqqkK3KD3iSY5M4z6NF0xDzGlVo1/AsekFPzVU1ZZXKNorsD6mmHOpxj9/xXLZlmY/j/rlIUAQMqbK9z/eSSnvDyd59ZlBr91hXziNbM1otjF/vKKcJslawTtm0zHe1c++R1alIl4/oXJ1oWgYVs/UqwKZ9OU4ftF8wVugjO/xSCQrJk6nK4GWTqXzCevBRtRBU+zJ8QWEbqhoPQyOpVhoc7jnNQ29EZ27matz/IV8r0C6A4TkgcV65WPoeOV1ETAYdnQUngEXEg4kYbJh3mJI16+XZ+iTiYeWtMt5pQvJkyi/ce3lVdk1V1NvZPCerAzBUJ5AwL2aRrlbTNV2qtiA6MZ7eXMv+NCSNnAZgYRIOOcuACrBe0jWUeJXUpwM82xbTJr738yR6dCoofv/EKwwcurMUcL+5CHA66n/X263/+D2iGvw/8sa2EvyivBv/LcAA4+x85nCtO/cAAAAASUVORK5CYII="
                        alt=""
                    />
                </div>
            </footer>
        </div>
    );
};

export default Footer;
