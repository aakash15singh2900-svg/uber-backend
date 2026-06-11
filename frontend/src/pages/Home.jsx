import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaMapMarkerAlt, FaClock, FaLock } from "react-icons/fa";
import heroImage from "../assets/uber-bg.png.png";

export const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-neutral-900 to-neutral-800 overflow-hidden">

      {/* Mobile Layout */}
      <div
        className="lg:hidden relative min-h-screen bg-cover bg-center flex flex-col"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>

        <div className="relative z-10 flex-1 flex flex-col justify-between p-6 pt-10">

          {/* Top Content */}
          <div>
            <div className="mb-8">
              <h1 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-4xl font-bold">
                Uber
              </h1>
            </div>

            <h2 className="text-white text-4xl font-bold leading-tight mb-4">
              Your journey
              <br />
              starts here
            </h2>

            <p className="text-neutral-300 text-lg leading-relaxed">
              Experience safe, reliable, and affordable rides anytime, anywhere.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-3 mb-8">
            <div className="flex gap-3 items-center">
              <FaClock className="text-cyan-400" size={18} />
              <span className="text-neutral-300 text-sm">Instant bookings</span>
            </div>
            <div className="flex gap-3 items-center">
              <FaLock className="text-cyan-400" size={18} />
              <span className="text-neutral-300 text-sm">Safe & secure</span>
            </div>
          </div>

          {/* Bottom Button */}
          <Link
            to="/userlogin"
            className="btn-primary w-full flex items-center justify-center gap-2"
          >
            Get Started <FaArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:grid grid-cols-2 min-h-screen">

        {/* Left Side */}
        <div className="flex items-center justify-center px-12 xl:px-20 py-20">
          <div className="max-w-md">
            <div className="mb-12">
              <h1 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-5xl font-bold">
                Uber
              </h1>
            </div>

            <h2 className="text-white text-6xl xl:text-7xl font-bold leading-[1.1] mb-6">
              Your Journey
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Starts Here</span>
            </h2>

            <p className="text-neutral-400 text-xl leading-relaxed mb-12">
              Experience safe, reliable, and affordable rides anytime, anywhere. Built with your comfort in mind.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-12">
              <div className="flex gap-3 items-start">
                <FaMapMarkerAlt className="text-cyan-400 mt-1" size={20} />
                <div>
                  <p className="text-white font-semibold">Instant Bookings</p>
                  <p className="text-neutral-400 text-sm">Real-time availability</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <FaLock className="text-cyan-400 mt-1" size={20} />
                <div>
                  <p className="text-white font-semibold">Safe & Secure</p>
                  <p className="text-neutral-400 text-sm">Verified drivers & routes</p>
                </div>
              </div>
            </div>

            <Link
              to="/userlogin"
              className="btn-primary inline-flex items-center gap-2 text-lg"
            >
              Get Started <FaArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-bl from-cyan-500/10 to-transparent"></div>
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <img
              src={heroImage}
              alt="Uber"
              className="w-[90%] h-auto object-contain rounded-3xl shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;