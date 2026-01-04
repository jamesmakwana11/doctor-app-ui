"use client";

export default function LocationAccess() {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-sm rounded-xl shadow-xl p-8 text-center">

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
            📍
          </div>
        </div>

        {/* Title */}
        <h2 className="text-lg font-semibold mb-2">
          What is Your Location?
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-500 mb-6">
          We need to know your location in order to suggest nearby services.
        </p>

        {/* Primary Button */}
        <button className="w-full bg-purple-600 text-white py-2 rounded-lg font-medium mb-3">
          Allow Location Access
        </button>

        {/* Secondary Action */}
        <button className="text-sm text-purple-600">
          Enter Location Manually
        </button>

      </div>
    </div>
  );
}
