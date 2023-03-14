import Link from "next/link";
import Chef from "../public/Chef.png";
import Laptop from "../public/SittingLaptop.png";
import Image from "next/image";
import Book from "../public/book-rounded.png"
import Muscle from "../public/muscle.png"
import Calendar from "../public/Calendar.png"

export default function Landing() {
  return (
    <div className="md:w-9/12 mx-auto w-11/12 2xl:w-5/12">
      <div className="flex lg:flex-nowrap flex-wrap mx-auto w-fit md:justify-around">
        <div className="md:w-8/12">
          <p className="leading-normal md:leading-normal md:text-5xl font-poppins font-bold text-center text-4xl md:text-center">
            Get the results you want with{" "}
            <span className="text-green-300">NutriMeter!</span>
          </p>
          <p className="text-lg text-center text-slate-400 font-inter font-medium my-6">
            Eating enough protien? Too much carbs? Make sure with NutriMeter!
          </p>
          <Link href="/auth/login">
            <div className="font-inter w-64 mx-auto text-center pt-4 md:py-0 rounded-lg bg-green-300 text-white hover:bg-green-500 md:w-96 font-bold h-14 md:flex justify-center items-center">
              <p className="h-fit">GET STARTED</p>
            </div>
          </Link>
        </div>
        <Image src={Chef} className="md:h-96 h-80 mt-3 md:mt-0"></Image>
      </div>
      <div className="flex md:justify-around lg:flex-nowrap w-fit flex-wrap-reverse md:mt-14 mt-4">
        <Image src={Laptop} className="w-80 lg:w-auto lg:h-96 mx-auto md:mx-0"></Image>
        <div className="md:w-8/12 lg:w-6/12">
          <p className="leading-normal md:leading-normal text-4xl md:text-5xl font-poppins font-bold text-center md:mr-0">
            The smart way to track your macros!
          </p>
          <p className="text-lg text-center text-slate-400 font-inter font-medium my-6 w-11/12 mx-auto md:w-fit md:mx-0">
            With over 900,000 foods to choose from, taken from the Edamam Food API.
          </p>
        </div>
      </div>
      <div className="flex justify-around md:flex-nowrap flex-wrap md:mt-14 mt-4 mb-10">
        <div className="text-center mt-14 md:mt-0">
            <div className="flex items-center justify-center rounded-full h-36 w-36 shadow-xl mx-auto">
                <Image src={Book}></Image>
            </div>
            <p className="font-poppins font-semibold text-2xl mt-6">Track Macros</p>
        </div>
        <div className="text-center mt-14 md:mt-0">
            <div className="flex items-center justify-center rounded-full h-36 w-36 shadow-xl mx-auto">
                <Image src={Muscle}></Image>
            </div>
            <p className="font-poppins font-semibold text-2xl mt-6">Improve Strength</p>
        </div>
        <div className="text-center mt-14 md:mt-0">
            <div className="flex items-center justify-center rounded-full h-36 w-36 shadow-xl mx-auto">
                <Image src={Calendar}></Image>
            </div>
            <p className="font-poppins font-semibold text-2xl mt-6">Stay Consistent</p>
        </div>
      </div>
    </div>
  );
}
