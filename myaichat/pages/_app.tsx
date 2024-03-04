import '../styles/tailwind.css';
import { Suspense } from 'react';

import { Provider } from 'react-redux';
import DefaultLayout from '../components/Layouts/DefaultLayout';
import store from '../store';
import { LanguageProvider } from '../contexts/LanguageContext';

export default function App({ Component, pageProps }: any) {
    return (
        <Provider store={store}>
            <LanguageProvider>
                <Suspense>
                    <DefaultLayout>
                        <Component {...pageProps} />
                    </DefaultLayout>
                </Suspense>
            </LanguageProvider>
        </Provider>
    );
}
