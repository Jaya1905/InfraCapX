import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaArrowLeft, FaCheckCircle } from "react-icons/fa";
import AuthCard from "../../components/Common/AuthCard";
import FormInput from "../../components/Common/FormInput";
import PrimaryButton from "../../components/Common/PrimaryButton";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 100);
  };

  const handleResendEmail = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  };

  if (!isSubmitted) {
    return (
      <AuthCard
        subtitle="Reset your password"
        footer={
          <Link
            to="/login"
            className="flex items-center gap-2 text-[#00669f] font-semibold hover:underline mx-auto"
          >
            <FaArrowLeft className="text-xs" />
            Back to Login
          </Link>
        }
      >
        <form onSubmit={handleEmailSubmit} className="space-y-5">
          <div className="text-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Forgot your password?
            </h2>
            <p className="text-sm text-gray-600">
              Enter your email address and we'll send you a link to reset your
              password.
            </p>
          </div>

          <FormInput
            label="Email address"
            type="email"
            placeholder="you@company.com"
            icon={FaEnvelope}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <PrimaryButton
            type="submit"
            disabled={isLoading}
            isLoading={isLoading}
          >
            Send Reset Link
          </PrimaryButton>
        </form>
      </AuthCard>
    );
  }

  return (
    <AuthCard
      subtitle="Check your email"
      footer={
        <Link
          to="/login"
          className="flex items-center gap-2 text-[#00669f] font-semibold hover:underline mx-auto"
        >
          <FaArrowLeft className="text-xs" />
          Back to Login
        </Link>
      }
    >
      <div className="text-center space-y-6">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
          <FaCheckCircle className="text-2xl text-green-600" />
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Reset link sent!
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            We've sent a password reset link to{" "}
            <span className="font-medium text-gray-900">{email}</span>
          </p>
          <p className="text-sm text-gray-600">
            Check your email and click the link to reset your password. The link
            will expire in 15 minutes.
          </p>
        </div>

        <div className="pt-4">
          <p className="text-sm text-gray-600 mb-3">
            Didn't receive the email?
          </p>
          <button
            onClick={handleResendEmail}
            disabled={isLoading}
            className="text-sm text-[#00669f] font-medium hover:underline disabled:opacity-50"
          >
            {isLoading ? "Sending..." : "Resend reset link"}
          </button>
        </div>
      </div>
    </AuthCard>
  );
};

export default ResetPassword;
