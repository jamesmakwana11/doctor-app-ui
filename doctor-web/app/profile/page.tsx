export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-black/40 flex items-center justify-center">

      {/* Modal */}
      <div className="w-[420px] bg-white rounded-xl shadow-lg p-6 relative">

        {/* Close */}
        <div className="absolute top-4 right-4 cursor-pointer text-gray-400">✕</div>

        {/* Title */}
        <h2 className="text-center font-semibold text-lg mb-6">
          Profile Management
        </h2>

        {/* Profile image */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-20 h-20 border rounded-lg flex items-center justify-center text-gray-400 mb-2">
            +
          </div>
          <p className="font-medium text-sm">Dr. Megumin Black</p>
          <p className="text-xs text-gray-500 text-center">
            Add your signature & biography here on your profile
          </p>
        </div>

        {/* Form */}
        <div className="space-y-3">

          <input className="input" placeholder="Search Your Category" />
          <input className="input" placeholder="Enter designation" />
          <input className="input" placeholder="Enter Degrees ( , separated )" />
          <input className="input" placeholder="Enter Languages" />
          <input className="input" placeholder="Number of years" />

          {/* Fees */}
          <div className="flex gap-2">
            <div className="px-3 py-2 border rounded-md bg-gray-100">$</div>
            <input className="input flex-1" placeholder="00" />
          </div>

          {/* Country */}
          <select className="input">
            <option>Japan</option>
            <option>India</option>
            <option>USA</option>
          </select>
        </div>

        {/* Button */}
        <button className="w-full bg-[#5F3BFE] text-white py-3 rounded-md mt-6">
          Continue
        </button>
      </div>
    </div>
  );
}
