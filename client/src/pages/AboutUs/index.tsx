import React from 'react';
import Logo from '../../CommonComponents/Logo';
import NavBar from '../../CommonComponents/Navbar';
import ContactUs from './ContactUs';
import GoogleMaps from './GoogleMaps';
import Footer from '../../CommonComponents/Footer';

function AboutUs() {
  return (
    <div className="mb-6 text-center">
      <Logo />
      <NavBar />
      <h1 className="text-5xl mt-5">About us</h1>
      <div className="w-1/2 mx-auto text-2xl mt-5">
        Located between Kosciuszko street and Broadway, B & K Fish Mini Market has been serving the local community for over 10 years. B & K provides customers with a seafood experience like no other.
      </div>
      <div className="w-1/2 mx-auto text-2xl mb-5">
        With daily shipments and affordable prices, customers can choose to bring home raw seafood or let one of our skilled chefs prepare steamed and fried seafoods. Starting last summer, customers can also order online through Uber Eats, GrubHub, or DoorDash
      </div>
      <div className="flex justify-center">
        <a
          href="https://www.ubereats.com/store/b%26k-fish-mini-market/YopIr9DxXYaUZ9ghvaHx1w"
          className="w-1/6 h-1/2 mt-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/uberEats.jpeg" alt="uber eats logo" />
        </a>
        <a
          href="https://www.doordash.com/store/b-and-k-fish-mini-market-brooklyn-2875402/"
          className="w-1/12 h-1/2 ml-1 mt-5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/doorDash.jpeg" alt="door dash logo" />
        </a>
        <a
          href="https://www.seamless.com/menu/bk-fish-mini-market-1161-broadway-brooklyn/3123144"
          className="w-1/6 h-1/2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/grubhub.jpeg" alt="grubhub logo" />
        </a>
      </div>
      <div className="flex">
        <ContactUs />
        <GoogleMaps />
      </div>
      <div />
      <Footer />
    </div>
  );
}

export default AboutUs;
