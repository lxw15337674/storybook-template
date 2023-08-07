import React from "react";
import "./button.css";
export interface ButtonProps {
    /**
     * Is this the principal call to action on th333e page11123123123?
     */
    primary: boolean;
    /**
     * What background color to use
     */
    backgroundColor: string;
    /**
     * How large should the button be?
     * @default "medium"
     */
    size: "small" | "medium" | "large";
    /**
     * Optional click handler
     **/
    label: string;
}
export declare const Button: ({ primary, backgroundColor, size, label, ...props }: ButtonProps) => React.JSX.Element;
export default Button;
