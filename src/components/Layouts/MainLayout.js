import Head from 'next/head'
import Link from 'next/link'


const MainLayout = ({ head, children }) => {
    return (
        <div>
            <Head>
                <title>{head}</title>
            </Head>
            {/* Header */}
            <div className="shadow">
                <div className="bg-amber-600 md:py-2 py-0 ">
                    <div className="flex items-center space-x-6  ">
                        <div className="flex items-center ">
                            <h1 className="text-3xl font-bold text-gray-900"></h1>

                        </div>
                        <div className="flex pl-28 items-center">
                            <img
                                className="h-5 w-5"
                                src="/images/envelope.png"
                                alt=""
                            />
                            <a
                                href="#"
                                className=" text-white px-2 py-2 h-8 rounded-md text-sm font-medium"
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
                                className=" text-white px-2 py-2 h-8 rounded-md text-sm font-medium"
                            >
                                08121919191
                            </a>
                        </div>
                        <div className=" pl-80">
                            <div className="place">
                                <div className="ml-28 ">
                                    <div div className=" text-white flex text-sm items-center md:w-auto ml-20 ">
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
            {/* Header End */}

            {/* navbar */}
            <nav className="md:sticky navbar-start bg-amber dark:bg-amber-900 md:fixed h-20 py-3 w-full z-20 top-0 left-0">
                <div className="-mr-2 flex md:hidden">
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
                </div>
        
            <div className="flex items-center justify-between h-15 ml-10 ">
                <div className="flex-shrink-1 items-center ml-20">
                    <img
                        className="h-12 w-12"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                        alt="Workflow"
                    />
                </div>
                <div className="flex-none flex-1 md:order-2 justify-self-right pb-3 mt-8 md:block md:pb-0 md:mt-0">
                    <div className="menu menu-horizontal hidden md:block ">
                        <div className="ml-20 px-20 flex justify-end items-baseline">
                            <Link
                                href="#"
                                className=" hover:bg-amber-700 uppercase  text-black hover:text-white px-2 py-2 rounded-md text-xs"
                            >
                                Dashboard
                            </Link>

                            <Link
                                href="/about"
                                className="text-black hover:bg-amber-700 uppercase hover:text-white px-2 py-2 rounded-md text-xs"
                            >
                                About Us
                            </Link>

                            <Link
                                href="/product"
                                className="text-black hover:bg-amber-700 uppercase hover:text-white px-2 py-2 rounded-md text-xs"
                            >
                                Product
                            </Link>

                            <Link
                                href="/contact"
                                className="text-gray-300 font-bold active bg-amber-700 uppercase pl-2 pr-2 py-2 rounded-md text-xs"
                            >
                                Contact
                            </Link>

                            <div className='flex flex-wrap mx-2 rounded-full'>
                                <div className="flex-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-8">
                                        <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                                    </svg>
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg> */}
                                </div>
                                <Link
                                    href=""
                                    className=" text-white pr-3 py-2 h-6 text-xs ">
                                    Order Now
                                </Link>
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="Search" className="input h-10 w-52 border border-amber-900 rounded-md input-bordered" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
            {/* navbar end */ }

    {/* flow social media */ }
    <div className="fixed right-0 top-1/4 z-50 px-5 py-72 bg-transparent flex flex-col space-y-3">
        <a href="https://wa.me/qr/DJNILWEL25GLJ1" title="Share on WhatsApp">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48" id="whatsapp"><rect width="48" height="48" fill="#0DC143" rx="24"></rect>
                <path fill="#fff" d="M34.7507 13.2115C32.1777 10.5628 28.621 9.125 24.9885 9.125C17.2696 9.125 11.0642 15.4061 11.1399 23.0493C11.1399 25.4709 11.821 27.8169 12.9561 29.9358L10.9885 37.125L18.3291 35.2331C20.3723 36.3682 22.6426 36.898 24.9128 36.898C32.5561 36.898 38.7615 30.6169 38.7615 22.9736C38.7615 19.2655 37.3237 15.7845 34.7507 13.2115ZM24.9885 34.552C22.9453 34.552 20.902 34.0223 19.1615 32.9628L18.7074 32.7358L14.3183 33.8709L15.4534 29.5574L15.1507 29.1034C11.821 23.7304 13.4101 16.6169 18.8588 13.2872C24.3074 9.95743 31.3453 11.5466 34.675 16.9953C38.0047 22.4439 36.4156 29.4818 30.9669 32.8115C29.2264 33.9466 27.1074 34.552 24.9885 34.552ZM31.648 26.152L30.8156 25.7736C30.8156 25.7736 29.6047 25.2439 28.848 24.8655C28.7723 24.8655 28.6966 24.7899 28.621 24.7899C28.3939 24.7899 28.2426 24.8655 28.0912 24.9412C28.0912 24.9412 28.0156 25.0169 26.9561 26.2277C26.8804 26.3791 26.7291 26.4547 26.5777 26.4547H26.502C26.4264 26.4547 26.275 26.3791 26.1993 26.3034L25.821 26.152C24.9885 25.7736 24.2318 25.3196 23.6264 24.7142C23.475 24.5628 23.248 24.4115 23.0966 24.2601C22.5669 23.7304 22.0372 23.125 21.6588 22.4439L21.5831 22.2926C21.5074 22.2169 21.5074 22.1412 21.4318 21.9899C21.4318 21.8385 21.4318 21.6872 21.5074 21.6115C21.5074 21.6115 21.8101 21.2331 22.0372 21.0061C22.1885 20.8547 22.2642 20.6277 22.4156 20.4764C22.5669 20.2493 22.6426 19.9466 22.5669 19.7196C22.4912 19.3412 21.5831 17.298 21.3561 16.8439C21.2047 16.6169 21.0534 16.5412 20.8264 16.4655H20.5993C20.448 16.4655 20.221 16.4655 19.9939 16.4655C19.8426 16.4655 19.6912 16.5412 19.5399 16.5412L19.4642 16.6169C19.3128 16.6926 19.1615 16.8439 19.0101 16.9196C18.8588 17.0709 18.7831 17.2223 18.6318 17.3736C18.102 18.0547 17.7993 18.8872 17.7993 19.7196C17.7993 20.325 17.9507 20.9304 18.1777 21.4601L18.2534 21.6872C18.9345 23.125 19.8426 24.4115 21.0534 25.5466L21.3561 25.8493C21.5831 26.0764 21.8101 26.2277 21.9615 26.4547C23.5507 27.8169 25.3669 28.8007 27.4101 29.3304C27.6372 29.4061 27.9399 29.4061 28.1669 29.4818C28.3939 29.4818 28.6966 29.4818 28.9237 29.4818C29.302 29.4818 29.7561 29.3304 30.0588 29.1791C30.2858 29.0277 30.4372 29.0277 30.5885 28.8764L30.7399 28.725C30.8912 28.5736 31.0426 28.498 31.1939 28.3466C31.3453 28.1953 31.4966 28.0439 31.5723 27.8926C31.7237 27.5899 31.7993 27.2115 31.875 26.8331C31.875 26.6818 31.875 26.4547 31.875 26.3034C31.875 26.3034 31.7993 26.2277 31.648 26.152Z">
                </path>
            </svg>
        </a>


        <a href="https://wa.me/qr/DJNILWEL25GLJ1" title="Share on WhatsApp">
            <img src="/Assets/phone.png" className='w-11 h-11 ml-1  fill-none' viewBox='0 0 11 11' id='telephone'>
            </img>
        </a>

        <button type="button" data-te-ripple-init data-te-ripple-color="light" id="btn-back-to-top">
            <img src="/Assets/up-arrow.png" className='w-11 h-11 ml-1 rounded-full bg-blue-500 fill-none' viewBox='0 0 11 11' id='telephone'>
            </img>
        </button>
    </div>
    {/* end flow social media */ }

    <div>
        {children}
    </div>

    {/* footer */ }
    <footer className="footer pb-20 md:pl-32 px-0 pt-10 bg-neutral-800 dark:bg-neutral-900 text-base-content">

        <div className="text-neutral-50 ">
            <img className='w-20 h-20 md:ml-16 ml-52 mt-4 rounded-full' src='/Assets/logo.png' />
            <p className='text-center md:ml-0 ml-36'>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
            {/* icon */}
            <div className='grid grid-cols-4 gap-2 md:ml-4 ml-40'>

                <div className='border-8 border-amber-900 rounded-full'>
                    <img className="w-6 bg-amber-900" src="/Assets/facebook.png" />
                </div>

                <div className='border-8 border-amber-900 rounded-full'>
                    <img className="w-6 bg-amber-900" src="/Assets/twitter.png" />
                </div>

                <div className='border-8 border-amber-900 rounded-full'>
                    <img className="w-6 bg-amber-900" src="/Assets/google-plus.png" />
                </div>

                <div className='border-8 border-amber-900 rounded-full'>
                    <img className="w-6 bg-amber-900" src="/Assets/youtube.png" />
                </div>
            </div>
            {/* end icon */}

            <p className='text-center text-xs md:ml-0 ml-36'>© 2023 Bernassport All Rights Reserved.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 pr-10 md:pl-12 md:mt-4 pl-0 mt-0'>
            <div className="grid text-neutral-50">
                <span className=" text-amber-900 text-xl font-bold text-center pb-5">About Us</span>
                <div className=" mb-8">
                    <p className='text-justify md:pl-0 pl-5'>"Premium Indonesian Rice Bran by Wijaya AgroIndustries. From Subang,

                        Indonesia, our high quality rice bran brings nourishment and supports local agriculture. Experience the

                        transformative power of Indonesian agriculture with Wijaya AgroIndustries."</p>
                </div>
            </div>
            <div className="text-neutral-50 mb-8 grid gap-2">
                <span className="text-center font-bold text-xl pb-3 md:ml-0 ml-32 md:mr-0 mr-4 text-amber-900">Contact</span>

                <div className="flex items-center gap-2 pl-2 md:pl-0 justify-center md:justify-start">
                    <div className='border-8 border-white rounded-full'>
                        <img className="w-4 bg-white" src="/Assets/whatsappbrown.png" />
                    </div>
                    <span className='text-sm font-lato'>WhatssApp: <a href=''>+62 856 0086 0344</a> </span>
                </div>

                <div className="flex items-center gap-2 pr-1 md:pr-0 justify-center md:justify-start">
                    <div className='border-8 border-white rounded-full'>
                        <img className="w-4 bg-white" src="/Assets/phonebrown.png" />
                    </div>
                    <span className='text-sm font-lato'>Telephone: <a href=''>+62 856 0086 0344</a></span>
                </div>

                <div className="flex items-center pl-2 md:pl-0 gap-2 justify-center md:justify-start">
                    <div className='border-8 border-white rounded-full'>
                        <img className="w-4 bg-white" src="/Assets/emailbrown.png" />
                    </div>
                    <span className='text-sm font-lato'><a href=''>wijayaagroindustries@gmail.com</a></span>
                </div>
            </div>
            <div className="text-neutral-50 grid gap-5">
                <span className="text-amber-900 text-xl font-bold md:pl-0 pl- text-center pb-2">Latest Article</span>
                <div className='grid grid-cols-1 container'>

                    <div className='flex justify-center md:justify-start pb-6'>
                        <img className='rounded-lg md:w-14 md:h-14 w-32 h-24 md:ml-0 ml-5 shrink-0' src='/Assets/IMG_5035.jpg' />
                        <a href='#' className='hover:text-amber-900 md:ml-3 ml-3'>
                            <span className='text-sm text-justify font-lato'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                        </a>
                    </div>

                    <div className='flex justify-center md:justify-start'>
                        <img className='rounded-lg md:w-14 md:h-14 w-32 h-24 md:ml-0 ml-5 shrink-0' src='/Assets/IMG_5035.jpg' />
                        <a href='#' className='hover:text-amber-900 md:ml-3 ml-3'>
                            <span className='text-sm text-justify font-lato'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    </footer>
        </div >
    )
}

export default MainLayout
