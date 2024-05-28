import globalBuildLogo from "../../assets/globalBuildLogo.jpg";


const GloBuild = (): JSX.Element => {
    return (
        <div className="max-w-[85rem] px-4 pt-0  mx-auto">
            <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
                <div>
                    <img
                        className="rounded-xl"
                        src={globalBuildLogo}
                        alt="Global Bag Logo"
                    />
                </div>

                <div className="mt-5 sm:mt-10 lg:mt-0">
                    <div className="space-y-6 sm:space-y-8">
                        <div className="space-y-2 md:space-y-4">
                            <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 ">
                                Bienvenue chez GLO BUILD,
                            </h2>
                            <p className="text-gray-500 ">
                                votre partenaire de confiance pour tous vos
                                besoins en matériaux de construction.
                                Spécialisés dans la vente de ciment de clinker
                                et d'autres produits essentiels pour la
                                construction, nous nous engageons à fournir des
                                matériaux de haute qualité, adaptés à tous vos
                                projets de construction, qu'ils soient
                                résidentiels, commerciaux ou industriels.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GloBuild;
