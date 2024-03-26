import Layout from '../../Layout';
import Slider1 from '../../Layout/Slider1';
import Inform from '../../Layout/Inform';
import HomeCategories from '../../Layout/HomeCategories';
import Banner from '../../Layout/Banner';
import Services from '../../Layout/Services';
import HomeNews from '../../Layout/HomeNews';
import TechBox from '../../Layout/TechBox';
import InformBox from '../../Layout/InformBox';
import WatchedContainer from '../../Layout/WatchedContainer';
import RecommendBox from '../../Layout/RecommendBox';

const Home = () => {
    return (
        <div>
            <Layout>
                <div id="home__main">
                    <Inform />
                    <Slider1 />
                    <HomeCategories />
                    <Banner />
                    <Services />
                    <HomeNews />
                    <TechBox />
                    <InformBox />
                    <WatchedContainer />
                    <RecommendBox />
                </div>
            </Layout>
        </div>
    );
};

export default Home;
