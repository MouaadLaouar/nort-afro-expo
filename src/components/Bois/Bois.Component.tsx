import bois1 from "../../assets/bois1.png";
import bois2 from "../../assets/bois2.png";
import bois3 from "../../assets/bois3.png";

import bois4 from "../../assets/bois4.png";
import bois5 from "../../assets/bois5.png";

import PdfViewer from './pdfViewer';
import pdfUrl1 from '../../assets/CATALOGUE chatdécors.pdf';
import pdfUrl2 from '../../assets/CATALOGUE INTERPRINT.pdf';
const Bois = (): JSX.Element => {
    return (
        <>
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
                    <div className="lg:col-span-7">
                        <div className="grid grid-cols-12 gap-2 ps-4 sm:gap-6 items-center lg:-translate-x-10">
                            <div className="col-span-3">
                                <img
                                    className="rounded-xl "
                                    src={bois1}
                                    alt="Image Description"
                                />
                            </div>

                            <div className="col-span-4">
                                <img
                                    className="rounded-xl "
                                    src={bois2}
                                    alt="Image Description"
                                />
                            </div>

                            <div className="col-span-4">
                                <img
                                    className="rounded-xl"
                                    src={bois3}
                                    alt="Image Description"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
                        <div className="space-y-6 sm:space-y-8">
                            <div className="space-y-2 md:space-y-4">
                                <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 ">
                                    Pour le Bois
                                </h2>
                                <p className="text-gray-500 ">
                                    Pour le Bois Nous offrons la plus large
                                    gamme de bois de haute qualité sur le marché
                                    pour répondre aux besoins les plus
                                    exigeants, de la durabilité aux bois
                                    spécialisés.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h1 className="text-center text-3xl font-bold text-gray-800 mt-10 ">
                CATALOGUES
            </h1>

            <div className=" py-12 px-10 sm:px-32 md:px-48 grid grid-cols-12 gap-4 ">
                <div className="col-span-12 sm:col-span-6 flex flex-col items-center">
                    <div
                        style={{ backgroundColor: "#b8caae" }}
                        className=" rounded-lg border-2"
                    >
                        <img
                            className="rounded-xl"
                            src={bois4}
                            alt="Image Description"
                        />
                    </div>

                    <PdfViewer url={pdfUrl2} />
                </div>
                <div className="col-span-12 sm:col-span-6 flex flex-col items-center ">
                    <div className=" rounded-lg border-2">
                        <img
                            className="rounded-xl"
                            src={bois5}
                            alt="Image Description"
                        />
                    </div>

                    <PdfViewer url={pdfUrl1} />
                </div>
            </div>
        </>
    );
};

export default Bois;
