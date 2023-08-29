import {UserAuthForm} from "@/components/user-auth-form";

const Home = () => {
    return (
        <div
            className="container relative hidden flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0"
            style={{
                background: "linear-gradient(327.21deg, rgba(33, 0, 75, 0.24) 3.65%, rgba(60, 0, 136, 0) 40.32%), linear-gradient(245.93deg, rgba(209, 21, 111, 0.16) 0%, rgba(209, 25, 80, 0) 36.63%), linear-gradient(147.6deg, rgba(58, 19, 255, 0) 29.79%, rgba(98, 19, 255, 0.01) 85.72%)",
                backgroundColor: "#13111C",
                height: "100vh"
            }}>
            <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
                <div className="absolute inset-0" style={{
                    backgroundColor: "#13111C"
                }}/>
                <div className="relative z-20 flex items-center text-lg font-medium">
                    <img src="/myaichat.png" alt="Description" className="h-6 w-6 mr-2"/>
                    MyaiChat Corp
                </div>
                <div className="relative z-20 mt-[10%]">
                    <img src="/banner-img.png" alt="Description"/>
                </div>
            </div>
            <div className="lg:p-8">
                <div>
                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                        <div className="flex flex-col space-y-2 text-center">
                            <h1 className="text-3xl font-bold tracking-tight text-white">
                                Se connecter
                            </h1>
                            <p className="text-sm text-muted-foreground text-white">
                                Bienvenue !
                                Veuillez saisir votre adresse e-mail et un compte sera créé pour vous.
                            </p>
                        </div>
                        <UserAuthForm/>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Home;
