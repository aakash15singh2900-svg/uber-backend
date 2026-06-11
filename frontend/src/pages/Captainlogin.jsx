import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaEnvelope, FaLock, FaExclamationCircle } from "react-icons/fa";

export const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

    if (!email && !password) {
      showError("Email and password required");
      setLoading(false);
      return;
    }

    if (!email) {
      showError("Email is required");
      setLoading(false);
      return;
    }

    if (!password) {
      showError("Password is required");
      setLoading(false);
      return;
    }

    const captainData = {
      email,
      password,
    };

    console.log(captainData);

    setTimeout(() => {
      setEmail("");
      setPassword("");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-neutral-900 to-neutral-800 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">

        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4">
            <h1 className="bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent text-5xl font-bold">
              Uber Driver
            </h1>
          </div>
          <p className="text-neutral-400 text-lg">Welcome back, driver</p>
        </div>

        {/* Card */}
        <div className="card">
          
          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 rounded-xl bg-red-500/15 border border-red-500/50 flex gap-3">
              <FaExclamationCircle className="text-red-400 mt-0.5 flex-shrink-0" />
              <p className="text-red-300 text-sm">
                {error}
              </p>
            </div>
          )}

          <h2 className="text-3xl font-bold text-white mb-2">
            Driver Sign In
          </h2>
          <p className="text-neutral-400 text-sm mb-8">
            Enter your credentials to start earning
          </p>

          <form onSubmit={submitHandler} className="space-y-5">
            
            {/* Email Field */}
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

            {/* Password Field */}
            <div>
              <label className="label-text">
                <FaLock className="inline mr-2 text-emerald-400" />
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="input-field focus:ring-emerald-500/30 focus:border-emerald-500"
              />
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <a href="#" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors">
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="btn-success w-full flex items-center justify-center gap-2"
            >
              {loading ? 'Signing in...' : 'Sign In as Driver'} <FaArrowRight size={16} />
            </button>
          </form>

          {/* Divider */}
          <div className="divider">
            <span className="text-neutral-500 text-xs uppercase font-semibold">New to Uber?</span>
          </div>

          {/* Register Link */}
          <Link
            to="/captainsignup"
            className="btn-secondary w-full text-center block mb-6"
          >
            Register as Driver
          </Link>

          {/* User Login */}
          <p className="text-center text-neutral-400 text-sm">
            Looking for a ride?{" "}
            <Link
              to="/userlogin"
              className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
            >
              Sign in as Rider
            </Link>
          </p>
        </div>

        {/* Footer */}
        <p className="text-center text-neutral-500 text-xs mt-6">
          By signing in, you agree to our Driver Terms & Conditions
        </p>
      </div>
    </div>
  );
};

export default CaptainLogin;