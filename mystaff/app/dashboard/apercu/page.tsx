"use client"

import CustomLayout from "@/layouts/customLayout";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Overview} from "@/components/overview";
import {RecentSales} from "@/components/recent-sales";
import * as React from "react";
import axios from "axios";
import {useState, useEffect} from "react";


const page = () => {
    const [totalRevenue, setTotalRevenue] = useState<number | null>(null);
    const [totalUsers, setTotalUsers] = useState<number | null>(null);
    const [totalOrders, setTotalOrders] = useState<number | null>(null);
    const [totalChatbots, setTotalChatbots] = useState<number | null>(null);
    const [monthlyRevenue, setMonthlyRevenue] = useState<number | null>(null);
    const [currentMonth, setCurrentMonth] = useState(null);
    const [annualRevenue, setAnnualRevenue] = useState<number | null>(null);

    useEffect(() => {

        // Récupérer le revenu total https://api-admin.myaichat.io
        axios.get("http://localhost:8080/api/payments/total-revenue")
            .then(response => {
                setTotalRevenue(response.data.totalRevenue);
            });
        // Récupérer le total des utilisateurs
        axios.get("http://localhost:8080/api/stats/total-users").then(response => {
            setTotalUsers(response.data);
        });

        // Récupérer le total des chatbots actifs
        axios.get("http://localhost:8080/api/stats/total-chatbots").then(response => {
            setTotalChatbots(response.data);
        });

        // Récupérer le total des orders
        axios.get("http://localhost:8080/api/payments/total-orders").then(response => {
            setTotalOrders(response.data);
        });

        // Récupérer le revenu mensuel
        axios.get("http://localhost:8080/api/payments/monthly-revenue").then(response => {
            setMonthlyRevenue(response.data.monthlyRevenue);
            setCurrentMonth(response.data.currentMonth);

        });

        // Récupérer le revenu annuel
        axios.get("http://localhost:8080/api/payments/annual-revenue").then(response => {
            setAnnualRevenue(response.data);
        });
    }, []);

    return(
        <>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Revenue Total
                        </CardTitle>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="h-4 w-4 text-muted-foreground"
                        >
                            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                        </svg>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">€{totalRevenue}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Utilisateurs
                        </CardTitle>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="h-4 w-4 text-muted-foreground"
                        >
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{totalUsers}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Chatbots</CardTitle>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="h-4 w-4 text-muted-foreground"
                        >
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                        </svg>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{totalChatbots}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Mois de <span className="text-sm font-medium">{currentMonth}</span>
                        </CardTitle>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="h-4 w-4 text-muted-foreground"
                        >
                            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                        </svg>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">€{monthlyRevenue}</div>
                    </CardContent>
                </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>{"Chiffre d'affaires annuel"}</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <Overview />
                    </CardContent>
                </Card>
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Dernières ventes</CardTitle>
                        <CardDescription>
                            Vous avez réalisé {totalOrders} vente ce mois-ci.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <RecentSales />
                    </CardContent>
                </Card>
            </div>
        </>
    )
}

export default page