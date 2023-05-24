import React from "react";

export type TitleTableProps = {
    title?: string;
    title_2?: string;
    title_3?: string;
    title_4?: string;
    title_5?: string;
    className?: string;
    children?: React.ReactNode;
}

export type CategoriesProps = {
    image?: string;
    name?: string;
    slug?: string;
    status?: string;
    action?: string;
    children?: React.ReactNode;
}

export type ReservationContentProps = {
    reference?: string;
    acheteur?: string;
    activite?: string;
    montant?: string;
}
