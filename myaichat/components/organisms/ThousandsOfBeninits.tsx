const ThousandsOfBeninits = () => {
    return (
        <section className="py-14 lg:py-20"
                 style={{
                     // background: 'linear-gradient(180deg, #13111C 0%, #39112D 100%)',
                 }}>
            <div className="container">
                <div className="relative">
                    <div className="lg:w-2/3">
                        <div className="heading mb-5 text-center ltr:lg:text-left rtl:lg:text-right">
                            <h6 className="!text-secondary">DES MILLIERS D'AVANTAGES</h6>
                            <h4 style={{color: 'white'}}>Nous facilitons le suivi de toutes les analyses des
                                utilisateurs</h4>
                            <p className="mt-4 text-lg font-semibold" style={{color: 'white'}}>
                                Nous analysons étape par étape chacune de vos plateformes. Vous obtiendrez les meilleurs
                                rapports et analyses. Nous aidons le client avec notre talentueux expert.
                            </p>
                        </div>
                        <ul className="mt-14 space-y-14 lg:w-2/3" style={{color: 'white'}}>
                            <li className="flex gap-5 sm:gap-8">
                                <div
                                    className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-primary p-2 sm:h-[72px] sm:w-[72px]">
                                    <img src="/assets/images/modern-saas/tracking-icon.svg" alt=""/>
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-[22px] font-extrabold text-black dark:text-white"
                                        style={{color: 'white'}}>Suivi avancé
                                    </h4>
                                    <p className="pt-4 text-lg font-semibold">
                                        Utilisez nos outils d'analyse, de reporting et d'optimisation assistée par l'IA
                                        pour surveiller les tendances et suivre.
                                    </p>
                                </div>
                            </li>
                            <li className="flex gap-5 sm:gap-8">
                                <div
                                    className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-secondary p-2 sm:h-[72px] sm:w-[72px]">
                                    <img src="assets/images/modern-saas/monitoring-icon.svg" alt=""/>
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-[22px] font-extrabold text-black dark:text-white"
                                        style={{color: 'white'}}>Surveillance approfondie</h4>
                                    <p className="pt-4 text-lg font-semibold">Le suivi du temps n'a jamais été aussi
                                        simple. Laissez simplement le chronomètre fonctionner.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <img
                        src="/assets/images/modern-saas/benifits-img.png"
                        alt=""
                        className="top-0 mx-auto mt-10 h-full ltr:-right-[125px] rtl:-left-[125px] lg:absolute lg:mt-0"
                    />
                </div>
            </div>
        </section>
    )
}

export default ThousandsOfBeninits;
