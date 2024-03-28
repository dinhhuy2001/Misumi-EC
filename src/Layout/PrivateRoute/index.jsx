import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../AuthContext';

const PrivateRoute = () => {
    const { isLoggedIn } = useContext(AuthContext);

    return isLoggedIn === true ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoute;
