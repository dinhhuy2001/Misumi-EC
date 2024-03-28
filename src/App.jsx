import Home from './Pages/Home';
import Login from './Pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    let token = sessionStorage.getItem('login');
    setTimeout(function () {
        sessionStorage.clear();
    }, 10 * 60 * 1000);
    return (
        <>
            <Router>
                <Routes>
                    {token === null ? (
                        <Route exact path="/" element={<Login />} />
                    ) : (
                        <Route exact path="/" element={<Home />} />
                    )}
                </Routes>
            </Router>
        </>
    );
}

export default App;
