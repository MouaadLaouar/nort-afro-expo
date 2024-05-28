import globalBagLogo from "../../assets/globalBagLogo.jpg";

import bag1 from "../../assets/bag1.png";
import bag2 from "../../assets/bag2.png";

import PdfViewer from "./pdfViewer";
import pdfUrl1 from "../../assets/OFFRE DE SERVICE GLOBAL BAG.pdf";
import pdfUrl2 from "../../assets/offre de service global.pdf";

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

            <div className=" pb-10 py-4 px-10 sm:px-32 md:px-48 grid grid-cols-12 gap-4 ">
                <div className="col-span-12 sm:col-span-6 flex flex-col items-center">
                    <div
                        style={{ backgroundColor: "#b8caae" }}
                        className=" rounded-lg border-2"
                    >
                        <img
                            className="rounded-xl"
                            src={bag1}
                            alt="Image Description"
                        />
                    </div>

                    <PdfViewer url={pdfUrl2} />
                </div>
                <div className="col-span-12 sm:col-span-6 flex flex-col items-center ">
                    <div className=" rounded-lg border-2">
                        <img
                            className="rounded-xl"
                            src={bag2}
                            alt="Image Description"
                        />
                    </div>

                    <PdfViewer url={pdfUrl1} />
                </div>
            </div>
        </div>
    );
};

export default GloBag;
