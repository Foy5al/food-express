import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import LoadingSpinner from '../Common/LoadingSpinner/LoadingSpinner';

const PrivetRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    const location = useLocation();

    if (isLoading) {
        return (<LoadingSpinner></LoadingSpinner>);
    }
    if (!user.email) {
        return <Navigate to="/login" state={{ from: location }} replace />

    }
    else
        return children;
};

export default PrivetRoute;