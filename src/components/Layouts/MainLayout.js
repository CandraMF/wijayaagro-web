import Head from 'next/head'
import Link from 'next/link'

const MainLayout = ({ head, children }) => {
    return (
        <div>
            <Head>
                <title>{head}</title>
            </Head>

            <div className="dark:bg-amber-600 shadow">
                <div className="max-w-7x1 py-2 px-12 sm:px-6 lg:px-20 ml-12 ">
                    <div className="flex items-center space-x-6  ">
                        <div className="flex items-center ">
                            <h1 className="text-3xl font-bold text-gray-900"></h1>

                        </div>
                        <div className="flex items-center  md:w-auto space">
                            <img
                                className="h-5 w-5"
                                src="/images/envelope.png"
                                alt=""

                            />
                            <a
                                href="#"
                                className=" text-white px-3 py-2 h-9 rounded-md text-sm font-medium"
                            >
                                wijayaagri@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center  md:w-auto">
                            <img
                                className="h-4"
                                src="/images/phone-call.png"
                                alt=""

                            />
                            <a
                                href="#"
                                className=" text-white px-3 py-2 h-8 rounded-md text-sm font-medium"
                            >
                                08121919191
                            </a>
                        </div>
                        <div className="max-w-7x1 sm:px-5 ml-20">
                            <div className="max-w-7x1 ml-20">
                                <div className="ml-20 ">
                                    <div div className=" text-white flex items-center md:w-auto ml-20 ">
                                        Find Us :
                                        <div className="backdrop-blur-sm bg-white/30  px-2 py-1 rounded ml-2 space-x-4">
                                            <img
                                                className="h-5 w-5 "
                                                src="/images/envelope.png"
                                                alt=""

                                            />

                                        </div>
                                        <div className="backdrop-blur-sm bg-white/30  px-2 py-1 rounded ml-2">
                                            <img
                                                className="h-5 w-5 "
                                                src="/images/envelope.png"
                                                alt=""

                                            />
                                        </div>
                                        <div className="backdrop-blur-sm bg-white/30  px-2 py-1 rounded ml-2">
                                            <img
                                                className="h-5 w-5 "
                                                src="/images/envelope.png"
                                                alt=""

                                            />
                                        </div>
                                        <div className="backdrop-blur-sm bg-white/30 px-2 py-1 rounded ml-2">
                                            <img
                                                className="hover:opacity-50 h-5 w-5 "
                                                src="/images/envelope.png"
                                                alt=""

                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            {/* hover:text-green-500 */}
            <nav className="sticky navbar-start bg-amber dark:bg-amber-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                {/* <nav className="sticky top-0 bg-yellow-900 fixed w-full shadow-md z-50 px-4 flex justify-between items-center scroll-smooth "> */}
                {/* <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"> */}
                {/* <div className="max-w-7x1 py-2 px-12 sm:px-6 lg:px-20 ml-12 "> */}

                <div className="flex items-center justify-between h-15 ml-10 ">
                    {/* <div className="ml-20"> */}
                    <div className="flex-shrink-1 items-center ml-20">
                        <img
                            className="h-12 w-12"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                            alt="Workflow"
                        />
                    </div>
                    <div className="flex-none flex-1 md:order-2 justify-self-right pb-3 mt-8 md:block md:pb-0 md:mt-0">
                        <div className="menu menu-horizontal hidden md:block ">
                            <div className="ml-20 px-20 flex justify-end items-baseline space-x-1">
                                <a
                                    href="#"
                                    className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Dashboard
                                </a>

                                <a
                                    href="#"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Team
                                </a>

                                <Link
                                    href="/product"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Product
                                </Link>

                                <a
                                    href="/contact"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Contact
                                </a>


                                <div className="flex-none h-4 space-x-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                                    </svg>




                                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg> */}
                                </div>
                                <a
                                    href="#"
                                    className=" text-white px-3 py-2 h-8 rounded-md text-sm font-medium">


                                    Ordew Now
                                </a>


                                {/* <div className="flex-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                            </div> */}
                                <div className="form-control">
                                    <input type="text" placeholder="Search" className="input w-24 md:w-auto input-bordered" />
                                </div>
                                {/* </div> */}
                                {/* </div> */}
                                {/* </div> */}

                            </div>
                            {/* <div className="-mr-2 flex md:hidden">
                                <button
                                    type="button"
                                    className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                    aria-controls="mobile-menu"
                                    aria-expanded="false"
                                >
                                    <span className="sr-only">Open main menu</span>

                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>

                                    <svg
                                        className="hidden h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div> */}
                        </div>
                    </div>
                </div>

                {/* </div> */}
            </nav>

            <div>
                {children}
            </div>

            <footer className="footer p-10 bg-neutral-800 dark:bg-neutral-900 text-base-content">

                <div className="text-neutral-50">
                    {/* <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clip-rule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg> */}
                    <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                </div>
                <div className="text-neutral-50">
                    <span className=" text-neutral-50 footer-title">Services</span>
                    <div className=" mb-8">
                        <p>Provident cupiditate voluptatem et in.</p>
                    </div>
                </div>
                <div className="text-neutral-50">
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div className="text-neutral-50">
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>

            </footer>
        </div>
    )
}

export default MainLayout
