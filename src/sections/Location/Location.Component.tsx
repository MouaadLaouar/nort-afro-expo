const Location = (): JSX.Element => {
    return (
        <div className="min-h-screen" id="location">
            <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
                <div className="relative md:p-16">
                    <div className="lg:flex gap-8 block">
                        <div className="mb-10 lg:mb-0 col-span-12 lg:col-start-8  w-fit">
                            <nav
                                className="grid gap-4 mt-5 md:mt-2"
                                aria-label="Tabs"
                                role="tablist"
                            >
                                <button
                                    type="button"
                                    className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-center bg-slate-50 hover:bg-gray-200 md:p-2 rounded-xl"
                                    id="tabs-with-card-item-3"
                                    data-hs-tab="#tabs-with-card-3"
                                    aria-controls="tabs-with-card-3"
                                    role="tab"
                                >
                                    <span className="flex flex-col items-center p-4">
                                        <svg
                                            width="65"
                                            height="65"
                                            viewBox="0 0 65 65"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <svg
                                                width="50"
                                                height="50"
                                                viewBox="0 0 65 65"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g clipPath="url(#clip0_135_5)">
                                                    <rect
                                                        width="65"
                                                        height="65"
                                                        fill="white"
                                                    />
                                                    <path
                                                        d="M54.9467 46.7566C60.4934 48.5766 63.9167 51.0899 63.9167 53.8199C63.9167 59.3883 49.8334 63.9166 32.5 63.9166C15.1667 63.9166 1.08337 59.3883 1.08337 53.8199C1.08337 51.0683 4.50671 48.5766 10.0534 46.7566"
                                                        stroke="#20458C"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M32.5 1.08325C27.3972 1.08325 22.5035 3.11032 18.8953 6.71852C15.2871 10.3267 13.26 15.2205 13.26 20.3233C13.26 39.5633 32.5 54.9899 32.5 54.9899C32.5 54.9899 51.74 39.6066 51.74 20.3233C51.74 17.7966 51.2424 15.2947 50.2755 12.9604C49.3086 10.6261 47.8913 8.50512 46.1047 6.71852C44.3181 4.93192 42.1971 3.51471 39.8628 2.54781C37.5285 1.58091 35.0266 1.08325 32.5 1.08325Z"
                                                        stroke="#20458C"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M32.5 22.7498C35.4916 22.7498 37.9167 20.3247 37.9167 17.3332C37.9167 14.3416 35.4916 11.9165 32.5 11.9165C29.5085 11.9165 27.0834 14.3416 27.0834 17.3332C27.0834 20.3247 29.5085 22.7498 32.5 22.7498Z"
                                                        stroke="#20458C"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_135_5">
                                                        <rect
                                                            width="65"
                                                            height="65"
                                                            fill="white"
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </svg>

                                        <h1 className="mt-4 font-semibold hs-tab-active:text-blue-600 text-gray-800 text-center">
                                            15 rue ben abdelmalek l'avant port.
                                            Annaba 23003, Algérie
                                        </h1>
                                    </span>
                                </button>

                                <button
                                    type="button"
                                    className="hs-tab-active:bg-white text-center hs-tab-active:shadow-md hs-tab-active:hover:border-transparent bg-slate-50 hover:bg-gray-200 md:p-2 rounded-xl"
                                    id="tabs-with-card-item-3"
                                    data-hs-tab="#tabs-with-card-3"
                                    aria-controls="tabs-with-card-3"
                                    role="tab"
                                >
                                    <h4 className="block font-semibold uppercase hs-tab-active:text-blue-600 text-gray-800 text-center">
                                    directeur général
                                    </h4>
                                    <h1 className="block font-semibold uppercase hs-tab-active:text-blue-600 text-gray-800 text-center">
                                        MR. Benouhiba rochdi
                                    </h1>
                                    <div className="mt-4 text-center">
                                        <span className="block text-gray-800">
                                        DG@group-afro-build.com
                                        </span>
                                        <span className="block mt-1 text-gray-800">
                                            +213(0) 770 95 20 02
                                        </span>
                                    </div>
                                </button>

                                <button
                                    type="button"
                                    className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent bg-slate-50 hover:bg-gray-200 md:p-2 rounded-xl"
                                    id="tabs-with-card-item-3"
                                    data-hs-tab="#tabs-with-card-3"
                                    aria-controls="tabs-with-card-3"
                                    role="tab"
                                >
                                    <h4 className="block font-semibold hs-tab-active:text-blue-600 text-gray-800 text-center">
                                        DIRECTRICE COMMERCIALE
                                    </h4>
                                    <h1 className="block font-semibold hs-tab-active:text-blue-600 text-gray-800 text-center">
                                        MLLE. BOUAITA HADDA
                                    </h1>
                                    <div className="mt-4 text-center">
                                        <span className="block text-gray-800">
                                            commercial@nort-afroexpo.com
                                        </span>
                                        <span className="block mt-1 text-gray-800">
                                            +213(0) 770 992 202
                                        </span>
                                    </div>
                                </button>
                            </nav>
                        </div>

                        <div className="lg:col-span-7 col-span-12 mt-6 flex justify-center">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3190.4434260205417!2d7.769722!3d36.90366100000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzbCsDU0JzEzLjIiTiA3wrA0NicxMS4wIkU!5e0!3m2!1sfr!2sdz!4v1716858295882!5m2!1sfr!2sdz"
                                width="600"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>

                    <div className="absolute inset-0 grid grid-cols-12 size-full">
                        <div className="col-span-full lg:col-span-7 lg:col-start-6 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Location;
