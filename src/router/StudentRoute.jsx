import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';
import useGetUser from '../hook/useGetUser';

const StudentRoute = ({ children }) => {
	const { role } = useGetUser();
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();
	
	if (user && role === 'student') {
		return children;
	} else {
        // Swal.fire('You are not enroll as a student.');
		return ;
	}
};

export default StudentRoute;
