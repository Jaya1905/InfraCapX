import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import AuthCard from "../../components/Common/AuthCard";
import FormInput from "../../components/Common/FormInput";
import PrimaryButton from "../../components/Common/PrimaryButton";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/")
  };

  return (
    <AuthCard
      subtitle="Login to continue"
      footer={
        <>
          Not a member?{" "}
          <a href="/register" className="text-[#00669f] font-semibold hover:underline">
            Register
          </a>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <FormInput
          label="Email address"
          type="email"
          placeholder="you@company.com"
          icon={FaEnvelope}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <FormInput
          label="Password"
          type="password"
          placeholder="••••••••"
          icon={FaLock}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* Remember + Forgot */}
        <div className="flex items-center justify-between text-[11px] xs:text-xs sm:text-sm">
          <label className="flex items-center gap-1.5 xs:gap-2 text-gray-600">
            <input
              type="checkbox"
              className="accent-[#00669f]"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Remember me
          </label>

          <Link
            to="/reset-password"
            className="text-[#00669f] font-medium hover:underline whitespace-nowrap"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Button */}
        <PrimaryButton type="submit">Login</PrimaryButton>
      </form>
    </AuthCard>
  );
};

export default Login;
