"use client"

import React, {useState} from "react";
import '../styles/_main.scss'
import 'react-toastify/dist/ReactToastify.css';

import {ToastContainer} from 'react-toastify';
import {Hydrate, QueryClient, QueryClientProvider,} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import AuthContextProvider from "@/context/AuthContext";


export default function RootLayout({children}: { children: React.ReactNode }) {
    const [queryClient] = useState(() => new QueryClient(
        {
            defaultOptions: {
                queries: {
                    refetchOnWindowFocus: false,
                    retry: false,
                    staleTime: 0,
                }
            }
        }
    ));


    return (
        <html lang="fr">
        <head/>
        <body className="bg-slate-100">
        <AuthContextProvider>
            <QueryClientProvider client={queryClient}>
                <Hydrate>
                    {children}
                </Hydrate>
                <ToastContainer/>
                <ReactQueryDevtools/>
            </QueryClientProvider>
        </AuthContextProvider>
        </body>
        </html>
    )
}
