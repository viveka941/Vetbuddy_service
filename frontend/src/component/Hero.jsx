import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AnimatedDonation from "./AnimatedDonation";

const Hero = () => {
  const navigate = useNavigate();
  const [showDonation, setShowDonation] = useState(false);

  const handleDonateClick = () => {
    setShowDonation(true);
  };

  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-12 bg-gradient-to-r from-lime-50 to-white">
      {/* Left Content */}
      <div className="text-center md:text-left max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800">
          Fast, Reliable!<span className="text-lime-500">Veterinary Care</span> <br />
          in Just 30 Minutes
        </h1>
        <p className="text-gray-600 mt-4">
          Get immediate veterinary attention for your pet with our quick 30-minute service. 
          Expert care when you need it most, without the long wait times.
        </p>
        <div className="mt-6 flex flex-col md:flex-row items-center justify-center md:justify-start gap-4">
          <button className="bg-lime-500 hover:bg-lime-600 text-white font-semibold px-6 py-3 rounded-full transition shadow-lg hover:shadow-xl">
            Book Now
          </button>
          <button className="border-2 border-lime-500 text-lime-600 font-semibold px-6 py-3 rounded-full hover:bg-lime-50 transition">
            Learn More
          </button>
        </div>
        <div className="mt-6 flex items-center justify-center md:justify-start gap-2 text-lime-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="font-semibold">30-Minute Service Guarantee</span>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative mt-10 md:mt-0">
        <img
          src="/images/hero-main.webp"
          alt="Veterinary Service"
          className="w-[340px] md:w-[420px] rounded-2xl mx-auto shadow-xl"
        />
        {/* Floating badges */}
        <div className="absolute -top-4 -left-4 bg-white p-3 rounded-full shadow-lg">
          <span className="text-lime-600 font-bold">24/7</span>
        </div>
        <div className="absolute -bottom-4 -right-4 bg-lime-500 text-white p-3 rounded-full shadow-lg">
          <span className="font-bold">30 min</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
