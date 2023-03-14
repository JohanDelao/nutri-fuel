import { useState } from "react"

export default function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className="flex justify-center items-center h-full">
            <div className="w-80 shadow-lg h-fit mt-14 md:mt-20 w-fit h-fit px-5 md:px-10 absolute top-1/4 rounded-2xl py-6 pb-10">
                <h2 className="font-poppins text-3xl font-semibold w-fit mx-auto mb-12">Member Login</h2>
                <div className="mx-auto w-fit">
                    <div className="mx-auto w-fit">
                        <input placeholder="Email Address" onChange={(e) => {
                            setEmail(e.target.value);
                        }} className="md:w-96 w-72 h-14 bg-transparent border-solid border-slate-200 border-2 rounded pl-2 mb-6"></input>
                    </div>
                    <div className="mx-auto w-fit">
                        <input type="password" placeholder="Password" className="pl-2 h-14 md:w-96 w-72 bg-transparent border-solid border-slate-200 border-2 rounded mb-6" onChange={(e) => {
                            setPassword(e.target.value);
                        }}></input>
                    </div>
                    <button className="md:w-96 w-72 bg-green-300 h-10 rounded font-inter text-white font-bold text-base">LOGIN</button>
                </div>
            </div>
        </div>
    )
}