"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const NotFound = () => {
  const router = useRouter()
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white space-y-6 px-4">
      <h2 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 animate-pulse">
        404
      </h2>
      <p className="text-xl sm:text-2xl font-semibold">Oops! Page not found</p>
      <p className="text-gray-400 max-w-md text-center">
        The page you are looking for doesn’t exist or has been moved.
      </p>
      <div className="flex gap-4 mt-4">
        <button
          onClick={() => router.push("/")}
          className="bg-gradient-to-r from-purple-600 to-pink-500 px-5 py-2 rounded-full font-medium shadow hover:shadow-lg transform hover:scale-105 transition"
        >
          Go home
        </button>
        <button
          onClick={() => router.back()}
          className="border border-gray-500 px-5 py-2 rounded-full font-medium hover:bg-gray-700 transition"
        >
          Go back
        </button>
      </div>
    </div>
  )
}

export default NotFound
