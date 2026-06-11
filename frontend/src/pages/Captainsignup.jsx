import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaArrowRight, FaExclamationCircle } from "react-icons/fa";

export const CaptainSignup = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [color, setColor] = useState("");
  const [plateNumber, setPlateNumber] = useState("");
  const [capacity, setCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const showError = (message) => {
    setError(message);

    setTimeout(() => {
      setError("");
    }, 3000);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);

    const captainData = {
      name,
      email,
      password,
      vehicle: {
        color,
        plateNumber,
        capacity: Number(capacity),
        vehicleType,
      },
    };

    console.log(captainData);

    setTimeout(() => {
      setName("");
      setEmail("");
      setPassword("");
      setColor("");
      setPlateNumber("");
      setCapacity("");
      setVehicleType("");
      setStep(1);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-neutral-900 to-neutral-800 flex items-center justify-center px-4 py-6">
      <div className="w-full max-w-lg">

        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent text-5xl font-bold mb-2">
            Uber Driver
          </h1>

          <p className="text-neutral-400 text-lg">
            Join millions of drivers and start earning.
          </p>
        </div>

        {/* Card */}
        <div className="card">

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-semibold text-neutral-300">Step {step} of 2</span>
              <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold">
                {step === 1 ? "50%" : "100%"}
              </span>
            </div>

            <div className="w-full h-2.5 bg-neutral-700 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r from-emerald-400 to-green-600 transition-all duration-500 ease-out ${step === 1 ? "w-1/2" : "w-full"
                  }`}
              />
            </div>
          </div>

          <form onSubmit={submitHandler}>
            {/* STEP 1 - Personal Information */}
            {step === 1 && (
              <>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Personal Information
                </h2>
                <p className="text-neutral-400 text-sm mb-6">
                  Let's start with your details
                </p>

                {error && (
                  <div className="mb-6 p-4 rounded-xl bg-red-500/15 border border-red-500/50 flex gap-3">
                    <FaExclamationCircle className="text-red-400 mt-0.5 flex-shrink-0" />
                    <p className="text-red-300 text-sm">
                      {error}
                    </p>
                  </div>
                )}

                <div className="space-y-5">
                  <div>
                    <label className="label-text">
                      <FaUser className="inline mr-2 text-emerald-400" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="input-field focus:ring-emerald-500/30 focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="label-text">
                      <FaEnvelope className="inline mr-2 text-emerald-400" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="driver@email.com"
                      className="input-field focus:ring-emerald-500/30 focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="label-text">
                      <FaLock className="inline mr-2 text-emerald-400" />
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="input-field focus:ring-emerald-500/30 focus:border-emerald-500"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    if (!name || !email || !password) {
                      showError("All fields are required");
                      return;
                    }

                    setStep(2);
                  }}
                  className="btn-success w-full mt-8 flex items-center justify-center gap-2"
                >
                  Continue <FaArrowRight size={16} />
                </button>
              </>
            )}

            {/* STEP 2 - Vehicle Information */}
            {step === 2 && (
              <>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Vehicle Information
                </h2>
                <p className="text-neutral-400 text-sm mb-6">
                  Tell us about your vehicle
                </p>

                <div className="space-y-5">
                  <div>
                    <label className="label-text">
                      Vehicle Color
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., White"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                      className="input-field focus:ring-emerald-500/30 focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="label-text">
                      Registration Number
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., UP65AB1234"
                      value={plateNumber}
                      onChange={(e) => setPlateNumber(e.target.value)}
                      className="input-field focus:ring-emerald-500/30 focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="label-text">
                      Seating Capacity
                    </label>
                    <input
                      type="number"
                      placeholder="e.g., 4"
                      value={capacity}
                      onChange={(e) => setCapacity(e.target.value)}
                      className="input-field focus:ring-emerald-500/30 focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="label-text">
                      Vehicle Type
                    </label>
                    <select
                      value={vehicleType}
                      onChange={(e) => setVehicleType(e.target.value)}
                      className="input-field focus:ring-emerald-500/30 focus:border-emerald-500"
                    >
                      <option value="">Select your vehicle type</option>
                      <option value="car">Car</option>
                      <option value="bike">Bike</option>
                      <option value="scooter">Scooter</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-3 mt-8">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="btn-secondary flex-1 flex items-center justify-center"
                  >
                    ← Back
                  </button>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-success flex-1 flex items-center justify-center gap-2"
                  >
                    {loading ? 'Creating...' : 'Complete'} <FaArrowRight size={16} />
                  </button>
                </div>
              </>
            )}
          </form>

          {/* Footer Links */}
          <div className="mt-8 pt-8 border-t border-neutral-700">
            <p className="text-center text-neutral-400 text-sm mb-3">
              Already registered?{" "}
              <Link
                to="/captainlogin"
                className="text-emerald-400 font-semibold hover:text-emerald-300 transition-colors"
              >
                Sign in
              </Link>
            </p>

            <p className="text-center text-neutral-400 text-sm">
              Looking to book rides?{" "}
              <Link
                to="/usersignup"
                className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
              >
                Sign up as Rider
              </Link>
            </p>
          </div>

        </div>

        {/* Footer */}
        <p className="text-center text-neutral-500 text-xs mt-6">
          By registering, you agree to our Driver Agreement and Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;