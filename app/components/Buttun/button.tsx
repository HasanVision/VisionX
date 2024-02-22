import clsx from "clsx";
import React from "react";
import styles from "./button.module.css";

interface ButtonProps {
    type?: "button" | "submit" | "reset" |  undefined;
    fullWidth?: boolean;
    children?: React.ReactNode;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "danger" | "outline" ; // Define variant prop
    disabled?: boolean;
    size?: "small" | "medium" | "large";
}

const Button: React.FC<ButtonProps> = ({
                                           type = "button",
                                           fullWidth,
                                           children,
                                           onClick,
                                           variant = "primary", // Default to primary variant
                                           disabled,
                                           size = "medium"
                                       }) => {
    return (
        <button
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={clsx(
                styles.button,
                disabled && styles.disabled,
                fullWidth && styles.fullWidth,
                variant === "primary" && styles.primary, // Apply primary variant styles
                variant === "secondary" && styles.secondary, // Apply secondary variant styles
                variant === "danger" && styles.danger, // Apply danger variant styles
                variant === "outline" && styles.outline,
                size === "small" && styles.small,
                size === "large" && styles.large,

            )}
        >
            {children}
        </button>
    );
};

export default Button;
