import { FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#00669f] via-[#0b7dbf] to-[#d2e2ef] px-4">
      {/* Card */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-[#00669f]">
            InfraCapx
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Sign in to continue
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
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


          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input
                type="checkbox"
                className="accent-[#00669f]"
              />
              Remember me
            </label>

            <a
              href="#"
              className="text-[#00669f] font-medium hover:underline"
            >
              Forgot Password?
            </a>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#00669f] text-white py-2.5 rounded-md font-semibold hover:bg-[#005a8c] transition"
          >
            Sign In
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Not a member?{" "}
          <a
            href="#"
            className="text-[#00669f] font-semibold hover:underline"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
