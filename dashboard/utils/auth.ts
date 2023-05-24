'use client'

import { useRouter } from 'next/navigation';
import {useAuth} from "@/context/AuthContext";

export const IsAuthorized = async (role: string) => {
  const {user} = useAuth();
  const router = useRouter();

  if (!process.browser) {
    return false;
  }

  const getUserRole = user?.role

  if (!getUserRole || getUserRole !== role) {
    await router.push('/')
    return false;
  }


  return true;
};

