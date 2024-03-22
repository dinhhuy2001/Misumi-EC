import Layout from '../../Layout';
import Slider1 from '../../Layout/Slider1';
import Inform from '../../Layout/Inform';
import HomeCategories from '../../Layout/HomeCategories';
import Banner from '../../Layout/Banner';
import Services from '../../Layout/Services';
import HomeNews from '../../Layout/HomeNews';
import TechBox from '../../Layout/TechBox';
import InformBox from '../../Layout/InformBox';

const Home = () => {
    return (
        <div>
            <Layout>
                <div
                    className="home--main"
                    style={{ width: '100%', maxWidth: '1420px', margin: '205px auto', padding: '0 10px' }}
                >
                    <Inform />
                    <Slider1 />
                    <HomeCategories />
                    <Banner />
                    <Services />
                    <HomeNews />
                    <TechBox />
                    <InformBox />
                </div>
            </Layout>
        </div>
    );
};

export default Home;
