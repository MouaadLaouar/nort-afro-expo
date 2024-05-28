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

                <div className="mt-3 space-x-2">
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@nort-afroexpo.com&su=Hello&body=I%20would%20like%20to%20contact%20you"
                        className="text-blue-600 text-sm sm:text-base "
                    >
                        contact@nort-afroexpo.com
                    </a>

                    <p className="text-blue-600 text-sm sm:text-base mt-2 ">
                        +213770952002
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
