import React, {CSSProperties} from 'react';

type ButtonProps = {
    href?: string;
    color?: 'primary' | 'secondary' | 'danger' | 'greyC';
    onClick?: any;
    children?: React.ReactNode;
    className?: string,
    name?: string,
    isActive?: boolean;
    minWidth?: number;
    minHeight?: number;
    size?: string;
    w?: string;
    type?: 'button' | 'submit' | 'reset' | undefined;
    disabled?: boolean,
    style?: CSSProperties,
    value?: string,
};

export default ButtonProps;
