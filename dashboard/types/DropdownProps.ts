import React from 'react';

type Item = {
	label?: string;
	link?: string;
	onclick?: () => void;
	icon?: any
};

type DropdownProps = {
	list: Item[];
	children?: React.ReactNode;
};

export default DropdownProps;
