"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslations } from "@/lib/i18n/use-translations"

const StickySignup = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [isDismissed, setIsDismissed] = useState<boolean>(false)
  const { t } = useTranslations()

  useEffect(() => {
    // Show the sticky signup after scrolling 60% of the page
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const pageHeight = document.body.scrollHeight
      const viewportHeight = window.innerHeight
      const scrollPercentage = (scrollPosition / (pageHeight - viewportHeight)) * 100

      if (scrollPercentage > 60 && !isDismissed) {
        setIsVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isDismissed])

  const handleDismiss = () => {
    setIsVisible(false)
    setIsDismissed(true)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-40 py-3 px-4"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
            <div className="mb-3 sm:mb-0">
              <p className="font-medium text-gray-900">{t("ctaTitle")}</p>
              <p className="text-sm text-gray-600 hidden sm:block">{t("noCardRequired")}</p>
            </div>
            <div className="flex items-center gap-3">
              <Button className="bg-teal-600 hover:bg-teal-700">{t("getStartedFree")}</Button>
              <button
                onClick={handleDismiss}
                className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100"
                aria-label="Dismiss"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default StickySignup
