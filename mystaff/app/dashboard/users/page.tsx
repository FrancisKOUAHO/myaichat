'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {createColumnHelper, flexRender, getCoreRowModel, useReactTable,} from '@tanstack/react-table';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table";

type User = {
    id: number;
    email: string;
    emailVerifiedAt: Date | null;
    magicLinkToken: string | null;
    magicLinkTokenExpiresAt: Date | null;
    subscriptionActive: boolean;
    planId: number | null;
    rememberToken: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};

const columnHelper = createColumnHelper<User>()


const columns = [

    columnHelper.accessor('id', {
        cell: info => info.row.id,
    }),
    columnHelper.accessor('email', {
        cell: info => info.getValue(),
    }),
    columnHelper.accessor(row => row.emailVerifiedAt, {
        id: 'emailVerifiedAt',
        cell: ({ row }) => row.getValue('emailVerifiedAt') ? <i>{new Date(row.getValue('emailVerifiedAt')).toLocaleString()}</i> : null,
        header: () => <span>Email Verified At</span>,
    }),
    columnHelper.accessor(row => row.magicLinkToken, {
        id: 'magicLinkToken',
        cell: info => info.getValue() ? info.getValue() : 'N/A',
        header: () => <span>Magic Link Token</span>,
    }),
    columnHelper.accessor(row => row.magicLinkTokenExpiresAt, {
        id: 'magicLinkTokenExpiresAt',
        cell: info => info.row.getValue('magicLinkTokenExpiresAt') ? new Date(info.row.getValue('magicLinkTokenExpiresAt')).toLocaleString() : null,
        header: () => <span>Magic Link Token Expires At</span>,
    }),
    columnHelper.accessor(row => row.subscriptionActive, {
        id: 'subscriptionActive',
        cell: info => info.getValue() ? 'Active' : 'Inactive',
        header: () => <span>Subscription Active</span>,
    }),
    columnHelper.accessor(row => row.planId, {
        id: 'planId',
        cell: info => info.getValue() !== null ? info.getValue() : 'N/A',
        header: () => <span>Plan ID</span>,
    }),
    columnHelper.accessor(row => row.rememberToken, {
        id: 'rememberToken',
        cell: info => info.getValue() ? info.getValue() : 'N/A',
        header: () => <span>Remember Token</span>,
    }),
    columnHelper.accessor(row => row.createdAt, {
        id: 'createdAt',
        cell: info => info.row.getValue('createdAt') ? new Date(info.row.getValue('createdAt')).toLocaleString() : null,
        header: () => <span>Created At</span>,
    }),
    columnHelper.accessor(row => row.updatedAt, {
        id: 'updatedAt',
        cell: info => info.row.getValue('updatedAt') ? new Date(info.row.getValue('updatedAt')).toLocaleString() : null,
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
                console.log("donnees " + response.data)
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
                <TableRow key={row.id + 1}>
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


