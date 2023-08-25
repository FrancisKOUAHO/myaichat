import Link from "next/link";

const FirstClass = () => {
    return (
        <section className="py-14 dark:bg-white/[0.03] lg:py-20"
                 style={{background: 'hsl(250, 24%, 9%)'}}
        >
            <div className="container">
                <div className="heading mb-5 text-center">
                    <h4 style={{color: 'white'}}>Face à des interrogations sans réponses ou des difficultés pour trouver
                        des produits, les clients risquent de laisser leurs paniers d'achats inachevés.</h4>
                </div>
                <div
                    className="mt-14 grid gap-4 rounded-2xl py-8 px-4 sm:p-10 lg:mt-20 lg:grid-cols-2"
                    style={{
                        background: 'radial-gradient(193.33% 779.99% at 81.67% -6.05%, rgba(71, 189, 255, 0.3) 0%, rgba(71, 189, 255, 0) 100%)',
                    }}
                >
                    <div className="heading mb-5 text-center ltr:lg:text-left rtl:lg:text-right">
                        <h4 style={{color: 'white', fontSize: '26px'}}>Optimisation des Conversions</h4>
                        <p className="mt-6 text-lg font-semibold" style={{color: 'white'}}>
                            60% des utilisateurs qui interagissent avec le chatbot convertissent, c'est ce que vous
                            offrent
                            les chatbots, selon une étude de Forrester. Les utilisateurs interagissant avec ces
                            assistants automatisés sont en effet nettement plus enclins à concrétiser leur achat,
                            augmentant ainsi l'engagement sur votre site.
                        </p>
                    </div>
                    <div className="lg:ltr:pl-24 lg:rtl:pr-24">
                        <img src="/assets/images/modern-saas/optimization.png" alt="" className="rounded-2xl"/>
                    </div>
                </div>
                <div
                    className="mt-10 grid gap-4 rounded-2xl py-8 px-4 sm:p-10 lg:mt-16 lg:grid-cols-2"
                    style={{
                        background: 'radial-gradient(193.33% 779.99% at 81.67% -6.05%, rgba(180, 118, 229, 0.3) 0%, rgba(180, 118, 229, 0) 100%)',
                    }}
                >
                    <div className="heading mb-5 text-center ltr:lg:text-left rtl:lg:text-right">
                        <h4 style={{color: 'white', fontSize: '26px'}}>Réponses Instantanées</h4>
                        <p className="mt-6 text-lg font-semibold" style={{color: 'white'}}>
                            90%.
                            des clients exigent des réponses immédiates à leurs questions. Avec des réponses rapides et
                            des recommandations personnalisées, l'expérience d'achat devient fluide, propice à la
                            conclusion de la vente.
                        </p>
                    </div>
                    <div className="lg:ltr:pl-24 lg:rtl:pr-24">
                        <img src="/assets/images/modern-saas/migrate-modernize.png" alt="" className="rounded-2xl"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FirstClass;
