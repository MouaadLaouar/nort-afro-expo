import cementt1 from "../../assets/cement1.jpg";
import cementt2 from "../../assets/cement2.png";
import cementt3 from "../../assets/cement3.jpg";

import cementt4 from "../../assets/cement4.png";
import cementt5 from "../../assets/cement5.png";
import cementt6 from "../../assets/cement6.png";

const Ciment = (): JSX.Element => {
    return (
        <>
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
                    <div className="lg:col-span-7">
                        <div className="grid grid-cols-12 gap-2 ps-4 sm:gap-6 items-center lg:-translate-x-10">
                            <div className="col-span-3">
                                <img
                                    className="rounded-xl "
                                    src={cementt1}
                                    alt="Image Description"
                                />
                            </div>

                            <div className="col-span-4">
                                <img
                                    className="rounded-xl "
                                    src={cementt3}
                                    alt="Image Description"
                                />
                            </div>

                            <div className="col-span-4">
                                <img
                                    className="rounded-xl"
                                    src={cementt2}
                                    alt="Image Description"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
                        <div className="space-y-6 sm:space-y-8">
                            <div className="space-y-2 md:space-y-4">
                                <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 ">
                                    Pour le ciment
                                </h2>
                                <p className="text-gray-500 ">
                                    Nous proposons la plus large gamme de
                                    ciments de haute qualité sur le marché pour
                                    répondre aux besoins les plus exigeants,de
                                    la durabilité aux ciments spéciaux
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h1 className="text-center text-3xl font-bold text-gray-800 mt-10">
                Les FICHE TECHNIQUE / FICHE DE QUALITE
            </h1>

            <div className=" py-12 px-8 grid grid-cols-12 ">
                <div className="col-span-12 md:col-span-4">
                    <img
                        className="rounded-xl"
                        src={cementt4}
                        alt="Image Description"
                    />
                </div>
                <div className="col-span-12 md:col-span-4">
                    <img
                        className="rounded-xl"
                        src={cementt5}
                        alt="Image Description"
                    />
                </div>
                <div className="col-span-12 md:col-span-4">
                    <img
                        className="rounded-xl"
                        src={cementt6}
                        alt="Image Description"
                    />
                </div>
            </div>
        </>
    );
};

export default Ciment;
