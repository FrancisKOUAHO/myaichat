import Image from "next/image";
import {Search} from "@/components/search";
import {UserNav} from "@/components/user-nav";
import {Tabs} from "@/components/ui/tabs";
import * as React from "react";
import TableNav from "@/components/table-nav";

export default function customLayout({children} : {children:any}){
    return(
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
                        </div>
                    </div>
                    <Tabs defaultValue="apercu" className="space-y-4">
                        <TableNav/>
                        {children}
                    </Tabs>
                </div>
            </div>
        </>
    )

}