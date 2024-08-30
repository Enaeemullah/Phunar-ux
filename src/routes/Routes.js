import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import SignIn from 'pages/sign-in/SignIn';
import SignUp from 'pages/sign-up/SignUp';

const AppRoutes = () => (
  <Routes>
    <Route path='/signin' element={<SignIn />} />
    <Route path='/signup' element={<SignUp />} />
    <Route path='/' element={<Navigate to='/signin' />} />
  </Routes>
);

export default AppRoutes;
