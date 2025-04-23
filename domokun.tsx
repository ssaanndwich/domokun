"use client"

import { useState } from "react"

export default function Domokun() {
  const [isWaving, setIsWaving] = useState(false)

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <div className="relative cursor-pointer w-64 h-64 md:w-80 md:h-80" onClick={() => setIsWaving(!isWaving)}>
        {/* Domokun Body */}
        <svg viewBox="0 0 200 200" className="w-full h-full">
          {/* Body */}
          <rect x="20" y="40" width="160" height="140" rx="10" fill="#6D3426" />

          {/* Mouth */}
          <rect x="40" y="100" width="120" height="60" rx="5" fill="black" />
          <rect x="45" y="105" width="110" height="50" rx="3" fill="#990000" />

          {/* Eyes */}
          <circle cx="70" cy="80" r="8" fill="black" />
          <circle cx="130" cy="80" r="8" fill="black" />

          {/* Arms */}
          <rect
            x="0"
            y="80"
            width="30"
            height="15"
            rx="10"
            fill="#6D3426"
            className={isWaving ? "animate-wave origin-right" : ""}
            style={{ transformBox: "fill-box", transformOrigin: "right" }}
          />
          <rect x="170" y="80" width="30" height="15" rx="10" fill="#6D3426" />

          {/* Legs */}
          <rect x="40" y="180" width="30" height="20" rx="10" fill="#6D3426" />
          <rect x="130" y="180" width="30" height="20" rx="10" fill="#6D3426" />

          {/* Teeth */}
          <polygon points="65,105 75,105 70,115" fill="white" />
          <polygon points="85,105 95,105 90,115" fill="white" />
          <polygon points="105,105 115,105 110,115" fill="white" />
          <polygon points="125,105 135,105 130,115" fill="white" />

          <polygon points="60,145 65,155 55,155" fill="white" />
          <polygon points="80,145 85,155 74,155" fill="white" />
          <polygon points="100,145 105,155 95,155" fill="white" />
          <polygon points="120,145 125,155 115,155" fill="white" />
          <polygon points="140,145 145,155 135,155" fill="white" />
        </svg>
      </div>

      <p className="mt-4 text-center text-gray-700">Click on Domokun to make him wave!</p>

      <style jsx>{`
        @keyframes wave {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(-20deg); }
          50% { transform: rotate(0deg); }
          75% { transform: rotate(-20deg); }
          100% { transform: rotate(0deg); }
        }
        
        .animate-wave {
          animation: wave 1s ease-in-out;
        }
      `}</style>
    </div>
  )
}
