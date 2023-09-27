import {
    Avatar,
    AvatarFallback,
} from "@/components/ui/avatar"
import {useEffect, useState} from "react";
import {api} from "@/config/api";


export function RecentSales() {
    const [LastOrders, setLastOrders] = useState<any>(null);

    const fetchLastOrders = async () => {
        try {
            const response = await api.get("stats/subscriptions");
            const data = response.data;

            const sortedData = data.sort((a : any, b : any) => {
                if (a.userCreatedAt === null) return 1;
                if (b.userCreatedAt === null) return -1;
                return new Date(b.userCreatedAt).getTime() - new Date(a.userCreatedAt).getTime();
            });

            return sortedData;
        } catch (error) {
            console.error("Erreur lors de la récupération des données des abonnements :", error);
            throw error;
        }
    }

    useEffect(() => {
        fetchLastOrders();
    }, []);

        return (
        <div className="space-y-8 overflow-y-auto" style={{ maxHeight: '400px' }}>
            {
                LastOrders && LastOrders.map((LastOrder: any, index: number) => (
                    <div className="flex items-center" key={index}>
                        <Avatar className="h-9 w-9">
                            {/*<AvatarImage src="/avatars/01.png" alt="Avatar" />*/}
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