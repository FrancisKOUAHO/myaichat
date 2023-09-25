'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {createColumnHelper, flexRender, getCoreRowModel, useReactTable,  getPaginationRowModel,  SortingState,  getSortedRowModel,  ColumnFiltersState,  getFilteredRowModel,
} from '@tanstack/react-table';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table";
import {DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {ChevronDownIcon,} from "@radix-ui/react-icons";
import {ArrowUpDown} from "lucide-react";
import {Input} from "@/components/ui/input";



const Page: React.FC = () => {
    const [data, setData] = useState<Paiement[]>([]);
    const columnHelper = createColumnHelper<Paiement>();
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
    const [selectedRowId, setSelectedRowId] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/payments'); // Remplacez par votre URL d'API
                setData(response.data);
                console.log("Données récupérées :", response.data);  // Ajout d'un console.log ici pour afficher les données récupérées
                console.log("donnees " + response.data)
            } catch (error) {
                console.error('Erreur lors de la récupération des données:', error);
            }
        };

        fetchData();
    }, []);


    type Paiement = {
        id: number;
        total: number;
        orderId: string | null;
        stCusId: string | null;
        stSubId: string | null;
        stPaymentIntentId: string | null;
        stPaymentMethod: string | null;
        stPaymentStatus: string | null;
        date: Date | null;
        trial_end: Date | null;
        createdAt: Date | null;
        updatedAt: Date | null;
    };

    const columns = [

        columnHelper.accessor('id', {
            cell: info => info.row.id,
        }),
        columnHelper.accessor((row, rowIndex) => {
            // Utilisez le rowIndex pour obtenir l'ID de l'utilisateur dans la vraie data
            const userData = data[rowIndex]; // Supposons que "data" contient les données réelles
            return userData ? userData.id : 'N/A';
        }, {
            id: 'paiement_id', // Utilisez un ID différent pour cette colonne
            cell: info => info.getValue(), // Affichez l'ID de l'utilisateur dans cette colonne
            header: () => <div className="text-right">Paiement ID</div>,
        }),
        columnHelper.accessor(row => row.total, {
            id: 'total',
            cell: info => info.getValue() !== null ? info.getValue() : 'N/A',
            header: () => <span>Total</span>,
        }),
        columnHelper.accessor('orderId', {
            cell: info => info.getValue(),
            header: () => <span>order_Id</span>,
/*            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        orderId
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                )
            },*/
        }),
        columnHelper.accessor(row => row.stCusId, {
            id: 'stCusId',
            cell: info => info.getValue() ? info.getValue() : 'N/A',
            header: () => <div>stCusId</div>,
        }),
        columnHelper.accessor(row => row.stSubId, {
            id: 'stSubId',
            cell: info => info.getValue() ? info.getValue() : 'N/A',
            header: () => <div>stSubId</div>,
        }),
        columnHelper.accessor(row => row.stPaymentIntentId, {
            id: 'stPaymentIntentId',
            cell: info => info.getValue() ? info.getValue() : 'N/A',
            header: () => <div>stPaymentIntentId</div>,
        }),
        columnHelper.accessor(row => row.stPaymentMethod, {
            id: 'stPaymentMethod',
            cell: info => info.getValue() ? info.getValue() : 'N/A',
            header: () => <div>stPaymentMethod</div>,
        }),
        columnHelper.accessor(row => row.stPaymentStatus, {
            id: 'stPaymentStatus',
            cell: info => info.getValue() ? info.getValue() : 'N/A',
            header: () => <div>stPaymentStatus</div>,
        }),
        columnHelper.accessor(row => row.date, {
            id: 'date',
            cell: info => info.row.getValue('date') ? new Date(info.row.getValue('date')).toLocaleString() : null,
            header: () => <div>Date</div>,
        }),
        columnHelper.accessor(row => row.trial_end, {
            id: 'trial_end',
            cell: info => info.row.getValue('trial_end') ? new Date(info.row.getValue('trial_end')).toLocaleString() : null,
            header: () => <div>Trial End</div>,
        }),
        columnHelper.accessor(row => row.createdAt, {
            id: 'createdAt',
            cell: info => info.row.getValue('createdAt') ? new Date(info.row.getValue('createdAt')).toLocaleString() : null,
            header: () => <div>Created At</div>,
        }),
        columnHelper.accessor(row => row.updatedAt, {
            id: 'updatedAt',
            cell: info => info.row.getValue('updatedAt') ? new Date(info.row.getValue('updatedAt')).toLocaleString() : null,
            header: () => <div>Updated At</div>,
        }),
    ];



    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting,
            columnFilters,
        },
    })

    return (
        <div className="w-full pl-4 pr-4">
            <div className="flex items-center py-4">
                <Input
                    placeholder="Filter orderId..."
                    value={(table.getColumn("orderId")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("orderId")?.setFilterValue(event.target.value)
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
                            .filter(
                                (column) => column.getCanHide()
                            )
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
            <div className="rounded-md border-0">
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
                                    className={selectedRowId === row.id ? "selected-row" : ""}
                                    onClick={() => {
                                        if (selectedRowId === row.id) {
                                            setSelectedRowId(null); // Déselectionnez la ligne si elle est déjà sélectionnée
                                        } else {
                                            // @ts-ignore
                                            setSelectedRowId(row.id); // Sélectionnez la ligne si elle n'est pas encore sélectionnée
                                        }
                                    }}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
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
                <div className="space-x-2">
                    <Button variant="outline" size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
                        Precedent
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
                        Suivant
                    </Button>
                </div>
            </div>
        </div>
    );
};


export default Page;