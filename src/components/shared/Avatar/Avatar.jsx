import { useState } from 'react';

// Move static configuration outside the component to prevent re-creation on every render
const SIZE_STYLES = {
    small: { container: "w-8 h-8", text: "text-xs" },
    medium: { container: "w-12 h-12", text: "text-sm" },
    large: { container: "w-16 h-16", text: "text-lg" }
};

function Avatar({ src, name, size = 'medium' }) {
    const [hasError, setHasError] = useState(false);

    // Fallback to 'medium' if an invalid size string is passed
    const currentSize = SIZE_STYLES[size] || SIZE_STYLES.medium;

    // Helper to safely extract 1 or 2 initials
    const getInitials = (inputName) => {
        if (!inputName) return '?';
        const words = inputName.trim().split(/\s+/); // Handles extra spaces correctly
        if (words.length === 1) return words[0][0].toUpperCase();
        return (words[0][0] + words[words.length - 1][0]).toUpperCase(); // Max 2 letters (First & Last)
    };

    const initials = getInitials(name);

    // Show image if 'src' exists and has NOT failed to load
    if (src && !hasError) {
        return (
            <img 
                src={src} 
                alt={name || "User Avatar"} 
                onError={() => setHasError(true)} 
                className={`${currentSize.container} rounded-full object-cover`} 
            />
        );
    }

    // Fallback initials view
    return (
        <div className={`${currentSize.container} ${currentSize.text} rounded-full bg-blue-500 text-white font-semibold flex items-center justify-center select-none`}>
            {initials}
        </div>
    );
}

export default Avatar;