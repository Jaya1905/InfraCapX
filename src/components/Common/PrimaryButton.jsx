const PrimaryButton = ({
  children,
  type = "button",
  disabled = false,
  isLoading = false,
  loadingText,
  onClick,
  className = "",
}) => {
  const getLoadingText = () => {
    if (loadingText) return loadingText;

    // Default loading text based on button content
    const buttonText = children?.toString().toLowerCase() || "";
    if (buttonText.includes("send")) return "Sending...";
    if (buttonText.includes("verify")) return "Verifying...";
    if (buttonText.includes("update")) return "Updating...";
    return "Loading...";
  };

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      className={`
        w-full bg-[#00669f] text-white py-2.5 rounded-md font-semibold 
        hover:bg-[#005a8c] transition 
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {isLoading ? getLoadingText() : children}
    </button>
  );
};

export default PrimaryButton;
