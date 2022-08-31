import React from 'react';
import Logo from '../../CommonComponents/Logo';
import NavBar from '../../CommonComponents/Navbar';
import Footer from '../../CommonComponents/Footer';

function Login() {
  return (
    <div className="mb-6">
      <Logo />
      <NavBar />
      <div className="flex">
        <div className="w-full">
          <img
            src="seafoodLogin.jpeg"
            alt="seafood login pic"
          />
        </div>
        <div className="w-1/2" />
      </div>
      <Footer />
    </div>
  );
}

export default Login;
