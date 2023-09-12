"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Users = {
    id: number
    email: string
    rememberToken: string
    magicLinkToken: string
    magicLinkTokenExpiresAt: string
    createdAt: string
    updatedAt: string
    subscriptionActive: "success" | "failed"
    planId: number
    emailVerifiedAt: number
}

export const columns: ColumnDef<Users>[] = [
    {
        accessorKey: "id",
        header: "Id",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "rememberToken",
        header: "RememberToken",
    },
    {
        accessorKey: "magicLinkToken",
        header: "MagicLinkToken",
    },
    {
        accessorKey: "magicLinkTokenExpiresAt",
        header: "MagicLinkTokenExpiresAt",
    },
    {
        accessorKey: "createdAt",
        header: "CreatedAt",
    },
    {
        accessorKey: "updatedAt",
        header: "UpdatedAt",
    },
    {
        accessorKey: "planId",
        header: "Abonnement",
    },
    {
        accessorKey: "subscriptionActive",
        header: "Status Abonnement",
    },
    {
        accessorKey: "emailVerifiedAt",
        header: "emailVerifiedAt",
    },
]

export default columns
