import Navbar from './Navbar';
import Footer from './Footer';
import Content from './Content';
import Header from './Header';

const Layout = ({ children }) => {
    return (
        <div>
            <div id="header">
                <Header />
                <Navbar />
            </div>
            <Content>{children}</Content>
            <Footer />
        </div>
    );
};

export default Layout;
