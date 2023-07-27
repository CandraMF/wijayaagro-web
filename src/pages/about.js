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
                <title>About</title>
            </Head>

            {/* image company */}
            <div className="grid gap-10 grid-cols-1 md:grid-cols-2 container my-24 mx-auto md:px-20">
                <div className='flex flex-wrap items-center pl-6 md:pr-9 pr-3 pt-2 mx-15 '>
                    <img className='w-full h-96 pb-10' src="/Assets/IMG_5033.jpg" />
                </div>
                {/* About Us */}
                <div className="w-full basis-auto">
                    <p className="mb-1 font-lato leading-relaxed md:text-start text-center text-xl">
                        About Us
                    </p>

                    <p className='text-black uppercase md:text-start text-center font-lato font-bold text-4xl pt-2'>
                        Wijaya Agro Industries
                    </p>

                    <p className="mb-1 md:text-start uppercase font-lato text-amber-900 text-center text-2xl pt-3">
                        Unleash the Power of Indonesian Rice Bran for a Vibrant Life
                    </p>

                    <p className='md:text-justify text-center pt-1 leading-loose '>
                        "Premium Indonesian Rice Bran by Wijaya AgroIndustries. From Subang,

                        Indonesia, our high quality rice bran brings nourishment and supports local agriculture. Experience the

                        transformative power of Indonesian agriculture with Wijaya AgroIndustries."
                    </p>
                    {/* button */}
                    <Link href='https://wa.me/qr/DJNILWEL25GLJ1'>
                        <button className="btn animate-bounce font-lato btn-md w-40 md:w-full md:ml-0 btn-amber mt-7 ml-44 mr-40 bg-amber-900 text-white hover:bg-stone-900 hover:border-black">
                                <img className="w-7" src="/Assets/support.png" />
                            Contact Us
                        </button>
                    </Link>
                </div>
            </div>
        </MainLayout>
    )
}
