'use client'

import { api } from "@/config/api";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import LoadingSpinner from "@/components/atoms/loadingspinner/loadingSpinner";
import { setCookie } from "nookies";
import { toast } from "react-toastify";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

const VerifyTokenPage = () => {
    const router: AppRouterInstance = useRouter();

    const magic_link_token = typeof window !== "undefined" ? new URLSearchParams(window.location.search).get('magic_link_token') : null;

    const verifyTokenMutation = async (token: string | null) => {
        if (!token) {
            toast(`Le lien de connexion est invalide ou a expiré. Veuillez demander un nouveau lien de connexion.`, { position: toast.POSITION.BOTTOM_CENTER });
            router.push('/');
            return;
        }

        try {
            const { data: { access_token, user } } = await api.post(`auth/login/${token}`);

            setCookie(undefined, 'access_token', access_token, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
            });

            setCookie(undefined, 'userId', user.id, {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
            });

            const paymentRes = await api.get(`check-payment`, {
                headers: {
                    'Authorization': `Bearer ${access_token}`
                }
            });

            if (paymentRes.data.order.status === "unpaid") {
                router.push('/dashboard/subscription');
            } else {
                router.push('/dashboard');
            }
        } catch (error: any) {
            if (error.response && error.response.status === 404) {
                router.push('/dashboard/subscription');
            } else {
                toast(`Une erreur inattendue s'est produite.`, { position: toast.POSITION.BOTTOM_CENTER });
            }
        }
    };

    useEffect(() => {
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
              <LoadingSpinner />
          </div>
      </div>
    );
};

export default VerifyTokenPage;
