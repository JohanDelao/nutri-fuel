import Link from "next/link";
import Chef from "../public/Chef.png"
import Image from "next/image";

export default function Landing(){
    return (
        <div className="md:w-9/12 mx-auto w-96 2xl:w-5/12">
            <div className="flex md:flex-nowrap flex-wrap">
                <div className="mr-3">
                    <p className="leading-normal md:leading-normal md:text-5xl font-poppins font-bold text-center text-5xl md:text-left">Get the results you want with <span className="text-green-300">NutriMeter!</span></p>
                    <p className="text-xl text-center md:text-left text-slate-400 font-inter font-medium my-6">Eating enough protien? Too much carbs? Make sure with NutriMeter!</p>
                    <Link href="/">
                        <div className="font-inter w-72 mx-auto md:mx-0 text-center pt-4 md:py-0 rounded-lg bg-green-300 text-white md:w-96 font-bold h-14 md:flex justify-center items-center">
                            <p className="h-fit">GET STARTED</p>
                        </div>
                    </Link>
                </div>
                    <Image src={Chef} width={450}></Image>
            </div>
        </div>
    )
}