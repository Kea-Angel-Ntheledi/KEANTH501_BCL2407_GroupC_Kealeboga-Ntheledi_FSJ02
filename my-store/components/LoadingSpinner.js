// components/LoadingSpinner.js
'use client';

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center w-full h-[100vh] text-gray-900 dark:text-gray-100 dark:bg-gray-950">
      <div className="relative flex justify-center items-center">
        <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-indigo-500"></div>
        <span className="absolute text-lg md:text-2xl font-semibold">Loading...</span>
      </div>
    </div>
  );
}
