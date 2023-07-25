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


            {/* contact */}
            <div className="grid gap-10 grid-cols-1 md:grid-cols-2 container my-24 mx-auto md:px-20">
                <div className='flex flex-wrap items-center pl-6 pr-9 pt-2 mx-15'>
                    <img className='w-full h-96 pb-10' src="/Assets/IMG_5033.jpg" />
                </div>

                {/* maps */}


                {/* form */}
                <div className="w-full  basis-auto">
                    <p className="mb-1 md:text-start text-center text-xl">
                        About
                    </p>
                    <p className='text-amber-900 md:text-start text-center font-bold text-4xl pt-3'>
                        Unleash the Power of Indonesian Rice Bran for a Vibrant Life
                    </p>

                    <p className='md:text-justify text-center pt-6'>
                        "Premium Indonesian Rice Bran by Wijaya AgroIndustries. From Subang, Indonesia, our highquality rice bran brings nourishment and supports local agriculture. Experience the
                        transformative power of Indonesian agriculture with Wijaya AgroIndustries."
                    </p>
                    <button className="btn animate-bounce btn-wide btn-amber mt-7 md:ml-0 ml-28 bg-amber-900 text-white hover:bg-stone-900 hover:border-black">Contact Us</button>     
                </div>
            </div>
        </MainLayout>
    )
}
