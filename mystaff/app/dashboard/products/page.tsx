'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {createColumnHelper, flexRender, getCoreRowModel, useReactTable,  getPaginationRowModel,  SortingState,  getSortedRowModel,  ColumnFiltersState,  getFilteredRowModel,} from '@tanstack/react-table';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {ChevronDownIcon,} from "@radix-ui/react-icons";
import {AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle, AlertDialogDescription, AlertDialogAction, AlertDialogCancel,} from "@/components/ui/alert-dialog";
import { MoreHorizontal,ArrowUpDown } from "lucide-react";


const Page: React.FC = () => {
    const [data, setData] = useState<Product[]>([]);
    const columnHelper = createColumnHelper<Product>();
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
    const [selectedRowId, setSelectedRowId] = useState(null);
    const [selectedProductIdToDelete, setSelectedProductIdToDelete] = useState<number | null>(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/products'); // Remplacez par votre URL d'API
                setData(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des données:', error);
            }
        };

        fetchData();
    }, []);


    type Product = {
        id: number;
        userId: number;
        domain: string | null;
        fullUrl: string | null;
        title: string | null;
        productType: string | null;
        vendor: string | null;
        publishDate: Date | null;
        updatedDate: Date | null;
        createdAt: Date | null;
        updatedAt: Date | null;
    };



    const columns = [

        columnHelper.accessor('id', {
            cell: info => info.row.id,
        }),
        columnHelper.accessor((row, rowIndex) => {
            // Utilisez le rowIndex pour obtenir du produit dans la vraie data
            const productData = data[rowIndex]; // Supposons que "data" contient les données réelles
            return productData ? productData.id : 'N/A';
        }, {
            id: 'product_id', // Utilisez un ID différent pour cette colonne
            cell: info => info.getValue(),
            header: () => <div>Product_ID</div>,

        }),
        columnHelper.accessor(row => row.userId, {
            id: 'userId',
            cell: info => info.getValue() !== null ? info.getValue() : 'N/A',
            header: () => <span>User_ID</span>,
        }),
        columnHelper.accessor('domain', {
            cell: info => info.getValue(),
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Domain
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                )
            },
        }),
        columnHelper.accessor(row => row.fullUrl, {
            id: 'fullUrl',
            cell: info => info.getValue() ? info.getValue() : 'N/A',
            header: () => <div>FullUrl</div>,

        }),
        columnHelper.accessor(row => row.title, {
            id: 'title',
            cell: info => info.getValue() ? info.getValue() : 'N/A',
            header: () => <div>Title</div>,

        }),
        columnHelper.accessor(row => row.productType, {
            id: 'productType',
            cell: info => info.getValue() ? info.getValue() : 'N/A',
            header: () => <div>Product_Type</div>,

        }),
        columnHelper.accessor(row => row.vendor, {
            id: 'vendor',
            cell: info => info.getValue() ? info.getValue() : 'N/A',
            header: () => <div>Vendor</div>,

        }),

        columnHelper.accessor(row => row.publishDate, {
            id: 'publishDate',
            cell: ({ row }) => row.getValue('publishDate') ? <i>{new Date(row.getValue('publishDate')).toLocaleString()}</i> : null,
            header: () => <div>PublishDate</div>,

        }),
        columnHelper.accessor(row => row.updatedDate, {
            id: 'updatedDate',
            cell: info => info.getValue() ? info.getValue() : 'N/A',
            header: () => <div>UpdatedDate</div>,

        }),
        columnHelper.accessor(row => row.updatedDate, {
            id: 'updatedDate',
            cell: info => info.row.getValue('updatedDate') ? new Date(info.row.getValue('updatedDate')).toLocaleString() : null,
            header: () => <span>UpdatedDate</span>,
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
                    placeholder="Filter domain..."
                    value={(table.getColumn("domain")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("domain")?.setFilterValue(event.target.value)
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
                                                <AlertDialog>
                                                    <AlertDialogTrigger asChild>
                                                        <Button variant="outline"
                                                                onClick={() => {
                                                                    setSelectedRowId(null);
                                                                    setSelectedProductIdToDelete(row.original.id);
                                                                }}
                                                        >
                                                            Supprimer
                                                        </Button>
                                                    </AlertDialogTrigger>
                                                    <AlertDialogContent>
                                                        <AlertDialogHeader>
                                                            <AlertDialogTitle>
                                                                Confirmation
                                                            </AlertDialogTitle>
                                                            <AlertDialogDescription>
                                                                Êtes-vous sûr de vouloir supprimer cet utilisateur {" "}
                                                                {selectedRowId !== null &&
                                                                    data.find((product) => product.id === selectedProductIdToDelete)?.domain}
                                                                ?
                                                            </AlertDialogDescription>
                                                        </AlertDialogHeader>
                                                        <AlertDialogFooter>
                                                            <AlertDialogCancel>Annuler</AlertDialogCancel>
                                                            {/*<AlertDialogAction  onClick={() => {*/}
                                                            {/*    if (selectedProductIdToDelete !== null) {*/}
                                                            {/*        axios.create(`http://localhost:8080/api/products`)*/}
                                                            {/*            .then((response) => {*/}
                                                            {/*                console.log('Creation réussie');*/}
                                                            {/*            })*/}
                                                            {/*            .catch((error) => {*/}
                                                            {/*                console.error('Erreur lors de la suppression :', error);*/}
                                                            {/*            });*/}
                                                            {/*    }*/}
                                                            {/*    setSelectedProductIdToDelete(null);*/}
                                                            {/*}}>*/}
                                                            {/*    Creation*/}
                                                            {/*</AlertDialogAction>*/}
                                                            <AlertDialogAction  onClick={() => {
                                                                if (selectedProductIdToDelete !== null) {
                                                                    axios.delete(`http://localhost:8080/api/products/${selectedProductIdToDelete}`)
                                                                        .then((response) => {
                                                                            console.log('Suppression réussie');
                                                                        })
                                                                        .catch((error) => {
                                                                            console.error('Erreur lors de la suppression :', error);
                                                                        });
                                                                }
                                                                setSelectedProductIdToDelete(null);
                                                            }}>
                                                                Supprimer
                                                            </AlertDialogAction>
                                                        </AlertDialogFooter>
                                                    </AlertDialogContent>
                                                </AlertDialog>
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
                <div className="flex-1 text-sm text-muted-foreground">
                    {table.getFilteredSelectedRowModel().rows.length} of{" "}
                    {table.getFilteredRowModel().rows.length} row(s) selected.
                </div>
                <div className="space-x-2">
                    <Button variant="outline" size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
                        Previous
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
                        Next
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Page;