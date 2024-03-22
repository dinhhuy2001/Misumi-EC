import Navbar from './Navbar';
import Footer from './Footer';
import Content from './Content';

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <Content>{children}</Content>
            <Footer />
        </div>
    );
};

export default Layout;
