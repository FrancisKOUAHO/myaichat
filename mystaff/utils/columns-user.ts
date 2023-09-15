'use client'

import {ColumnDef} from "@tanstack/react-table";


export type User = {
    id: number;
    email: string;
    email_verified_at: Date | null;
    magic_link_token: string | null;
    magic_link_token_expires_at: Date | null;
    subscription_active: boolean;
    plan_id: number | null;
    remember_token: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};

const ColumnsUser: ColumnDef<User>[] = [
    {
        accessorKey: 'id',
        header: 'ID',
    },
    {
        accessorKey: 'email',
        header: 'Email',
    },
    {
        accessorKey: 'email_verified_at',
        header: 'Email Verified At',
        cell: ({ row }) => row.getValue('email_verified_at') ? new Date(row.getValue('email_verified_at')).toLocaleString() : null,
    },
    {
        accessorKey: 'magic_link_token',
        header: 'Magic Link Token',
        cell: ({ row }) => row.getValue('magic_link_token') ? row.getValue('magic_link_token') : 'N/A',
    },
    {
        accessorKey: 'magic_link_token_expires_at',
        header: 'Magic Link Token Expires At',
        cell: ({ row }) => row.getValue('magic_link_token_expires_at') ? new Date(row.getValue('magic_link_token_expires_at')).toLocaleString() : null,
    },
    {
        accessorKey: 'subscription_active',
        header: 'Subscription Active',
        cell: ({ row }) => row.getValue('subscription_active') ? 'Active' : 'Inactive',
    },
    {
        accessorKey: 'plan_id',
        header: 'Plan ID',
        cell: ({ row }) => row.getValue('plan_id') !== null ? row.getValue('plan_id') : 'N/A',
    },
    {
        accessorKey: 'remember_token',
        header: 'Remember Token',
        cell: ({ row }) => row.getValue('remember_token') ? row.getValue('remember_token') : 'N/A',
    },
    {
        accessorKey: 'created_at',
        header: 'Created At',
        cell: ({ row }) => row.getValue('created_at') ? new Date(row.getValue('created_at')).toLocaleString() : null,
    },
    {
        accessorKey: 'updated_at',
        header: 'Updated At',
        cell: ({ row }) => row.getValue('updated_at') ? new Date(row.getValue('updated_at')).toLocaleString() : null,
    },
];

export default ColumnsUser