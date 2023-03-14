import Logo from "../public/NutrimeterLogo5.png";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="h-24 flex shadow-lg mb-10 w-full">
      <div className="mx-4 md:mx-10 xl:mx-auto px-2 xl:w-9/12 md:justify-between w-full flex justify-between 2xl:w-5/12">
        <div className="flex h-full items-center md:w-56 justify-between w-48">
          <Image src={Logo} className="h-14 w-14" />
          <Link href="/">
            <p className="font-poppins md:text-3xl text-green-300 font-bold h-fit text-2xl">
              NutriMeter
            </p>
          </Link>
        </div>
        {/* <div className="md:flex text-green-300 text-lg items-center w-40 justify-between h-full hidden">
          <Link href="/auth/login">
            <p className="h-fit">Log In</p>
          </Link>
          <p className="md:flex hidden">|</p>
          <Link href="/signUp">
            <p className="h-fit">Sign Up</p>
          </Link>
        </div> */}
        <div className="text-black text-lg w-24 items-center flex justify-end">
          <Link href="/auth/login">
              <p className="h-fit font-bold hover:text-green-300">Log In</p>
            </Link>
        </div>
      </div>
    </nav>
  );
}

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleMenuToggle = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <nav className="bg-gray-900">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex items-center">
//             <Link to="/" className="flex-shrink-0 text-white">
//               Logo
//             </Link>
//           </div>
//           <div className="hidden md:block">
//             <div className="flex items-center">
//               <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
//                 Home
//               </Link>
//               <Link to="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
//                 About
//               </Link>
//               <Link to="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
//                 Contact
//               </Link>
//             </div>
//           </div>
//           <div className="md:hidden flex items-center">
//             <button onClick={handleMenuToggle} className="text-gray-300 hover:text-white focus:outline-none">
//               <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                 <path
//                   className={`${menuOpen ? 'hidden' : 'inline-flex'}`}
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//                 <path
//                   className={`${menuOpen ? 'inline-flex' : 'hidden'}`}
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className={`${menuOpen ? 'block' : 'hidden'} md:hidden`}>
//         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//           <Link to="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
//             Home
//           </Link>
//           <Link to="/about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
//             About
//           </Link>
//           <Link to="/contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
//             Contact
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
