import Link from "next/link";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function checkEmail(emailToCheck) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailToCheck);
  }
  function clearInputs() {
    document.getElementById("emailInput").value = "";
    document.getElementById("passwordInput").value = "";
  }

  function loginSubmit() {
    try {
      if (!checkEmail(email)) {
        throw "Email is in incorrect format!";
      } else {
        toast.success("Successfully Logged In!");
        clearInputs();
      }
    } catch (err) {
      toast.error(err);
    }
  }

  return (
    <div className="flex justify-center items-center">
      {/* <div className="w-80 shadow-lg h-fit mt-14 md:mt-20 lg:h-2/5 xl:h-fit xl:w-fit lg:w-4/12 rounded-2xl xl:absolute xl:top-1/3 xl:mt-0 py-6 xl:px-10 pb-10"> */}
      <div className="w-fit shadow-lg h-fit rounded-2xl absolute top-1/3 py-6 px-10 pb-10">
        <h2 className="font-poppins text-3xl font-semibold w-fit mx-auto mb-12">
          Member Login
        </h2>
        <div className="mx-auto w-fit">
          <form className="mx-auto w-fit">
            <input
              id="emailInput"
              placeholder="Email Address"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="lg:w-96 w-72 h-14 bg-transparent border-solid border-slate-200 border-2 rounded pl-2 mb-6"
            ></input>
          </form>
          <form className="mx-auto w-fit">
            <input
              id="passwordInput"
              autoComplete="current-password"
              type="password"
              placeholder="Password"
              className="pl-2 h-14 lg:w-96 w-72 bg-transparent border-solid border-slate-200 border-2 rounded mb-6"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
          </form>
          <button
            className="lg:w-96 w-72 bg-green-300 h-10 rounded font-inter text-white font-bold text-base hover:bg-green-400"
            onClick={loginSubmit}
          >
            LOGIN
          </button>
        </div>
        <div className="text-center mt-2">
          <p>Don't have an account? <span className="text-blue-300 "><Link href={'/auth/signUp'}>Sign Up</Link></span>!</p>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}
