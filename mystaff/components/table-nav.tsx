import {TabsList, TabsTrigger} from "@/components/ui/tabs";
import * as React from "react";

const tableNav = () => {
    return(
        <TabsList>
            <TabsTrigger value="apercu">
                Apercu
            </TabsTrigger>
            <TabsTrigger value="facturations">
                Facturations
            </TabsTrigger>
            <TabsTrigger value="utilisateurs">
                Utilisateurs
            </TabsTrigger>
            <TabsTrigger value="boutiques">
                Boutiques
            </TabsTrigger>
            <TabsTrigger value="produits">
                Produits
            </TabsTrigger>
            <TabsTrigger value="commandes">
                Commandes
            </TabsTrigger>
            <TabsTrigger value="abonnements">
                Abonnements
            </TabsTrigger>
            <TabsTrigger value="paiements">
                Paiements
            </TabsTrigger>
        </TabsList>
    )
}

export default tableNav
