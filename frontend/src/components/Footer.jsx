import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="flex flex-col sm:grid sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
      {/* Logo and Description */}
      <section>
        <img src={assets.logo} className="mb-5 w-50" alt="Touchables Logo" />
        <p className="w-full md:w-2/3 text-gray-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit voluptate ex cumque expedita dolor quo explicabo commodi! Tempore accusantium reiciendis fugit quasi, consequuntur asperiores, amet ut ad facere a nesciunt.
        </p>
      </section>
      
      {/* Company Links */}
      <section>
        <p className="text-xl font-medium mb-5">Company</p>
        <ul className="flex flex-col gap-1 text-gray-600">
          <li><a href="#home" className="hover:text-gray-900">Home</a></li>
          <li><a href="#about" className="hover:text-gray-900">About Us</a></li>
          <li><a href="#delivery" className="hover:text-gray-900">Delivery</a></li>
          <li><a href="#privacy" className="hover:text-gray-900">Privacy Policy</a></li>
        </ul>
      </section>
      
      {/* Contact Information */}
      <section>
        <p className="text-xl font-medium mb-5">Get in Touch with Touchables</p>
        <ul className="flex flex-col gap-1 text-gray-600">
          <li><a href="tel:+918942837703" className="hover:text-gray-900">+91-8942837703</a></li>
          <li><a href="mailto:thetouchables078@gmail.com" className="hover:text-gray-900">thetouchables078@gmail.com</a></li>
        </ul>
      </section>
      
      {/* Footer Bottom */}
      <div className="col-span-3">
        <hr className="border-gray-300" />
        <p className="py-5 text-center text-gray-600">
          Copyright {new Date().getFullYear()} @ touchables.com - All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
