const AuthCard = ({ title, subtitle, children, footer }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#00669f] via-[#0b7dbf] to-[#d2e2ef] px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-[#00669f]">InfraCapx</h1>
          {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
        </div>

        {children}

        {footer && (
          <div className="text-center text-sm text-gray-600 mt-6">{footer}</div>
        )}
      </div>
    </div>
  );
};

export default AuthCard;
