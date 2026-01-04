import {
  EnvelopeIcon,
  LockClosedIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import { FaApple } from "react-icons/fa";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F6FA]">
      <div className="w-[1200px] h-[640px] bg-white rounded-2xl shadow-xl flex overflow-hidden">

        {/* LEFT PANEL */}
        <div className="w-1/2 bg-[#EEEAF8] flex flex-col items-center justify-between py-12 px-10">

          <div className="mt-6">
            <div className="w-[280px] h-[280px] bg-white rounded-2xl flex items-center justify-center text-gray-400 shadow-sm">
              Doctor Image
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-[22px] font-semibold mb-3">
              Hello! Welcome to XpertMed 👋
            </h2>
            <p className="text-sm text-gray-600">
              Doctor Appointment Scheduling Made Easy
            </p>
          </div>

          <div className="flex gap-2">
            <span className="w-2.5 h-2.5 bg-[#5F3BFE] rounded-full"></span>
            <span className="w-2.5 h-2.5 bg-gray-400 rounded-full"></span>
            <span className="w-2.5 h-2.5 bg-gray-400 rounded-full"></span>
          </div>

          <div className="flex gap-4 mb-6">
            <button className="w-11 h-11 bg-white rounded-lg shadow-md">←</button>
            <button className="w-11 h-11 bg-white rounded-lg shadow-md">→</button>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="w-1/2 px-20 py-16 flex flex-col justify-center">

          <div className="mb-8">
            <span className="px-4 py-1 bg-black text-white text-sm rounded-md">
              Logo
            </span>
          </div>

          <h1 className="text-3xl font-semibold mb-2">Let’s Sign In.</h1>
          <p className="text-gray-500 mb-8">
            Experience AI Health Assistant for everyone.
          </p>

          {/* EMAIL */}
          <label className="text-sm mb-2">Email Address</label>
          <div className="relative mb-6">
            <EnvelopeIcon className="w-5 h-5 absolute left-4 top-3.5 text-gray-400" />
            <input
              type="email"
              placeholder="dco@gmail.com"
              className="border border-gray-300 rounded-md pl-12 pr-4 py-3 w-full"
            />
          </div>

          {/* PASSWORD */}
          <label className="text-sm mb-2">Password</label>
          <div className="relative mb-3">
            <LockClosedIcon className="w-5 h-5 absolute left-4 top-3.5 text-gray-400" />
            <EyeIcon className="w-5 h-5 absolute right-4 top-3.5 text-gray-400 cursor-pointer" />
            <input
              type="password"
              placeholder="Enter your password..."
              className="border border-gray-300 rounded-md pl-12 pr-12 py-3 w-full"
            />
          </div>

          <span className="text-sm text-[#5F3BFE] mb-8 cursor-pointer">
            Forgot Password
          </span>

          <button className="bg-[#5F3BFE] text-white py-3 rounded-md mb-8 text-lg">
            Sign In →
          </button>

          {/* SOCIAL */}
          <div className="flex gap-4 mb-6">
            <button className="flex-1 border rounded-md py-3">G</button>
            <button className="flex-1 border rounded-md py-3 flex justify-center">
              <FaApple size={18} />
            </button>
          </div>

          <p className="text-sm text-center">
            Don’t have an account?{" "}
            <span className="text-[#5F3BFE] cursor-pointer">Sign Up</span>
          </p>
        </div>

      </div>
    </div>
  );
}
