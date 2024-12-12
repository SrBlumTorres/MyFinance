
import { Navigate, Outlet } from 'react-router-dom';
import useUserContext from '../hooks/useUserContext';

function PrivateRoute() {

    const { user } = useUserContext();

    if (user) return <Outlet /> 
    return <Navigate to="/users/login"/>

}

export default PrivateRoute