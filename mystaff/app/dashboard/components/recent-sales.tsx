import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {useEffect, useState} from "react";
import axios from "axios";

export function RecentSales() {
    const [LastOrders, setLastOrders] = useState<any>(null);


    useEffect(() => {
        // Récupérer les derniers des abonnements
        axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/stats/subscriptions`).then(response => {
            const data = response.data;

            // Trier les données
            const sortedData = data.sort((a: { userCreatedAt: string | number | Date | null; }, b: { userCreatedAt: string | number | Date | null; }) => {
                if (a.userCreatedAt === null) return 1;
                if (b.userCreatedAt === null) return -1;
                return new Date(b.userCreatedAt).getTime() - new Date(a.userCreatedAt).getTime();
            });

            // Mettre à jour l'état avec les données triées
            setLastOrders(sortedData);
        });
    }, []);
    return (
        <div className="space-y-8 overflow-y-auto" style={{ maxHeight: '400px' }}>
            {
                LastOrders && LastOrders.map((LastOrder: any, index: number) => (
                    <div className="flex items-center" key={index}>
                        <Avatar className="h-9 w-9">
                            <AvatarImage src="/avatars/01.png" alt="Avatar" />
                            <AvatarFallback>{index + 1}</AvatarFallback>
                        </Avatar>
                        <div className="ml-4 space-y-1">
                            <p className="text-sm font-medium leading-none">{LastOrder.email}</p>
                            <p className="text-sm text-muted-foreground">{LastOrder.planName} par {LastOrder.planInterval}</p>
                            {/*<p className="text-sm text-muted-foreground">{LastOrder.planInterval}</p>*/}
                        </div>
                        <div className="ml-auto font-medium">+€{LastOrder.planPrice}</div>
                    </div>
                ))
            }
        </div>
    )
}