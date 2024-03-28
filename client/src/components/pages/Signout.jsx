import { useState } from 'react';
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { Auth } from '../../utils/auth';

Logout() {
    localStorage.removeItem('jwt');
    setAuthState({ username:'', status: false});
    
}

function Logout() {
    return <Logout />;
}

export default Logout;