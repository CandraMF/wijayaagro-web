import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import MainLayout from '@/components/Layouts/MainLayout'
import Image from 'next/image'

export default function Product() {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <MainLayout>
            <Head>
                <title>Contact</title>
            </Head>


            {/* contact */}
            <div className="grid gap-2 grid-cols-1 md:grid-cols-2 container my-10 mx-auto md:px-10">

                <div className="mb-12 md:px-3 lg:px-6">
                    <p className="mb-5 text-xl text-base font-bold md:text-left font-lato text-center">Contact Us :</p>

                    <div className='flex flex-col gap-1'>
                        <div className="flex items-center gap-2 justify-center md:justify-start">
                            <div className='border-8 border-amber-900 rounded-full'>
                                <img className="w-4 bg-amber-900" src="/Assets/whatsapp.png" />
                            </div>
                            <span className='font-bold'>WhatssApp : +62 856 0086 0344</span>
                        </div>

                        <div className="flex items-center gap-2 justify-center md:justify-start">
                            <div className='border-8 border-amber-900 rounded-full'>
                                <img className="w-4 bg-amber-900" src="/Assets/phone-call.png" />
                            </div>
                            <span className='font-bold'>Telephone : +62 856 0086 0344</span>
                        </div>

                        <div className="flex items-center gap-2 justify-center md:justify-start">
                            <div className='border-8 border-amber-900 rounded-full'>
                                <img className="w-4 bg-amber-900" src="/Assets/email .png" />
                            </div>
                            <span className='font-bold'>Email : wijayaagroindustries@gmail.com</span>
                        </div>

                        <div className="flex items-center gap-2 justify-center md:justify-start">
                            <div className='border-8 border-amber-900 rounded-full'>
                                <img className="w-4 border-x-0 border-y-0 rounded-full bg-amber-900" src="/Assets/web.png" />
                            </div>
                            <span className='font-bold'>Website : wijaya-agro.co.id</span>
                        </div>
                        {/* Maps */}
                        <p className="mb-3 text-2xl font-bold pt-7 md:text-left text-center">Our Office :</p>
                        <div className="block w-full shrink-0 grow-0 basis-auto">
                            <div className="h-[250px] w-full md:pl-0 pl-5 md:pr-0 pr-5">
                                <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                    className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" frameborder="0"
                                    allowfullscreen></iframe>
                            </div>
                        </div>

                    </div>
                </div>




                {/* form */}
                <div className="w-full basis-auto">
                    <p className="mb-3 md:pl-0 pl-5 text-lg font-lato text-base font-bold">
                        Please Leave Your Message Below!
                    </p>
                    <form>
                        <div className="relative mb-6 md:pl-0 pl-5 md:pr-0 pr-5" data-te-input-wrapper-init>
                            
                            <input type="text"
                                className="peer block min-h-[auto] w-full rounded-none placeholder:none placeholder:text-black block bg-white w-full border border-black rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-black sm:text-sm" 
                                id="exampleInput90" placeholder="Name" />
                        </div>
                        <div className="relative mb-6 md:pl-0 pl-5 md:pr-0 pr-5" data-te-input-wrapper-init>
                            
                            <input type="email"
                                className="peer block min-h-[auto] w-full rounded-none placeholder:none placeholder:text-black block bg-white w-full border border-black rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-black sm:text-sm" 
                                id="exampleInput91" placeholder="Email address" />
                        </div>
                        <div className="relative mb-6 md:pl-0 pl-5 md:pr-0 pr-5" data-te-input-wrapper-init>
                            
                            <input type="email"
                                className="peer block min-h-[auto] w-full rounded-none placeholder:none placeholder:text-black block bg-white w-full border border-black rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-black sm:text-sm" 
                                id="exampleInput91" placeholder="Number Phone" />
                        </div>
                        <div className="relative mb-6 md:pl-0 pl-5 md:pr-0 pr-5" data-te-input-wrapper-init>
                            
                            <textarea
                                className="peer block min-h-[auto] md:w-full rounded-none placeholder:none placeholder:text-black block bg-white w-full border border-black rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-black sm:text-sm" 
                                id="exampleFormControlTextarea1" rows="12 " placeholder="Message"></textarea>
                        </div>
                        <div className='md:text-start text-center'>

                            <button type="button" data-te-ripple-init="light"
                                className=" font-bold inline-block w-35 rounded-none mt-2 bg-amber-900 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white  transition duration-150 ease-in-out hover:bg-white hover:text-amber-900 focus:bg-amber-900  focus:outline-none focus:ring-0 active:bg-amber-900  dark:focus:bg-amber-900">
                                SEND MESSAGE
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </MainLayout>
    )
}
