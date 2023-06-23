import React from 'react'
import { Navigate } from 'react-router-dom';

export default function RequiredAuth({children}) {

    const currentuser = localStorage.getItem("token");

    return currentuser? children : <Navigate to="/login" replace/> 
 
}
