'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {createColumnHelper, flexRender, getCoreRowModel, useReactTable,  getPaginationRowModel,
} from '@tanstack/react-table';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
    CaretSortIcon,
    ChevronDownIcon,
    DotsHorizontalIcon,
} from "@radix-ui/react-icons"

import { MoreHorizontal } from "lucide-react";



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
        header: () => <div className="text-right">Email Verified At</div>,

    }),
    columnHelper.accessor(row => row.magicLinkToken, {
        id: 'magicLinkToken',
        cell: info => info.getValue() ? info.getValue() : 'N/A',
        header: () => <div className="text-right">Magic Link TokenNo</div>,

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
        getPaginationRowModel: getPaginationRowModel(),
    })

    return (
        <div className="w-full">
            <div className="flex items-center py-4">
                <Input
                    placeholder="Filter emails..."
                    value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("email")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="ml-auto">
                            Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {table
                            .getAllColumns()
                            .filter((column) => column.getCanHide())
                            .map((column) => {
                                return (
                                    <DropdownMenuCheckboxItem
                                        key={column.id}
                                        className="capitalize"
                                        checked={column.getIsVisible()}
                                        onCheckedChange={(value) =>
                                            column.toggleVisibility(!!value)
                                        }
                                    >
                                        {column.id}
                                    </DropdownMenuCheckboxItem>
                                )
                            })}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="rounded-xl border bg-card text-card-foreground shadow col-span-3">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                    <TableCell>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" className="h-8 w-8 p-0">
                                                    <span className="sr-only">Open menu</span>
                                                    <MoreHorizontal className="h-4 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                <DropdownMenuItem
                                                    onClick={() => {
                                                        // Mettez ici la logique de l'action que vous souhaitez effectuer
                                                    }}
                                                >
                                                    Modifier
                                                </DropdownMenuItem>
                                                <DropdownMenuItem
                                                    onClick={() => {
                                                        // Mettez ici la logique de l'action que vous souhaitez effectuer
                                                    }}
                                                >
                                                    Supprimer
                                                </DropdownMenuItem>
                                                {/* Ajoutez d'autres éléments de menu si nécessaire */}
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    Previous
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    Next
                </Button>
            </div>
        </div>
    );
};


export default Page;


