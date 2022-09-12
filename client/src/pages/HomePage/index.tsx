import React from 'react';
// import AuthContext from '../../AuthProvider';
import Logo from '../../CommonComponents/Logo';
import NavBar from '../../CommonComponents/Navbar';
import Footer from '../../CommonComponents/Footer';

function HomePage() {
  // const { user } = useContext(AuthContext);
  const featuredImages = ['/fishCarousel1.jpeg', '/fishCarousel2.jpeg', '/fishCarousel3.jpeg'];

  return (
    <div className="h-screen w-screen overflow-hidden">
      <Logo />
      <NavBar />
      <div>
        <img
          src={featuredImages[0]}
          alt=""
          className="w-screen h-screen bg-center"
          style={{ top: '100px' }}
        />
        <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
          <button type="button">Previous</button>
          <button type="button">Next</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
