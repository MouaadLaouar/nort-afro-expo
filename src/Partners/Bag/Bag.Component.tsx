import globalBagLogo from "../../assets/globalBagLogo.jpg";

const GloBag = (): JSX.Element => {
    return (
        <div className="max-w-[85rem] px-4 mx-auto">
            <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
                <div>
                    <img
                        className="rounded-xl"
                        src={globalBagLogo}
                        alt="Global Bag Logo"
                    />
                </div>

                <div className="mt-5 sm:mt-10 lg:mt-0">
                    <div className="space-y-6 sm:space-y-8">
                        <div className="space-y-2 md:space-y-4">
                            <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 ">
                                Bienvenue chez GLOBAL BAG,
                            </h2>
                            <p className="text-gray-500 ">
                                votre partenaire de confiance pour l'achat de
                                BigBags de haute qualité. Spécialisés dans la
                                vente de BigBags, nous nous engageons à fournir
                                des solutions d'emballage robustes et fiables
                                adaptées à vos besoins spécifiques en matière de
                                stockage et de transport.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GloBag;
