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
            <div className="grid grid-cols-2 container my-24 mx-auto md:px-20">
                <div className="">
                    <div className="mb-12 w-full  basis-auto md:mb-0 md:w-96 md:px-3 lg:px-6">
                        <p className="mb-8 text-2xl font-bold">Contact Us :</p>
                        
                    </div>
                </div>
                <div className="w-full basis-auto">
                    <p className="mb-8 font-bold">
                        Please Leave Your Message Below!
                    </p>
                    <form>
                        <div className="relative mb-6" data-te-input-wrapper-init>
                            <label className="label">
                                <span className="label-text">What is your name?</span>
                            </label>
                            <input type="text"
                                className="peer block min-h-[auto] w-full rounded border-black py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                id="exampleInput90" placeholder="Name" />
                        </div>
                        <div className="relative mb-6" data-te-input-wrapper-init>
                            <label className="label">
                                <span className="label-text">Email Addres</span>
                            </label>
                            <input type="email"
                                className="peer block min-h-[auto] w-full rounded border-black py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                id="exampleInput91" placeholder="Email address" />
                        </div>
                        <div className="relative mb-6" data-te-input-wrapper-init>
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="email"
                                className="peer block min-h-[auto] w-full rounded border-black py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                id="exampleInput91" placeholder="number" />
                        </div>
                        <div className="relative mb-6" data-te-input-wrapper-init>
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea
                                className="peer block min-h-[auto] w-full rounded border-black bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                id="exampleFormControlTextarea1" rows="3" placeholder="Your message"></textarea>
                        </div>
                        <div className="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">

                        </div>
                        <button type="button" data-te-ripple-init="light"
                            className="font-bold mb-6 inline-block w-full rounded bg-amber-900 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white bg-amber-900 transition duration-150 ease-in-out hover:bg-white hover:text-amber-900 focus:bg-amber-900 focus:bg-amber-900 focus:outline-none focus:ring-0 active:bg-amber-900 active:bg-amber-900 dark:bg-amber-900 dark:bg-amber-900 dark:focus:bg-amber-900">
                            SEND MESSAGE
                        </button>
                    </form>
                </div>
            </div>
        </MainLayout>
    )
}
