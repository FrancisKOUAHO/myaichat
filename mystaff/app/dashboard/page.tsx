"use client"

import Image from "next/image"
import * as React from "react"
import axios from "axios";
import {useEffect, useState} from "react";

import { Button } from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@/components/ui/card"
import {Tabs, TabsContent, TabsList, TabsTrigger,} from "@/components/ui/tabs"
import { CalendarDateRangePicker } from "@/app/dashboard/components/date-range-picker"
// import { MainNav } from "@/app/dashboard/components/main-nav"
import { Overview } from "@/app/dashboard/components/overview"
import { RecentSales } from "@/app/dashboard/components/recent-sales"
import { Search } from "@/app/dashboard/components/search"
import TeamSwitcher from "@/app/dashboard/components/team-switcher"
import { UserNav } from "@/app/dashboard/components/user-nav"


export default function DashboardPage() {
    const [totalRevenue, setTotalRevenue] = useState<number | null>(null);
    const [totalUsers, setTotalUsers] = useState<number | null>(null);
    const [totalOrders, setTotalOrders] = useState<number | null>(null);
    const [totalChatbots, setTotalChatbots] = useState<number | null>(null);
    const [monthlyRevenue, setMonthlyRevenue] = useState<number | null>(null);
    const [currentMonth, setCurrentMonth] = useState(null);
    const [annualRevenue, setAnnualRevenue] = useState<number | null>(null);

    useEffect(() => {

        // Récupérer le revenu total
        axios.get("https://api-admin.myaichat.io/api/payments/total-revenue")
            .then(response => {
                setTotalRevenue(response.data.totalRevenue);
            });
        // Récupérer le total des utilisateurs
        axios.get("https://api-admin.myaichat.io/api/stats/total-users").then(response => {
            setTotalUsers(response.data);
        });

        // Récupérer le total des chatbots actifs
        axios.get("https://api-admin.myaichat.io/api/stats/total-chatbots").then(response => {
            setTotalChatbots(response.data);
        });

        // Récupérer le total des orders
        axios.get("https://api-admin.myaichat.io/api/payments/total-orders").then(response => {
            setTotalOrders(response.data);
        });

        // // Récupérer les abonnements
        // axios.get("https://api-admin.myaichat.io/api/stats/subscriptions").then(response => {
        //     setTotalChatbots(response.data);
        // });

        // Récupérer le revenu mensuel
        axios.get("https://api-admin.myaichat.io/api/payments/monthly-revenue").then(response => {
            setMonthlyRevenue(response.data.monthlyRevenue);
            setCurrentMonth(response.data.currentMonth);
        });

        // Récupérer le revenu annuel
        axios.get("https://api-admin.myaichat.io/api/payments/annual-revenue").then(response => {
            setAnnualRevenue(response.data);
        });
    }, []);
    return (
        <>
            <div className="md:hidden">
                <Image
                    src="/examples/dashboard-light.png"
                    width={1280}
                    height={866}
                    alt="Dashboard"
                    className="block dark:hidden"
                />
                <Image
                    src="/examples/dashboard-dark.png"
                    width={1280}
                    height={866}
                    alt="Dashboard"
                    className="hidden dark:block"
                />
            </div>
            <div className="hidden flex-col md:flex">
                <div className="border-b">
                    <div className="flex h-16 items-center px-4">
                        {/*<TeamSwitcher />*/}
                        {/*<MainNav className="mx-6" />*/}
                        <div className="ml-auto flex items-center space-x-4">
                            <Search />
                            <UserNav />
                        </div>
                    </div>
                </div>
                <div className="flex-1 space-y-4 p-8 pt-6">
                    <div className="flex items-center justify-between space-y-2">
                        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                        <div className="flex items-center space-x-2">
                            {/*<CalendarDateRangePicker />*/}
                            {/*<Button>Download</Button>*/}
                        </div>
                    </div>
                    <Tabs defaultValue="overview" className="space-y-4">
                        <TabsList>
                            <TabsTrigger value="overview">Overview</TabsTrigger>
                            <TabsTrigger value="analytics" disabled>
                                Analytics
                            </TabsTrigger>
                            <TabsTrigger value="reports" disabled>
                                Reports
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="overview" className="space-y-4">
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
                                        {/*<p className="text-xs text-muted-foreground">*/}
                                        {/*    +180.1% from last month*/}
                                        {/*</p>*/}
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">Total Chatbots</CardTitle>
                                        {/*<svg*/}
                                        {/*    xmlns="http://www.w3.org/2000/svg"*/}
                                        {/*    viewBox="0 0 24 24"*/}
                                        {/*    fill="none"*/}
                                        {/*    stroke="currentColor"*/}
                                        {/*    strokeLinecap="round"*/}
                                        {/*    strokeLinejoin="round"*/}
                                        {/*    strokeWidth="2"*/}
                                        {/*    className="h-4 w-4 text-muted-foreground"*/}
                                        {/*>*/}
                                        {/*    <rect width="20" height="14" x="2" y="5" rx="2" />*/}
                                        {/*    <path d="M2 10h20" />*/}
                                        {/*</svg>*/}
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
                                        {/*<p className="text-xs text-muted-foreground">*/}
                                        {/*    +19% from last month*/}
                                        {/*</p>*/}
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">
                                            Mois en cours : <span className="text-sm font-medium">{currentMonth}</span>
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
                                        {/*<p className="text-xs text-muted-foreground">*/}
                                        {/*    +201 since last hour*/}
                                        {/*</p>*/}
                                    </CardContent>
                                </Card>
                            </div>
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                                <Card className="col-span-4">
                                    <CardHeader>
                                        <CardTitle>Overview</CardTitle>
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
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </>
    )
}