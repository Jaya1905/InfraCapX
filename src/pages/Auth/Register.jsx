import { useState } from "react";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import FormInput from "../../components/Common/FormInput";
import PrimaryButton from "../../components/Common/PrimaryButton";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register attempt:", { ...formData, agreeTerms });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#00669f] via-[#0b7dbf] to-[#d2e2ef] px-4 py-8">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-2xl p-6 sm:p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-[#00669f]">InfraCapx</h1>
          <p className="text-sm text-gray-500 mt-1">Create your account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Two column layout for larger screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <FormInput
              label="Full Name"
              type="text"
              placeholder="John Doe"
              icon={FaUser}
              value={formData.fullName}
              onChange={handleChange("fullName")}
              required
            />

            <FormInput
              label="Email address"
              type="email"
              placeholder="you@company.com"
              icon={FaEnvelope}
              value={formData.email}
              onChange={handleChange("email")}
              required
            />

            <FormInput
              label="Password"
              type="password"
              placeholder="••••••••"
              icon={FaLock}
              value={formData.password}
              onChange={handleChange("password")}
              required
            />

            <FormInput
              label="Confirm Password"
              type="password"
              placeholder="••••••••"
              icon={FaLock}
              value={formData.confirmPassword}
              onChange={handleChange("confirmPassword")}
              required
            />
          </div>

          {/* Terms */}
          <div className="flex items-start gap-2 text-sm">
            <input
              type="checkbox"
              className="accent-[#00669f] mt-1"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
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
          <div className="flex justify-center">
            <PrimaryButton type="submit" className="sm:w-auto sm:px-35">Create Account</PrimaryButton>
          </div>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-[#00669f] font-semibold hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
