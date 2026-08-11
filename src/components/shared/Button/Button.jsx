function Button({
    children,
    variant = 'primary',
    size = 'medium',
    loading = false,
    disabled = false,
    fullWidth = false,
    onClick,
    type = 'button'
}) {
    const baseClasses = "font-medium rounded transition-all duration-200";

    const sizeClasses = {
        small: "px-3 py-1 text-sm",
        medium: "px-4 py-2",
        large: "px-6 py-3 text-lg"
    };

    const variantClasses = {
        primary: "bg-blue-500 text-white hover:bg-blue-600 disabled:bg-blue-300",
        secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
        outline: "border-2 border-blue-500 text-blue-500 hover:bg-blue-50",
        danger: "bg-red-500 text-white hover:bg-red-600",
        ghost: "text-gray-600 hover:bg-gray-100"
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            className={`
                ${baseClasses}
                ${sizeClasses[size]}
                ${variantClasses[variant]}
                ${fullWidth ? 'w-full' : ''}
                ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
            `}
        >
            {loading ? "Loading..." : children}
        </button>
    );
}

export default Button;