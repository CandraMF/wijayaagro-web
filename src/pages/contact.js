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
            <div className="grid gap-10 grid-cols-1 md:grid-cols-2 container my-24 mx-auto md:px-20">

                <div className="mb-12 md:px-3 lg:px-6">
                    <p className="mb-5 text-2xl font-bold md:text-left text-center">Contact Us :</p>

                    <div className='flex flex-col gap-3'>
                        <div className="flex items-center gap-3 justify-center md:justify-start">
                            <img className="w-7" src="/Assets/WhatssApp.png" />
                            <span>WhatssApp : +62 856 0086 0344</span>
                        </div>

                        <div className="flex items-center gap-3 justify-center md:justify-start">
                            <img className="w-7" src="/Assets/Telephone.png" />
                            <span>Telephone : +62 856 0086 0344</span>
                        </div>

                        <div className="flex items-center gap-3 justify-center md:justify-start">
                            <img className="w-7" src="/Assets/Email.png" />
                            <span>Email : wijayaagroindustries@gmail.com</span>
                        </div>

                        <div className="flex items-center gap-3 justify-center md:justify-start">
                            <img className="w-7" src="/Assets/website.png" />
                            <span>Website : wijaya-agro.co.id</span>
                        </div>
                        {/* Maps */}
                        <p className="mb-3 text-2xl font-bold pt-5 md:text-left text-center">Our Office :</p>
                        <div class="block w-full shrink-0 grow-0 basis-auto">
                            <div class="h-[300px]  w-full">
                                <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                    class="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" frameborder="0"
                                    allowfullscreen></iframe>
                            </div>
                        </div>

                    </div>
                </div>

                


                {/* form */}
                <div className="w-full basis-auto">
                    <p className="mb-3 font-bold">
                        Please Leave Your Message Below!
                    </p>
                    <form>
                        <div className="relative mb-2" data-te-input-wrapper-init>
                            <label className="label">
                                <span className="label-text">What is your name?</span>
                            </label>
                            <input type="text"
                                className="peer block min-h-[auto] w-full rounded border-black py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                id="exampleInput90" placeholder="Name" />
                        </div>
                        <div className="relative mb-2" data-te-input-wrapper-init>
                            <label className="label">
                                <span className="label-text">Email Addres</span>
                            </label>
                            <input type="email"
                                className="peer block min-h-[auto] w-full rounded border-black py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                id="exampleInput91" placeholder="Email address" />
                        </div>
                        <div className="relative mb-2" data-te-input-wrapper-init>
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="email"
                                className="peer block min-h-[auto] w-full rounded border-black py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                id="exampleInput91" placeholder="number" />
                        </div>
                        <div className="relative mb-2" data-te-input-wrapper-init>
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea
                                className="peer block min-h-[auto] w-full rounded border-black bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                id="exampleFormControlTextarea1" rows="3" placeholder="Your message"></textarea>
                        </div>
                        <div className='md:text-start text-center'>

                            <button type="button" data-te-ripple-init="light"
                                className=" inline-block w-35 rounded mt-3 bg-amber-900 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white  transition duration-150 ease-in-out hover:bg-white hover:text-amber-900 focus:bg-amber-900  focus:outline-none focus:ring-0 active:bg-amber-900  dark:focus:bg-amber-900">
                                SEND MESSAGE 
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </MainLayout>
    )
}
