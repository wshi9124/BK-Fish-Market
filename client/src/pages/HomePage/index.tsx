import React, { useState, useEffect } from 'react';
// import AuthContext from '../../AuthProvider';
import Logo from '../../CommonComponents/Logo';
import NavBar from '../../CommonComponents/Navbar';
import Footer from '../../CommonComponents/Footer';

let count = 0;
function HomePage() {
  // const { user } = useContext(AuthContext);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const featuredImages = ['/fishCarousel1.jpeg', '/fishCarousel2.jpeg', '/fishCarousel3.jpeg'];

  const handlePrevClick = () => {
    const productsLength = featuredImages.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
  };

  const handleNextClick = () => {
    count = (count + 1) % featuredImages.length;
    setCurrentIndex(count);
  };

  const startSlider = () => {
    setInterval(() => {
      handleNextClick();
    }, 6000);
  };

  useEffect(() => {
    startSlider();
  }, []);

  return (
    <div className="h-screen w-screen overflow-hidden">
      <Logo />
      <NavBar />
      <div>
        <img
          src={featuredImages[currentIndex]}
          alt=""
          className="w-screen h-screen bg-center opacity-80"
          style={{ top: '100px' }}
        />
        <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
          <button
            type="button"
            onClick={handlePrevClick}
          >
            Previous

          </button>
          <button
            type="button"
            onClick={handleNextClick}
          >
            Next

          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
