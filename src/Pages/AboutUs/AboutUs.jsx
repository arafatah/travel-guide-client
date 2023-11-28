import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutUs = () => {
  return (
    <div className="container mx-auto py-8 mb-96">
        <Helmet>
        <title>About Us | TRAVOL</title>
        </Helmet>
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p className="text-gray-600">
        Welcome to TRAVOL, your go-to platform for unforgettable travel experiences. At TRAVOL, we are passionate about connecting travelers with expert tour guides to create memorable journeys.
      </p>
      <p className="text-gray-600 mt-4">
        Our mission is to provide travelers with the opportunity to explore the world with knowledgeable guides who bring destinations to life. Whether you're interested in cultural excursions, adventurous treks, or leisurely cruises, we have a diverse range of packages to suit your interests.
      </p>
      <p className="text-gray-600 mt-4">
        TRAVOL is more than just a travel platform; we're a community of explorers, guides, and enthusiasts. Join us on this exciting journey as we strive to make every trip an enriching and unforgettable experience.
      </p>
      <p className="text-gray-600 mt-4">
        Thank you for choosing TRAVOL. Let's embark on new adventures together!
      </p>
    </div>
  );
};

export default AboutUs;
