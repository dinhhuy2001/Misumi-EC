import Home from './Pages/Home';
import Login from './Pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './Layout/PrivateRoute';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<PrivateRoute />}>
                        <Route exact path="/" element={<Home />} />
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
