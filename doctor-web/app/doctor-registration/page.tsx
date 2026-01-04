"use client";

export default function ProfileManagement() {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-xl shadow-xl p-6 relative">

        {/* Close */}
        <button className="absolute top-4 right-4 text-gray-500">✕</button>

        <h2 className="text-center font-semibold text-lg mb-4">
          Profile Management
        </h2>

        {/* Profile */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-14 w-14 border rounded-full flex items-center justify-center text-gray-400">
            +
          </div>
          <div>
            <p className="font-medium text-sm">Dr. Megumin Black</p>
            <p className="text-xs text-gray-400">
              Add your degrees to display them here on your profile
            </p>
          </div>
        </div>

        {/* 🔽 Specialist Dropdown */}
        <div className="relative mb-3">
          <input
            className="w-full border p-2 rounded-lg"
            placeholder="Search Your Category"
          />

          {/* Dropdown */}
          <div className="absolute top-full left-0 w-full bg-white border rounded-lg shadow-md mt-1 z-10">
            {[
              "Dentist",
              "Cardiologist",
              "Neurologist",
              "Pathologist",
              "Orthopedic",
              "Dermatologist",
            ].map((item) => (
              <div
                key={item}
                className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Other Inputs */}
        <input className="w-full border p-2 rounded-lg mb-2" placeholder="Enter designation" />
        <input className="w-full border p-2 rounded-lg mb-2" placeholder="Enter Degrees" />
        <input className="w-full border p-2 rounded-lg mb-2" placeholder="Enter Languages" />
        <input className="w-full border p-2 rounded-lg mb-2" placeholder="Number of years" />
        <input className="w-full border p-2 rounded-lg mb-2" placeholder="$ 00" />

        <select className="w-full border p-2 rounded-lg mb-3">
          <option>Japan</option>
        </select>

        <button className="w-full bg-purple-600 text-white py-2 rounded-lg">
          Continue
        </button>
      </div>
    </div>
  );
}
