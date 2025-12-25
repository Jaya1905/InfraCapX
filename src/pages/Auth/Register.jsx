import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#00669f] via-[#0b7dbf] to-[#d2e2ef] px-4 py-8">
      {/* Card */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-[#00669f]">
            InfraCapx
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Create your account
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="John Doe"
                className="
                  w-full pl-10 pr-3 py-3
                  bg-gray-50
                  border border-gray-300
                  rounded-lg
                  text-sm
                  placeholder-gray-400
                  transition
                  hover:border-[#00669f]
                  focus:border-[#00669f]
                  focus:ring-2 focus:ring-[#00669f]/20
                  outline-none
                "
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email address
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                placeholder="you@company.com"
                className="
                  w-full pl-10 pr-3 py-3
                  bg-gray-50
                  border border-gray-300
                  rounded-lg
                  text-sm
                  placeholder-gray-400
                  transition
                  hover:border-[#00669f]
                  focus:border-[#00669f]
                  focus:ring-2 focus:ring-[#00669f]/20
                  outline-none
                "
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                placeholder="••••••••"
                className="
                  w-full pl-10 pr-3 py-3
                  bg-gray-50
                  border border-gray-300
                  rounded-lg
                  text-sm
                  placeholder-gray-400
                  transition
                  hover:border-[#00669f]
                  focus:border-[#00669f]
                  focus:ring-2 focus:ring-[#00669f]/20
                  outline-none
                "
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                placeholder="••••••••"
                className="
                  w-full pl-10 pr-3 py-3
                  bg-gray-50
                  border border-gray-300
                  rounded-lg
                  text-sm
                  placeholder-gray-400
                  transition
                  hover:border-[#00669f]
                  focus:border-[#00669f]
                  focus:ring-2 focus:ring-[#00669f]/20
                  outline-none
                "
              />
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-start gap-2 text-sm">
            <input
              type="checkbox"
              className="accent-[#00669f] mt-1"
            />
            <span className="text-gray-600">
              I agree to the{" "}
              <a href="#" className="text-[#00669f] font-medium hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-[#00669f] font-medium hover:underline">
                Privacy Policy
              </a>
            </span>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#00669f] text-white py-2.5 rounded-md font-semibold hover:bg-[#005a8c] transition"
          >
            Create Account
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-[#00669f] font-semibold hover:underline"
          >
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
