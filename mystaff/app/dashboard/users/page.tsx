'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {createColumnHelper, flexRender, getCoreRowModel, useReactTable,} from '@tanstack/react-table';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table";

type User = {
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

const columnHelper = createColumnHelper<User>()


const columns = [

    columnHelper.accessor('id', {
        cell: info => info.row.id,
    }),
    columnHelper.accessor('email', {
        cell: info => info.getValue(),
    }),
    columnHelper.accessor(row => row.email_verified_at, {
        id: 'email_verified_at',
        cell: ({ row }) => row.getValue('email_verified_at') ? <i>{new Date(row.getValue('email_verified_at')).toLocaleString()}</i> : null,
        header: () => <span>Email Verified At</span>,
    }),
    columnHelper.accessor(row => row.magic_link_token, {
        id: 'magic_link_token',
        cell: info => info.getValue() ? info.getValue() : 'N/A',
        header: () => <span>Magic Link Token</span>,
    }),
    columnHelper.accessor(row => row.magic_link_token_expires_at, {
        id: 'magic_link_token_expires_at',
        cell: info => info.row.getValue('magic_link_token_expires_at') ? new Date(info.row.getValue('magic_link_token_expires_at')).toLocaleString() : null,
        header: () => <span>Magic Link Token Expires At</span>,
    }),
    columnHelper.accessor(row => row.subscription_active, {
        id: 'subscription_active',
        cell: info => info.getValue() ? 'Active' : 'Inactive',
        header: () => <span>Subscription Active</span>,
    }),
    columnHelper.accessor(row => row.plan_id, {
        id: 'plan_id',
        cell: info => info.getValue() !== null ? info.getValue() : 'N/A',
        header: () => <span>Plan ID</span>,
    }),
    columnHelper.accessor(row => row.remember_token, {
        id: 'remember_token',
        cell: info => info.getValue() ? info.getValue() : 'N/A',
        header: () => <span>Remember Token</span>,
    }),
    columnHelper.accessor(row => row.created_at, {
        id: 'created_at',
        cell: info => info.row.getValue('created_at') ? new Date(info.row.getValue('created_at')).toLocaleString() : null,
        header: () => <span>Created At</span>,
    }),
    columnHelper.accessor(row => row.updated_at, {
        id: 'updated_at',
        cell: info => info.row.getValue('updated_at') ? new Date(info.row.getValue('updated_at')).toLocaleString() : null,
        header: () => <span>Updated At</span>,
    }),
];

const Page: React.FC = () => {
    const [data, setData] = useState<User[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/users'); // Remplacez par votre URL d'API
                setData(response.data);
                console.log("Données récupérées :", response.data);  // Ajout d'un console.log ici pour afficher les données récupérées
            } catch (error) {
                console.error('Erreur lors de la récupération des données:', error);
            }
        };

        fetchData();
    }, []);

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <Table>
            <TableHead>
                {table.getHeaderGroups().map(headerGroup =>  (
                    <TableRow key={headerGroup.id}>
                        {headerGroup.headers.map(header => (
                            <TableHeader key={header.id}>
                                {header.isPlaceholder
                                    ? null
                                    : flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                            </TableHeader>
                        ))}
                    </TableRow>
                ))}
            </TableHead>
            <TableBody>
            {table.getRowModel().rows.map(row => (
                <TableRow key={row.id}>
                    {row.getVisibleCells().map(cell => (
                        <TableCell key={cell.id}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                    ))}
                </TableRow>
            ))}
            </TableBody>
        </Table>

    );
};


export default Page;


