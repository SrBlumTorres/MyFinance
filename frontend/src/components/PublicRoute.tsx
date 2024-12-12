import { Navigate, Outlet } from 'react-router-dom';
import useUserContext from '../hooks/useUserContext';

function PublicRoute() {

    const { user } = useUserContext();

    if (!user) return <Outlet /> 
    return <Navigate to="/dashboard"/>

}

export default PublicRoute