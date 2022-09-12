import React, { useEffect, useState } from 'react';
// import AuthContext from '../../AuthProvider';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
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

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    startSlider();
  }, []);

  const startSlider = () => {
    setInterval(() => {
      handleNextClick();
    }, 3000);
  };

  return (
    <div className="h-screen w-screen overflow-hidden">
      <Logo />
      <NavBar />
      <div>
        <img
          src={featuredImages[currentIndex]}
          alt=""
          className="w-screen h-screen bg-center opacity-75"
          style={{ top: '100px' }}
        />
        <div
          className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3 text-8xl z-50"
        >
          <button
            type="button"
            className="opacity-50 hover:opacity-100"
            onClick={handlePrevClick}
          >
            <IoIosArrowBack />

          </button>
          <button
            type="button"
            className="opacity-50 hover:opacity-100"
            onClick={handleNextClick}
          >
            <IoIosArrowForward />

          </button>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-center w-full z-10">
          <p className="text-8xl text-slate-800 font-bold">hi cksdbcisu</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
