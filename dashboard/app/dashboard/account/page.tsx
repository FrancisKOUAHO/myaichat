"use client"

import React from "react";

import LayoutCustom from "@/layouts/layoutCustom";
import {useQuery} from "@tanstack/react-query";
import {api} from "@/config/api";
import {differenceInDays} from 'date-fns';
import {getCookie} from "cookies-next";
import Link from "next/link";

const Page = () => {
    const {data: paymentInfo, isLoading, isFetching} = useQuery({
        queryKey: ["check-payment"],
        queryFn: () => api.get(`check-payment`),
        enabled: Boolean(getCookie("access_token")),
    });

    return (
        <LayoutCustom>
            <div className="p-20 mx-auto w-full overflow-y-auto">
                <h3 className="text-base font-semibold leading-6 text-gray-900">{"Abonnement et facturation"}</h3>
                <dl
                    className="mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-3 md:divide-x md:divide-y-0">
                    <div className="px-6 py-5 sm:p-8">
                        <dt className="text-xs font-normal text-gray-400">{"n° abonnement"}</dt>
                        <dt className="text-[14px] mt-2 font-semibold text-gray-900">{paymentInfo && paymentInfo.data.payment_status.st_sub_id}</dt>
                        <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                        </dd>
                    </div>
                    <div className="px-6 py-5 sm:p-8">
                        <dt className="text-xs font-normal text-gray-400">Paiement</dt>
                        <div className="flex items-center">
                            {paymentInfo && paymentInfo.data.payment_status.trial_end > paymentInfo.data.payment_status.trial_end ? (
                                <dt className="text-[14px] mt-2 font-semibold text-gray-900">€{paymentInfo.data.payment_status.total}</dt>
                            ) : (
                                <dt className="text-[14px] mt-2 font-semibold text-gray-900">
                                    {paymentInfo && paymentInfo.data.payment_status.trial_end
                                        ? `${differenceInDays(new Date(paymentInfo.data.payment_status.trial_end), new Date())} jours restants`
                                        : "Période d'essai non définie"}
                                </dt>
                            )}
                        </div>
                    </div>
                    <div className="px-6 py-5 sm:p-8 flex items-center justify-center gap-2">
                        <Link href="#" className="text-xs font-normal text-gray-400">Annuler l'abonnement</Link>
                        <Link href="#" className="text-xs font-normal text-indigo-600">Upgrade</Link>
                    </div>
                </dl>
            </div>
        </LayoutCustom>
    )
}

export default Page
