import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { UserLogin } from './pages/Userlogin';
import { UserSignup } from './pages/Usersignup';
import { CaptainLogin } from './pages/Captainlogin';
import { CaptainSignup } from './pages/Captainsignup';
import UserHome from './pages/Userhome';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/userlogin" element={<UserLogin />} />
      <Route path="/usersignup" element={<UserSignup />} />
      <Route path="/captainlogin" element={<CaptainLogin />} />
      <Route path="/captainsignup" element={<CaptainSignup />} />
      <Route path='/userhome' element={<UserHome/>}/>
    </Routes>
  );
}

export default App;