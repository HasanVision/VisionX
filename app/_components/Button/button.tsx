import clsx from "clsx";
import React from "react";
import styles from "./button.module.css";

interface ButtonProps {
    type?: "button" | "submit" | "reset" | undefined;
    fullWidth?: boolean;
    children?: React.ReactNode;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "danger" | "outline" | "link" | "ghost"; // Define variant prop
    disabled?: boolean;
    size?: "small" | "medium" | "large";
    asChild?: boolean; // Add asChild prop
}

const Button: React.FC<ButtonProps> = ({
    type = "button",
    fullWidth,
    children,
    onClick,
    variant = "primary", // Default to primary variant
    disabled,
    size = "medium",
    asChild = false, // Default asChild to false
}) => {
    const buttonClasses = clsx(
        styles.button,
        disabled && styles.disabled,
        fullWidth && styles.fullWidth,
        variant === "primary" && styles.primary, // Apply primary variant styles
        variant === "secondary" && styles.secondary, // Apply secondary variant styles
        variant === "danger" && styles.danger, // Apply danger variant styles
        variant === "outline" && styles.outline,
        variant === "link" && styles.link,
        variant === "ghost" && styles.ghost,
        size === "small" && styles.small,
        size === "large" && styles.large,
    );

    if (asChild) {
        return (
            <div className={buttonClasses} onClick={onClick} role="button" aria-disabled={disabled}>
                {children}
            </div>
        );
    }

    return (
        <button className={buttonClasses} onClick={onClick} type={type} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
