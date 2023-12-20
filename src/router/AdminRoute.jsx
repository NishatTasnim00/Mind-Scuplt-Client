import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';
import useGetUser from '../hook/useGetUser';

const AdminRoute = ({ children }) => {
	const { role } = useGetUser();
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();
	
	if (user && role === 'admin') {
		return children;
	} else {
        // Swal.fire('You are not enroll as a student.');
		return ;
	}
};

export default AdminRoute;
