'use client'

import {api} from "@/config/api";
import {useEffect} from "react";
import {useRouter} from "next/navigation";
import LoadingSpinner from "@/components/atoms/loadingspinner/loadingSpinner";
import {setCookie} from "nookies";
import {toast} from "react-toastify";

import {AppRouterInstance} from "next/dist/shared/lib/app-router-context";
import {AxiosResponse} from "axios";

const VerifyTokenPage = () => {
    const router: AppRouterInstance = useRouter();

    const magic_link_token: any = typeof window !== "undefined" ? new URLSearchParams(window.location.search).get('magic_link_token') : null;

    const verifyTokenMutation = (token: string) => {
        api.post(`auth/login/${token}`)
            .then((res: AxiosResponse) => {
                if (res.status === 200) {
                    setCookie(undefined, 'access_token', res.data.access_token, {
                        maxAge: 30 * 24 * 60 * 60,
                        path: '/',
                    });
                    setCookie(undefined, 'userId', res.data.user.id, {
                        maxAge: 30 * 24 * 60 * 60,
                        path: '/',
                    });

                    api.get(`check-payment`, {
                        headers: {
                            'Authorization': `Bearer ${res.data.access_token}`
                        }
                    })
                        .then((paymentRes) => {
                            if (paymentRes.data.order.status === "unpaid") {
                                router.push('/dashboard/subscription');
                            } else {
                                router.push('/dashboard');
                            }
                        })
                        .catch((paymentError) => {
                            if (paymentError.response && paymentError.response.status === 404) {
                                router.push('/dashboard/subscription');
                            } else {
                                toast(`TODO`, {position: toast.POSITION.BOTTOM_CENTER});
                            }
                        });
                }
            })
            .catch((error) => {
                toast(`Le lien de connexion est invalide ou a expiré. Veuillez demander un nouveau lien de connexion.`, {position: toast.POSITION.BOTTOM_CENTER});
                router.push('/');
            });
    };


    useEffect((): void => {
        verifyTokenMutation(magic_link_token);
    }, [magic_link_token]);

    return (
        <div
            className="flex min-h-full flex-col text-center justify-center sm:px-6 lg:p-8 p-8 h-[100vh]"
            style={{
                background: `linear-gradient(327.21deg, rgba(33, 0, 75, 0.24) 3.65%, rgba(60, 0, 136, 0) 40.32%), linear-gradient(245.93deg, rgba(209, 21, 111, 0.16) 0%, rgba(209, 25, 80, 0) 36.63%), linear-gradient(147.6deg, rgba(58, 19, 255, 0) 29.79%, rgba(98, 19, 255, 0.01) 85.72%), #13111C`,
            }}
        >
            <div className="m-auto justify-center">
                <LoadingSpinner
                />
            </div>
        </div>
    );
};

export default VerifyTokenPage;