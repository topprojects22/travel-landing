"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Luggage, PiggyBank, MessageCircle } from "lucide-react"
import { useTranslations } from "@/lib/i18n/use-translations"

type Tip = {
  icon: React.ReactNode
  title: string
  description: string
  color: string
}

const TravelTips = () => {
  const { t } = useTranslations()

  const tips: Tip[] = [
    {
      icon: <Luggage className="h-6 w-6 text-white" />,
      title: t("tipPackingTitle"),
      description: t("tipPackingDesc"),
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <PiggyBank className="h-6 w-6 text-white" />,
      title: t("tipBudgetTitle"),
      description: t("tipBudgetDesc"),
      color: "from-teal-500 to-emerald-500",
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-white" />,
      title: t("tipCommunicationTitle"),
      description: t("tipCommunicationDesc"),
      color: "from-purple-500 to-indigo-500",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("travelTipsTitle")}</h2>
            <p className="text-xl text-gray-600">{t("travelTipsSubtitle")}</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {tips.map((tip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="rounded-xl overflow-hidden shadow-md"
            >
              <div className={`bg-gradient-to-r ${tip.color} p-6`}>
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">{tip.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{tip.title}</h3>
                <p className="text-white/80">{tip.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-teal-600 hover:bg-teal-700 group">
            {t("readMoreTips")}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default TravelTips
