import React from "react";

interface titleProps{
    className?: string;
    children?: string;
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

}

const Title: React.FC<titleProps> = ({
    className, children, variant = "h1",
}) => {

    if (variant == "h1"){
        return (
        <h1 className={className}>{children}</h1>
        );
    }

    if (variant == "h2"){
        return (
        <h2 className={className}>{children}</h2>
        );
    }

    if (variant == "h3"){
        return (
        <h3 className={className}>{children}</h3>
        );
    }

    if (variant == "h4"){
        return (
        <h4 className={className}>{children}</h4>
        );
    }

    if (variant == "h5"){
        return (
        <h5 className={className}>{children}</h5>
        );
    }

    if (variant == "h6"){
        return (
        <h6 className={className}>{children}</h6>
        );
    }
};

export default Title;
