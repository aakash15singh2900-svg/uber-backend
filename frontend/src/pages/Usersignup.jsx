import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaUser, FaEnvelope, FaLock } from "react-icons/fa";

export const UserSignup = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);

    const userData = {
      fullname,
      email,
      password,
    };

    console.log(userData);

    setTimeout(() => {
      setFullname("");
      setEmail("");
      setPassword("");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-neutral-900 to-neutral-800 text-white">
      <div className="max-w-md mx-auto px-6 py-10">
        
        {/* Header */}
        <div className="mb-12">
          <h1 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-5xl font-bold mb-2">
            Uber
          </h1>

          <h2 className="text-4xl font-bold leading-tight mb-3">
            Create your
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">account</span>
          </h2>

          <p className="text-neutral-400 text-lg">
            Join millions of riders worldwide.
          </p>
        </div>

        {/* Form Card */}
        <div className="card mb-6">
          <form onSubmit={submitHandler} className="space-y-4">
            
            {/* Full Name */}
            <div>
              <label className="label-text">
                <FaUser className="inline mr-2 text-cyan-400" />
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                className="input-field"
                required
              />
            </div>

            {/* Email */}
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

            {/* Password */}
            <div>
              <label className="label-text">
                <FaLock className="inline mr-2 text-cyan-400" />
                Create Password
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

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full flex items-center justify-center gap-2 mt-6"
            >
              {loading ? 'Creating account...' : 'Create Account'} <FaArrowRight size={16} />
            </button>
          </form>
        </div>

        {/* Captain Signup */}
        <Link
          to="/captainsignup"
          className="btn-secondary w-full text-center block mb-6 font-semibold"
        >
          Want to drive? Join as Driver
        </Link>

        {/* Login Link */}
        <p className="text-center text-neutral-400 text-sm">
          Already have an account?{" "}
          <Link
            to="/userlogin"
            className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
          >
            Sign in
          </Link>
        </p>

        {/* Footer */}
        <p className="text-center text-neutral-500 text-xs mt-8">
          By creating an account, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default UserSignup;