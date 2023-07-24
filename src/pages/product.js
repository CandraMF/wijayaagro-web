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
                <title>Our Product</title>
            </Head>
            <div className="container mx-auto grid px-36 grid-cols-3 gap-5 pt-8 max-h-fit">
                
                <div className="card rounded-none bg-white shadow-xl">
                    <figure className='h-64'>
                        <img  src="/Assets/IMG_5033.jpg" alt="" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn bg-amber-900 text-white hover:text-black btn-white font-bold">Order Now</button>
                        </div>
                    </div>
                </div>

                <div className="card rounded-none bg-white shadow-xl">
                    <figure className='h-64'>
                        <img src="/Assets/IMG_5034.jpg" alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn bg-amber-900 text-white hover:text-black btn-white font-bold">Order Now</button>
                        </div>
                    </div>
                </div>

                <div className="card rounded-none bg-white shadow-xl">
                    <figure className='h-64'>
                        <img src="/Assets/IMG_5036.jpg" alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn bg-amber-900 text-white hover:text-black btn-white font-bold">Order Now</button>
                        </div>
                    </div>
                </div>

                

            </div>
        </MainLayout>
    )
}
