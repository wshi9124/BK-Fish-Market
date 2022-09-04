import React, { useContext } from 'react';
import AuthContext from '../../AuthProvider';
import Logo from '../../CommonComponents/Logo';
import NavBar from '../../CommonComponents/Navbar';
import Footer from '../../CommonComponents/Footer';

function HomePage() {
  const { user } = useContext(AuthContext);
  return (
    <div className="mb-6">
      <Logo />
      <NavBar />
      {user.first_name}
      <Footer />
    </div>
  );
}

export default HomePage;
