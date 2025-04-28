"use client"

import { motion } from "framer-motion"
import { Plane, Sun } from "lucide-react"
import { useEffect, useState } from "react"

const AirplaneAnimation = () => {
  const [replay, setReplay] = useState<boolean>(true)

  // Restart animation periodically
  useEffect(() => {
    const timer = setInterval(() => {
      setReplay(false)
      setTimeout(() => setReplay(true), 100)
    }, 10000) // Replay every 10 seconds

    return () => clearInterval(timer)
  }, [])

  if (!replay) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Sun */}
      <motion.div
        className="absolute right-[10%] top-[30%]"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Sun className="h-16 w-16 text-amber-400 drop-shadow-lg" />
      </motion.div>

      {/* Airplane */}
      <motion.div
        className="absolute"
        initial={{ left: "-5%", top: "70%", rotate: -10 }}
        animate={{
          left: "85%",
          top: "35%",
          rotate: 15,
          transition: {
            duration: 6,
            ease: "easeInOut",
          },
        }}
      >
        <Plane className="h-10 w-10 text-teal-600 drop-shadow-md" fill="white" />

        {/* Airplane trail */}
        <motion.div
          className="absolute h-1 bg-gradient-to-r from-teal-400/80 to-transparent rounded-full"
          initial={{ width: 0, top: "50%", right: "100%", opacity: 0 }}
          animate={{
            width: [0, 100, 150, 100, 0],
            opacity: [0, 0.8, 0.5, 0.2, 0],
            transition: {
              duration: 6,
              times: [0, 0.2, 0.5, 0.8, 1],
              ease: "easeInOut",
            },
          }}
        />
      </motion.div>

      {/* Clouds */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full blur-md"
          style={{
            width: Math.random() * 100 + 50,
            height: Math.random() * 60 + 30,
            top: `${Math.random() * 60 + 20}%`,
          }}
          initial={{
            left: `${Math.random() * 100}%`,
            opacity: 0.3 + Math.random() * 0.4,
          }}
          animate={{
            left: `${Math.random() * 100}%`,
            transition: {
              duration: 15 + Math.random() * 20,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "mirror",
            },
          }}
        />
      ))}
    </div>
  )
}

export default AirplaneAnimation
