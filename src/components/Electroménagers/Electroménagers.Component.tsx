import pic1 from "../../assets/elctro/pic1.jpg";
import pic2 from "../../assets/elctro/pic2.jpg";
import pic3 from "../../assets/elctro/pic3.jpg";
import pic4 from "../../assets/elctro/pic4.jpg";

const Elctro = (): JSX.Element => {
    return (
        <div className="max-w-[85rem] px-4 mx-auto">
            <div className="grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
                <div className="grid grid-cols-2 gap-2 p-20 order-2 md:order-1">
                    <img
                        className="rounded-xl w-full h-full object-cover"
                        src={pic1}
                        alt="Image 1"
                    />
                    <img
                        className="rounded-xl w-full h-full object-cover"
                        src={pic2}
                        alt="Image 2"
                    />
                    <img
                        className="rounded-xl w-full h-full object-cover"
                        src={pic3}
                        alt="Image 3"
                    />
                    <img
                        className="rounded-xl w-full h-full object-cover"
                        src={pic4}
                        alt="Image 4"
                    />
                </div>

                <div className="mt-5 sm:mt-10 lg:mt-0 order-1 md:order-2">
                    <div className="space-y-6 sm:space-y-8">
                        <div className="space-y-2 md:space-y-4">
                            <h2 className="font-bold text-3xl lg:text-4xl text-gray-800">
                                Clinker,
                            </h2>
                            <p className="text-gray-500">
                                Optez pour notre clinker de première qualité,
                                essentiel pour la production de ciments robustes
                                et durables, assurant une solidité
                                exceptionnelle à vos constructions. Nous offrons
                                la plus large gamme de clinker de haute qualité
                                sur le marché pour répondre aux besoins les plus
                                exigeants, de la durabilité aux
                                applications spécialisées.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Elctro;
