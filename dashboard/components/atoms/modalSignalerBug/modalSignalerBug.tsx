'use client'


import {FunctionComponent} from "react";

export const modalSignalerBug: FunctionComponent<CardProps> = ({className, children}) => {

    return (
        <div className={className}>
            {children}
        </div>
    );
};

export default Card;
