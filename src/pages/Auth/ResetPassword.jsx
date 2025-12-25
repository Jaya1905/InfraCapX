import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaArrowLeft,
  FaLock,
  FaKey,
  FaCheckCircle,
} from "react-icons/fa";
import AuthCard from "../../components/Common/AuthCard";
import FormInput from "../../components/Common/FormInput";
import PrimaryButton from "../../components/Common/PrimaryButton";

const ResetPassword = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setCurrentStep(2);
    }, 100);
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentStep(3);

    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setCurrentStep(4);
    }, 100);
  };

  const StepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {[1, 2, 3].map((step) => (
        <div key={step} className="flex items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              currentStep >= step
                ? "bg-[#00669f] text-white"
                : "bg-gray-200 text-gray-500"
            }`}
          >
            {step}
          </div>
          {step < 3 && (
            <div
              className={`w-12 h-0.5 mx-2 ${
                currentStep > step ? "bg-[#00669f]" : "bg-gray-200"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );

  if (currentStep === 1) {
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
        <StepIndicator />

        <form onSubmit={handleEmailSubmit} className="space-y-5">
          <div className="text-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Enter your email
            </h2>
            <p className="text-sm text-gray-600">
              We'll send you a verification code to reset your password.
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
            Send Verification Code
          </PrimaryButton>
        </form>
      </AuthCard>
    );
  }

  if (currentStep === 2) {
    return (
      <AuthCard
        subtitle="Verify your email"
        footer={
          <button
            onClick={() => setCurrentStep(1)}
            className="flex items-center gap-2 text-[#00669f] font-semibold hover:underline mx-auto"
          >
            <FaArrowLeft className="text-xs" />
            Back to Email
          </button>
        }
      >
        <StepIndicator />

        <form onSubmit={handleOtpSubmit} className="space-y-5">
          <div className="text-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Enter verification code
            </h2>
            <p className="text-sm text-gray-600">
              We've sent a 6-digit code to{" "}
              <span className="font-medium text-gray-900">{email}</span>
            </p>
          </div>

          <FormInput
            label="Verification Code"
            type="text"
            placeholder="123456"
            icon={FaKey}
            value={otp}
            onChange={(e) =>
              setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
            }
            required
          />

          <div className="text-center">
            <button
              type="button"
              onClick={() => setCurrentStep(1)}
              className="text-sm text-[#00669f] hover:underline"
            >
              Didn't receive the code? Resend
            </button>
          </div>

          <PrimaryButton
            type="submit"
            disabled={isLoading || otp.length !== 6}
            isLoading={isLoading}
          >
            Verify Code
          </PrimaryButton>
        </form>
      </AuthCard>
    );
  }

  if (currentStep === 3) {
    return (
      <AuthCard
        subtitle="Create new password"
        footer={
          <button
            onClick={() => setCurrentStep(2)}
            className="flex items-center gap-2 text-[#00669f] font-semibold hover:underline mx-auto"
          >
            <FaArrowLeft className="text-xs" />
            Back to Verification
          </button>
        }
      >
        <StepIndicator />

        <form onSubmit={handlePasswordSubmit} className="space-y-5">
          <div className="text-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Set new password
            </h2>
            <p className="text-sm text-gray-600">
              Choose a strong password for your account.
            </p>
          </div>

          <FormInput
            label="New Password"
            type="password"
            placeholder="••••••••"
            icon={FaLock}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />

          <FormInput
            label="Confirm Password"
            type="password"
            placeholder="••••••••"
            icon={FaLock}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          {newPassword &&
            confirmPassword &&
            newPassword !== confirmPassword && (
              <p className="text-sm text-red-600">Passwords don't match</p>
            )}

          <PrimaryButton
            type="submit"
            disabled={
              isLoading ||
              !newPassword ||
              !confirmPassword ||
              newPassword !== confirmPassword
            }
            isLoading={isLoading}
          >
            Update Password
          </PrimaryButton>
        </form>
      </AuthCard>
    );
  }

  return (
    <AuthCard
      subtitle="Password updated successfully"
      footer={
        <Link
          to="/login"
          className="flex items-center gap-2 text-[#00669f] font-semibold hover:underline mx-auto"
        >
          Continue to Login
        </Link>
      }
    >
      <div className="text-center space-y-4">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
          <FaCheckCircle className="text-2xl text-green-600" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            All done!
          </h2>
          <p className="text-sm text-gray-600">
            Your password has been successfully updated. You can now sign in
            with your new password.
          </p>
        </div>
      </div>
    </AuthCard>
  );
};

export default ResetPassword;
