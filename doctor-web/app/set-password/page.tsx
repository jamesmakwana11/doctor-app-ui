import { EyeIcon } from "@heroicons/react/24/outline";

export default function SetPasswordErrorPage() {
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
              Doctor Appointments, Simplified
            </h2>
            <p className="text-sm text-gray-600">
              Easily book, manage, and track doctor <br />
              visits in one secure platform
            </p>
          </div>

          {/* Pagination */}
          <div className="flex gap-2">
            <span className="w-2.5 h-2.5 bg-gray-400 rounded-full"></span>
            <span className="w-2.5 h-2.5 bg-gray-400 rounded-full"></span>
            <span className="w-2.5 h-2.5 bg-gray-400 rounded-full"></span>
            <span className="w-2.5 h-2.5 bg-[#5F3BFE] rounded-full"></span>
          </div>

          {/* Arrows */}
          <div className="flex gap-4 mb-6">
            <button className="w-11 h-11 bg-white rounded-lg shadow-md">←</button>
            <button className="w-11 h-11 bg-white rounded-lg shadow-md">→</button>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="w-1/2 px-20 py-16 flex flex-col justify-center">

          {/* Logo */}
          <div className="mb-8">
            <span className="px-4 py-1 bg-black text-white text-sm rounded-md">
              Logo
            </span>
          </div>

          <h1 className="text-3xl font-semibold mb-4">
            Let’s Set Up Your Password. 🔑
          </h1>

          {/* Password input with error */}
          <div className="relative mb-2">
            <input
              type="password"
              value="•••"
              readOnly
              className="border border-red-400 rounded-md pl-4 pr-12 py-3 w-full bg-red-50"
            />
            <EyeIcon className="w-5 h-5 absolute right-4 top-3.5 text-gray-400" />
          </div>

          {/* Strength bar (RED) */}
          <div className="w-full h-1 bg-gray-200 rounded mb-2">
            <div className="w-1/3 h-1 bg-red-500 rounded"></div>
          </div>

          <p className="text-sm text-gray-500 mb-4">
            Please make the password strong!
          </p>

          {/* ERROR BOXES */}
          <div className="space-y-2 mb-6">
            <div className="flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-md text-sm">
              ⚠️ Must have alphabetical character!
            </div>
            <div className="flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-md text-sm">
              ⚠️ Must have alphabetical character!
            </div>
          </div>

          {/* Continue disabled */}
          <button className="bg-gray-400 text-white py-3 rounded-md mb-4 text-lg cursor-not-allowed">
            Continue →
          </button>

          {/* Back */}
          <button className="border border-gray-300 py-3 rounded-md text-gray-600">
            ← Back
          </button>

        </div>

      </div>
    </div>
  );
}
