// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <title>Myaichat | Accueil</title>
                <meta charSet='UTF-8' />
                <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                <link rel='icon' type='image/png' href='/assets/favicon.png' />
                <link rel='icon' type='icon' href='/assets/images/favicon.png' />
                <link href='https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;700;800&display=swap'
                      rel='stylesheet' />
            </Head>
            <body>
            <Main />
            <NextScript />
            <script src='https://connect.myaichat.io/index.js' />
            {/*<script
                src='http://localhost:63342/myaichat/chatbot_loader/index.js?_ijt=o66s8l90nlgi9i1kbclig0bkm6&_ij_reload=RELOAD_ON_SAVE' />*/}
            </body>
        </Html>
    )
}
