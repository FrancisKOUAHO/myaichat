import '../styles/tailwind.css';
import type { AppProps } from 'next/app';
import { Suspense } from 'react';

import { Provider } from 'react-redux';
import Head from 'next/head';
import DefaultLayout from "../components/Layouts/DefaultLayout";
import store from "../store";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Suspense>
                <DefaultLayout>
                    <Component {...pageProps} />
                </DefaultLayout>
            </Suspense>
        </Provider>
    );
}
