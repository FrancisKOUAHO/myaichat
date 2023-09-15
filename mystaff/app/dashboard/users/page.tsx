'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useTable } from "react-table";
import ColumnsUser from '@/utils/columns-user';
import { User } from "@/utils/columns-user";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table";

const Page: React.FC = () => {
    const [data, setData] = useState<User[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/users'); // Remplacez par votre URL d'API
                setData(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des données:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <div>
            <DataTableUsers data={data} />
        </div>
    );
};

const DataTableUsers: React.FC<{ data: User[] }> = ({ data }) => {

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns: ColumnsUser,
        data
    });



    return (
        <Table {...getTableProps()}>
            <TableHead>
                {headerGroups.map((headerGroup: headerGroups<User>) => (
                    <TableRow {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column: column<User>) => (
                            <TableHeader {...column.getHeaderProps()}>{column.render('Header')}</TableHeader>
                        ))}
                    </TableRow>
                ))}
            </TableHead>
            <TableBody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row);
                    return (
                        <TableRow {...row.getRowProps()}>
                            {row.cells.map(cell => (
                                <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>
                            ))}
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    );
};

export default Page;


