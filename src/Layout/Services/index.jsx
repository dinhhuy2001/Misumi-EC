import './styles.css';
import { ServicesContent } from '../../Links/ServicesContent';
import ServiceItem from '../../Components/ServiceItem';
const Services = () => {
    return (
        <section className="home--banner__container flex flex-col mt-20 w-full">
            <div className="home--banner__header flex justify-between items-center mb-4">
                <h3 className="home--banner__title bold">商品選定・業務支援サービス</h3>
                <a href="#" className="home--banner__link">
                    業務支援サービス一覧
                </a>
            </div>
            <ul className="home--banner__content inline-flex flex-wrap">
                {ServicesContent.map((service, index) => (
                    <ServiceItem key={index} {...service} />
                ))}
            </ul>
        </section>
    );
};

export default Services;
