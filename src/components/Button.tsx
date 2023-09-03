import { ButtonProps } from "@/models/model";
import React from "react";

const Button = ({
    type = "button",
    children,
    onClick,
}: ButtonProps) => {
    return (
        <button
            className=""
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;