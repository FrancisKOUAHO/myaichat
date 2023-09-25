"use client"

import * as React from "react"
import {TabsContent} from "@/components/ui/tabs"
import CustomLayout from "@/layouts/customLayout"
import Users from "@/components/pages/users/page"
import Shops from "@/components/pages/shops/page"
import Products from "@/components/pages/products/page"
import Plans from "@/components/pages/plans/page"
import Paiement from "@/components/pages/paiements/page"
import Orders from "@/components/pages/oders/page"
import Apercu from "@/components/pages/apercu/page"
import Facturations from "@/components/pages/facturations/page"


export default function DashboardPage() {
    return (
         <CustomLayout>
             <TabsContent value="apercu" className="space-y-4">
                 <Apercu/>
             </TabsContent>
             <TabsContent value="facturations" className="space-y-4">
                 <Facturations/>
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