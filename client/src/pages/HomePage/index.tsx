import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import TextAnimation from 'react-text-animations';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import AuthContext from '../../AuthProvider';
import Logo from '../../CommonComponents/Logo';
import NavBar from '../../CommonComponents/Navbar';
import Footer from '../../CommonComponents/Footer';

let count = 0;
function HomePage() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
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

  const renderHomePageMessages = () => {
    if ((currentIndex === 0 && user.id === -1) || (currentIndex === 0 && user.id === undefined)) {
      return (
        <div className="text-7xl text-slate-800 font-bold">
          <TextAnimation.Push
            target="B&K Fish Mini Market"
            text={['', 'B&K', 'Fish', 'Market', 'B&K Fish Market']}
            animation={{
              duration: 1000,
              delay: 2500,
              timingFunction: 'ease-out',
            }}
            loop={false}
          >
            Welcome to B&K Fish Mini Market
          </TextAnimation.Push>
        </div>
      );
    }
    if (currentIndex === 0 && (user.id !== -1 || user.first_name !== '')) {
      return (
        <div className="text-7xl text-slate-800 font-bold">
          <TextAnimation.Push
            target=":"
            text={['', `${user.first_name}`, `${user.last_name}`, `${user.first_name} ${user.last_name}`]}
            animation={{
              duration: 1000,
              delay: 2000,
              timingFunction: 'ease-out',
            }}
            loop={false}
          >
            Welcome :
          </TextAnimation.Push>
        </div>
      );
    }
    if (currentIndex === 1) {
      return (
        <div className="text-7xl text-slate-800 font-bold w-2/3">
          <p>Get free shipping with discount code iloveseafood</p>
        </div>
      );
    }
    if (currentIndex === 2) {
      return (
        <div className="text-7xl text-slate-800 font-bold w-2/3">
          <p>We also offer fresh cooked seafood</p>
          <button
            className="underline cursor-pointer py-2 px-2 text-6xl"
            type="button"
            onClick={() => navigate('/about')}
          >
            Click here to learn more
          </button>
        </div>
      );
    }
    return '';
  };

  return (
    <div className="h-screen w-screen overflow-hidden">
      <Logo />
      <NavBar />
      <div>
        <img
          src={featuredImages[currentIndex]}
          alt=""
          className="w-screen h-screen bg-center opacity-70"
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
        <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-center text-center w-full z-10">
          {renderHomePageMessages()}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
