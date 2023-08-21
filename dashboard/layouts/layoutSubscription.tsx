import '../styles/_main.scss'

import AuthGuard from "@/utils/AuthGuard";
import AuthContextProvider from "@/context/AuthContext";


const LayoutSubscription: ({children}: { children: any }) => JSX.Element = ({children}) => {

    return (
        <AuthContextProvider>
            <AuthGuard>
                {children}
            </AuthGuard>
        </AuthContextProvider>
    )
}

export default LayoutSubscription
