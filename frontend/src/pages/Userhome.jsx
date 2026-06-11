import React from "react";
import {
  FaUser,
  FaHome,
  FaBriefcase,
  FaMapMarkerAlt,
  FaHistory,
  FaEllipsisV,
  FaStar,
  FaClock,
} from "react-icons/fa";
import heroImage from "../assets/ChatGPT Image Jun 11, 2026, 03_09_30 PM.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-100 to-neutral-200 flex justify-center items-center p-4">
      {/* Main App Container */}
      <div className="relative w-full h-screen bg-white overflow-hidden md:max-w-md lg:max-w-lg md:h-[95vh] md:rounded-3xl md:shadow-2xl md:border md:border-neutral-200">

        {/* Map Section */}
        <div className="h-[55%] w-full relative bg-gradient-to-br from-blue-400 to-blue-500">
          <img
            src={heroImage}
            alt="map"
            className="w-full h-full object-cover"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>

        {/* Floating Header */}
        <div className="absolute top-0 left-0 right-0 z-20 p-5 flex justify-between items-center">
          {/* Logo Badge */}
          <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-white/20">
            <h1 className="font-bold text-lg bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Uber
            </h1>
          </div>

          {/* User Button */}
          <button className="h-12 w-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all flex items-center justify-center hover:bg-neutral-50 border border-neutral-100">
            <FaUser size={18} className="text-gray-700" />
          </button>
        </div>

        {/* Bottom Sheet */}
        <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[32px] px-6 pt-6 pb-8 shadow-2xl border-t border-neutral-100 h-[45%] overflow-y-auto">

          {/* Handle */}
          <div className="w-12 h-1.5 bg-neutral-300 rounded-full mx-auto mb-5"></div>

          <p className="text-neutral-500 text-sm font-medium">
            Good Morning 👋
          </p>

          <h2 className="text-3xl font-bold mt-2 mb-6 text-neutral-900">
            Where to?
          </h2>

          {/* Input Fields */}
          <div className="space-y-3 mb-6">

            {/* Pickup Location */}
            <div className="flex items-center gap-3 bg-gradient-to-r from-neutral-50 to-neutral-100 rounded-2xl px-4 py-4 border border-neutral-200 hover:border-cyan-300 transition-colors cursor-pointer">
              <div className="w-3 h-3 rounded-full bg-cyan-500 flex-shrink-0"></div>

              <input
                type="text"
                placeholder="Pickup location"
                className="bg-transparent w-full outline-none text-neutral-900 font-medium placeholder:text-neutral-500"
              />
            </div>

            {/* Destination */}
            <div className="flex items-center gap-3 bg-gradient-to-r from-neutral-50 to-neutral-100 rounded-2xl px-4 py-4 border border-neutral-200 hover:border-cyan-300 transition-colors cursor-pointer">
              <FaMapMarkerAlt className="text-cyan-500 flex-shrink-0" size={16} />

              <input
                type="text"
                placeholder="Where are you going?"
                className="bg-transparent w-full outline-none text-neutral-900 font-medium placeholder:text-neutral-500"
              />
            </div>

          </div>

          {/* Find Ride Button */}
          <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3.5 rounded-xl font-bold text-lg hover:shadow-lg active:scale-95 transition-all mb-4">
            Find Ride
          </button>

          {/* Saved Places */}
          <div className="mt-4">

            <h3 className="text-xs font-bold text-neutral-600 mb-3 uppercase tracking-widest">
              ⭐ Saved Places
            </h3>

            <div className="space-y-2">

              {/* Home */}
              <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-neutral-50 cursor-pointer transition-all hover:border-l-4 hover:border-l-cyan-500 border-l-4 border-l-transparent">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center flex-shrink-0">
                  <FaHome className="text-blue-600" size={16} />
                </div>

                <div className="flex-1">
                  <p className="font-bold text-neutral-900 text-sm">Home</p>
                  <p className="text-xs text-neutral-500">
                    Your saved address
                  </p>
                </div>
                
                <FaEllipsisV className="text-neutral-400" size={14} />
              </div>

              {/* Work */}
              <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-neutral-50 cursor-pointer transition-all hover:border-l-4 hover:border-l-cyan-500 border-l-4 border-l-transparent">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center flex-shrink-0">
                  <FaBriefcase className="text-amber-600" size={16} />
                </div>

                <div className="flex-1">
                  <p className="font-bold text-neutral-900 text-sm">Work</p>
                  <p className="text-xs text-neutral-500">
                    Office location
                  </p>
                </div>

                <FaEllipsisV className="text-neutral-400" size={14} />
              </div>

            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-6 pt-4 border-t border-neutral-200 space-y-2">
            <h3 className="text-xs font-bold text-neutral-600 mb-3 uppercase tracking-widest">
              Quick Options
            </h3>

            <div className="grid grid-cols-3 gap-2">
              <button className="flex flex-col items-center justify-center gap-2 p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors text-blue-600 font-semibold text-xs border border-blue-100">
                <FaStar size={18} /> UberX
              </button>
              <button className="flex flex-col items-center justify-center gap-2 p-3 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors text-purple-600 font-semibold text-xs border border-purple-100">
                <FaClock size={18} /> Schedule
              </button>
              <button className="flex flex-col items-center justify-center gap-2 p-3 bg-green-50 rounded-xl hover:bg-green-100 transition-colors text-green-600 font-semibold text-xs border border-green-100">
                <FaHistory size={18} /> History
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;