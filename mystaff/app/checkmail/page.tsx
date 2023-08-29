import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {Terminal} from "lucide-react";

const Page = () => {
    return(
        <div className="flex flex-col items-start justify-center p-4 lg:p-10"
             style={{
                 background: "linear-gradient(327.21deg, rgba(33, 0, 75, 0.24) 3.65%, rgba(60, 0, 136, 0) 40.32%), linear-gradient(245.93deg, rgba(209, 21, 111, 0.16) 0%, rgba(209, 25, 80, 0) 36.63%), linear-gradient(147.6deg, rgba(58, 19, 255, 0) 29.79%, rgba(98, 19, 255, 0.01) 85.72%)",
                 backgroundColor: "#13111C",
                height: "100vh"
             }}
        >
            <div className="absolute p-9 top-4 left-4 z-20 flex items-center text-lg font-medium text-white">
                <img src="/myaichat.png" alt="Description" className="h-6 w-6 mr-2" />
                MyaiChat Corp
            </div>
            <div className="self-center mt-auto mb-auto z-20">
                <Alert className="bg-base-gradient bg-cover bg-gradient-to-br from-start1 to-end1 bg-gradient-to-tl from-start2 to-end2 bg-gradient-to-tr border border-white p-4">
                    <Terminal className="h-4 w-4" style={{color:"white"}}/>
                    <AlertTitle className="text-white">Succès!</AlertTitle>
                    <AlertDescription className="text-white">
                        {"Un lien de connexion a été envoyé sur votre adresse mail."}
                    </AlertDescription>
                </Alert>
            </div>
        </div>)
}

export default Page
