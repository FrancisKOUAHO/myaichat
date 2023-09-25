'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {createColumnHelper, flexRender, getCoreRowModel, useReactTable,  getPaginationRowModel,  SortingState,  getSortedRowModel,  ColumnFiltersState,  getFilteredRowModel,} from '@tanstack/react-table';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {ChevronDownIcon,} from "@radix-ui/react-icons";


const Page: React.FC = () => {
    const [data, setData] = useState<Facturation[]>([]);
    const columnHelper = createColumnHelper<Facturation>();
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
    const [selectedRowId, setSelectedRowId] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/stats/subscriptions');
                setData(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des données:', error);
            }
        };

        fetchData();
    }, []);


    type Facturation = {
        id: number;
        email: string;
        planName: string | null;
        planPrice: number | null;
        planInterval: string | null;
        userCreatedAt: Date | null;
    };

    const columns = [

        columnHelper.accessor('id', {
            cell: info => info.row.id,
        }),
        columnHelper.accessor('email', {
            cell: info => info.getValue(),
            header: () => <div>Email</div>,
        }),
        columnHelper.accessor(row => row.planName, {
            id: 'Nom_Abonnement',
            cell: info => info.getValue() ? info.getValue() : 'N/A',
            header: () => <div>Nom_Abonnement</div>,

        }),
        columnHelper.accessor(row => row.planPrice, {
            id: 'Prix_Abonnement',
            cell: info => info.getValue() !== null ? info.getValue() : 'N/A',
            header: () => <span>Prix_Abonnement</span>,
        }),
        columnHelper.accessor(row => row.planInterval, {
            id: 'Type_Abonnement',
            cell: info => info.getValue() ? info.getValue() : 'N/A',
            header: () => <div>Type_Abonnement</div>,

        }),
        columnHelper.accessor(row => row.userCreatedAt, {
            id: 'Date_Creation_User',
            cell: ({ row }) => row.getValue('Date_Creation_User') ? <i>{new Date(row.getValue('Date_Creation_User')).toLocaleString()}</i> : null,
            header: () => <div>Date_Creation_User</div>,

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
                    placeholder="Filtrer email..."
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
                                    Pas de resultats.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <div className="flex-1 text-sm text-muted-foreground">
                    {table.getFilteredRowModel().rows.length} ligne(s) au total.
                </div>
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


