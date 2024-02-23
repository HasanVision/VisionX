import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import clsx from "clsx";

import styles from "./input.module.css";

interface InputProps {
    label?: string;
    id: string;
    type?: string;
    required?: boolean;
    register?: UseFormRegister<FieldValues>;
    errors?: FieldErrors;
    disabled?: boolean;
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
    {
        label,
        id,
        type,
        required,
        register,
        errors,
        disabled
    },
    ref
) => {
    return (
        <div>
            <label className={styles.InputComponentLabel} htmlFor={id}>
                {label}
            </label>
            <div style={{ marginTop: "0.5rem", marginLeft: "0.5rem" }}>
                <input
                    id={id}
                    type={type}
                    autoComplete={id}
                    disabled={disabled}
                    {...register ? register(id, { required }) : {}}
                    className={clsx(
                        styles.inputConditional,
                        errors?.[id] && styles.errors,
                        disabled && styles.disabled
                    )}
                    ref={ref}
                />
            </div>
        </div>
    );
};

export default React.forwardRef(Input);
