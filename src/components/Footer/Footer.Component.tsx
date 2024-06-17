const Footer = (): JSX.Element => {
    return (
        <footer
            className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto bg-slate-100"
            id="footer"
        >
            <div className="text-center">
                <div className="mt-3">
                    <p className="text-gray-500 dark:text-neutral-500">
                        (( E.U.R.L
                        <a
                            className="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400"
                            href="#"
                        >
                            {" "}
                            NORT AFRO
                        </a>{" "}
                        EXPO ))
                    </p>
                </div>

                <div className="mt-3">
                    <p className="text-gray-500 dark:text-neutral-500">
                        © NORT AFRO EXPO. 2024 . All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
