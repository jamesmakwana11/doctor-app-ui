import { EyeIcon } from "@heroicons/react/24/outline";

export default function SetPasswordSuccessPage() {
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

          <h1 className="text-3xl font-semibold mb-4 flex items-center gap-2">
  Let’s Set Up Your Password.
  <span className="text-xl">🔑</span>
</h1>


          {/* Password */}
          <div className="relative mb-3">
            <input
              type="password"
              value="••••••••••"
              readOnly
              className="border border-gray-300 rounded-md pl-4 pr-12 py-3 w-full"
            />
            <EyeIcon className="w-5 h-5 absolute right-4 top-3.5 text-gray-400" />
          </div>

          {/* Strength bar – GREEN */}
          <div className="w-full h-1 bg-gray-200 rounded mb-2">
            <div className="w-full h-1 bg-green-500 rounded"></div>
          </div>

          <p className="text-sm text-green-600 mb-8">
            Great! Let’s continue ASAP ✅
          </p>

          {/* Continue ENABLED */}
          <button className="bg-[#5F3BFE] text-white py-3 rounded-md mb-4 text-lg">
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
