import React from 'react';

type Item = {
    label?: string;
    link?: string;
    onclick?: (arg0?: any) => void;
    icon?: any
};

type DropdownProps = {
    list: Item[];
    children?: React.ReactNode;
};

export default DropdownProps;
