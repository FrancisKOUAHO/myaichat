"use client"

import * as React from "react"
import {TabsContent} from "@/components/ui/tabs"
import CustomLayout from "@/layouts/customLayout"
import Users from  "./users/page"
import Shops from  "./shops/page"
import Products from  "./products/page"
import Plans from  "./plans/page"
import Paiement from  "./paiements/page"
import Orders from  "./oders/page"
import Apercu from  "./apercu/page"





export default function DashboardPage() {
    return (
         <CustomLayout>
             <TabsContent value="apercu" className="space-y-4">
                 <Apercu/>
             </TabsContent>
             <TabsContent value="utilisateurs" className="space-y-4">
                 <Users/>
            </TabsContent>
             <TabsContent value="boutiques" className="space-y-4">
                 <Shops/>
             </TabsContent>
             <TabsContent value="produits">
                 <Products/>
             </TabsContent>
             <TabsContent value="commandes">
                 <Orders/>
             </TabsContent>
             <TabsContent value="abonnements">
                 <Plans/>
             </TabsContent>
             <TabsContent value="paiements">
                 <Paiement/>
             </TabsContent>
         </CustomLayout>
    )
}