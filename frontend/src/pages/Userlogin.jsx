import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaEnvelope, FaLock } from "react-icons/fa";

export const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);

    const userData = {
      email,
      password,
    };
    
    console.log(userData);
    
    setTimeout(() => {
      setEmail('');
      setPassword('');
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-neutral-900 to-neutral-800 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">

        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-5xl font-bold mb-2">
            Uber
          </h1>
          <p className="text-neutral-400">Welcome back, rider</p>
        </div>

        {/* Card */}
        <div className="card">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white">
              Sign In
            </h2>

            <p className="text-neutral-400 mt-3 text-sm">
              Enter your credentials to continue your journey
            </p>
          </div>

          <form onSubmit={submitHandler} className="space-y-5">
            
            {/* Email Field */}
            <div>
              <label className="label-text">
                <FaEnvelope className="inline mr-2 text-cyan-400" />
                Email Address
              </label>

              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="label-text">
                <FaLock className="inline mr-2 text-cyan-400" />
                Password
              </label>

              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
                required
              />
            </div>

            {/* Forgot Password Link */}
            <div className="text-right">
              <a href="#" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors">
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full flex items-center justify-center gap-2"
            >
              {loading ? 'Signing in...' : 'Sign In'} <FaArrowRight size={16} />
            </button>
          </form>

          {/* Divider */}
          <div className="divider">
            <span className="text-neutral-500 text-xs uppercase font-semibold">Or</span>
          </div>

          {/* Captain Login */}
          <Link
            to="/captainlogin"
            className="btn-success w-full text-center flex items-center justify-center gap-2 mb-6"
          >
            Sign In as Driver
          </Link>

          {/* Signup */}
          <p className="text-center text-neutral-400 text-sm">
            Don't have an account?{" "}
            <Link
              to="/usersignup"
              className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
            >
              Create one
            </Link>
          </p>
        </div>

        {/* Footer */}
        <p className="text-center text-neutral-500 text-xs mt-6">
          By signing in, you agree to our Terms & Conditions
        </p>
      </div>
    </div>
  );
};

export default UserLogin;