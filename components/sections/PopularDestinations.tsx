"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useTranslations } from "@/lib/i18n/use-translations"

type Destination = {
  name: string
  image: string
  rating: number
  trips: number
}

const PopularDestinations = () => {
  const { t } = useTranslations()

  const destinations: Destination[] = [
    {
      name: t("paris"),
      image: "/placeholder.svg?height=400&width=300",
      rating: 4.8,
      trips: 1240,
    },
    {
      name: t("tokyo"),
      image: "/placeholder.svg?height=400&width=300",
      rating: 4.9,
      trips: 980,
    },
    {
      name: t("bali"),
      image: "/placeholder.svg?height=400&width=300",
      rating: 4.7,
      trips: 1560,
    },
    {
      name: t("newYork"),
      image: "/placeholder.svg?height=400&width=300",
      rating: 4.6,
      trips: 1120,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("popularDestinationsTitle")}</h2>
            <p className="text-xl text-gray-600">{t("popularDestinationsSubtitle")}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 md:mt-0"
          >
            <Button variant="outline" className="group">
              {t("viewAllDestinations")}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="relative rounded-xl overflow-hidden">
                <div className="aspect-[3/4] relative">
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{destination.name}</h3>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="text-yellow-400">★</span>
                      <span className="ml-1">{destination.rating}</span>
                    </div>
                    <div className="text-sm text-white/80">{destination.trips} trips</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PopularDestinations
