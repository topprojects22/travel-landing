"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
import AirplaneAnimation from "../animations/AirplaneAnimation"
import { ArrowRight, Play } from "lucide-react"
import { useState } from "react"
import { useTranslations } from "@/lib/i18n/use-translations"

const Hero = () => {
  const [showVideo, setShowVideo] = useState<boolean>(false)
  const { t } = useTranslations()

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-blue-50 -z-10" />

      {/* Airplane animation */}
      <AirplaneAnimation />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="inline-block px-4 py-1 bg-teal-100 rounded-full text-teal-800 text-sm font-medium mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {t("heroTagline")}
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              {t("heroTitle")} <br />
              <motion.span
                className="text-teal-600"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                {t("heroTitleHighlight")}
              </motion.span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">{t("heroDescription")}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-lg px-8 group">
                {t("startPlanning")}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="text-lg border-gray-300 text-gray-700 hover:border-teal-600 hover:text-teal-600 group"
                onClick={() => setShowVideo(true)}
              >
                <Play className="mr-2 h-5 w-5 fill-current group-hover:scale-110 transition-transform" />
                {t("watchDemo")}
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + i * 0.1, duration: 0.5 }}
                  >
                    <Image
                      src={`/placeholder.svg?height=40&width=40`}
                      alt={`User ${i}`}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </motion.div>
                ))}
              </div>
              <motion.p
                className="ml-4 text-sm text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <span className="font-semibold">1,000+</span> {t("tripsPlanned")}
              </motion.p>
            </div>
          </motion.div>

          {/* Hero image */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="relative">
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", ease: "easeInOut" }}
              >
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Friends traveling together"
                  width={600}
                  height={600}
                  className="rounded-lg shadow-xl"
                />
              </motion.div>

              {/* Floating card */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 max-w-xs"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                    <span className="text-teal-600 font-bold">30%</span>
                  </div>
                  <p className="font-medium">{t("saveAverage")}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video modal */}
      {showVideo && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-white rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-500 bg-white/90 rounded-full p-2 hover:bg-gray-100 transition-colors z-10"
              onClick={() => setShowVideo(false)}
            >
              ✕
            </button>
            <div className="aspect-video bg-gray-100 flex items-center justify-center">
              <p className="text-gray-500">Video player placeholder</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Hero
