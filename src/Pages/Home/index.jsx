import Header from '../../Layout/Header';
import Layout from '../../Layout';
import Slider1 from '../../Layout/Slider1';
import Inform from '../../Layout/Inform';
import HomeCategories from '../../Layout/HomeCategories';
import Banner from '../../Layout/Banner';
import Services from '../../Layout/Services';

const Home = () => {
    return (
        <div>
            <Header />
            <Layout>
                <div
                    className="home--main"
                    style={{ width: '100%', maxWidth: '1420px', margin: '24px auto', padding: '0 10px' }}
                >
                    <Inform />
                    <Slider1 />
                    <HomeCategories />
                    <Banner />
                    <Services />
                </div>
            </Layout>
        </div>
    );
};

export default Home;