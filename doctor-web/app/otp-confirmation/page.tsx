export default function OtpConfirmationPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F6FA]">
      <div className="w-[1200px] h-[640px] bg-white rounded-2xl shadow-xl flex overflow-hidden">

        {/* LEFT PANEL */}
        <div className="w-1/2 bg-[#EEEAF8] flex flex-col items-center justify-between py-12 px-10">

          {/* Illustration */}
          <div className="mt-6">
            <div className="w-[280px] h-[280px] bg-white rounded-2xl flex items-center justify-center text-gray-400 shadow-sm">
              Doctor Image
            </div>
          </div>

          {/* Text */}
          <div className="text-center">
            <h2 className="text-[22px] font-semibold mb-3">
              Doctor Appointments, Simplified
            </h2>
            <p className="text-sm text-gray-600">
              Easily book, manage, and track doctor <br />
              visits in one secure platform
            </p>
          </div>

          {/* Dots */}
          <div className="flex gap-2">
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

          <h1 className="text-3xl font-semibold mb-2">
            OTP Confirmation 🔑
          </h1>

          <p className="text-gray-500 mb-8">
            Kindly enter the 4-digit OTP that we sent to your email.
          </p>

          {/* OTP BOXES */}
          <div className="flex gap-4 mb-4">
            <input
              className="w-14 h-14 border rounded-lg text-center text-xl"
              value="2"
              readOnly
            />
            <input
              className="w-14 h-14 border border-[#5F3BFE] bg-[#F2EEFF] rounded-lg text-center text-xl"
              value="5"
              readOnly
            />
            <input
              className="w-14 h-14 border rounded-lg text-center text-xl"
              value="0"
              readOnly
            />
            <input
              className="w-14 h-14 border rounded-lg text-center text-xl"
              value="0"
              readOnly
            />
          </div>

          {/* ERROR MESSAGE */}
          <div className="flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-md text-sm mb-6">
            ⚠️ Invalid OTP! Try again in 5s.
          </div>

          {/* CONTINUE */}
          <button className="bg-[#5F3BFE] text-white py-3 rounded-md mb-4 text-lg">
            Continue →
          </button>

          {/* BACK */}
          <button className="border border-gray-300 py-3 rounded-md text-gray-600">
            ← Back
          </button>

        </div>

      </div>
    </div>
  );
}
