import Logo from "../public/NutrimeterLogo5.png";
import Image from "next/image";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="h-32 flex shadow-lg mb-10 w-full">
      <div className="md:w-9/12 md:justify-between mx-auto flex w-96 justify-around">
        <div className="flex h-full items-center md:w-72 justify-between w-64">
          <Image src={Logo} className="h-20 w-20" />
          <p className="font-poppins md:text-4xl text-green-300 font-bold h-fit text-3xl">
            NutriMeter
          </p>
        </div>
        <div className="md:flex text-green-300 text-lg items-center w-40 justify-between h-full hidden">
          <p className="h-fit">Log In</p>
          <p className="md:flex hidden">|</p>
          <p className="h-fit">Sign Up</p>
        </div>
        <div className={`${menuOpen ? "block" : "hidden"} md:hidden bg-white w-28 h-fit text-green-300 shadow-lg absolute left-2/3 top-20 p-5`}>
            <p className="h-fit">Log In</p>
            <p className="h-fit">Sign Up</p>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={handleMenuToggle}
            className="text-green-300 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                className={`${menuOpen ? "hidden" : "inline-flex"}`}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                className={`${menuOpen ? "inline-flex" : "hidden"}`}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
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
