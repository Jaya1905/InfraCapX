import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaLock, FaCheckCircle } from "react-icons/fa";
import AuthCard from "../../components/Common/AuthCard";
import FormInput from "../../components/Common/FormInput";
import PrimaryButton from "../../components/Common/PrimaryButton";

const ChangePassword = () => {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 100);
  };

  const handleBackToLogin = () => {
    navigate("/login");
  };

  if (isSuccess) {
    return (
      <AuthCard
        subtitle="Password updated successfully"
        footer={
          <button
            onClick={handleBackToLogin}
            className="text-[#00669f] font-semibold hover:underline"
          >
            Continue to Login
          </button>
        }
      >
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <FaCheckCircle className="text-2xl text-green-600" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Password updated!
            </h2>
            <p className="text-sm text-gray-600">
              Your password has been successfully updated. You can now sign in
              with your new password.
            </p>
          </div>
        </div>
      </AuthCard>
    );
  }

  return (
    <AuthCard
      subtitle="Set your new password"
      footer={
        <Link
          to="/login"
          className="text-[#00669f] font-semibold hover:underline"
        >
          Back to Login
        </Link>
      }
    >
      <form onSubmit={handlePasswordSubmit} className="space-y-5">
        <div className="text-center mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Create new password
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

        {newPassword && confirmPassword && newPassword !== confirmPassword && (
          <p className="text-sm text-red-600">Passwords don't match</p>
        )}

        {newPassword && newPassword.length < 8 && (
          <p className="text-sm text-orange-600">
            Password should be at least 8 characters long
          </p>
        )}

        <PrimaryButton
          type="submit"
          disabled={
            isLoading ||
            !newPassword ||
            !confirmPassword ||
            newPassword !== confirmPassword ||
            newPassword.length < 8
          }
          isLoading={isLoading}
        >
          Update Password
        </PrimaryButton>
      </form>
    </AuthCard>
  );
};

export default ChangePassword;
