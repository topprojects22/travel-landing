"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Users, CreditCard, Calendar, Map, MessageSquare, Shield } from "lucide-react"
import { useTranslations } from "@/lib/i18n/use-translations"

type Feature = {
  icon: React.ReactNode
  title: string
  description: string
}

const Features = () => {
  const { t } = useTranslations()

  const features: Feature[] = [
    {
      icon: <Users className="h-6 w-6 text-teal-600" />,
      title: t("featureGroupManagement"),
      description: t("featureGroupManagementDesc"),
    },
    {
      icon: <CreditCard className="h-6 w-6 text-teal-600" />,
      title: t("featureExpenseSplitting"),
      description: t("featureExpenseSplittingDesc"),
    },
    {
      icon: <Calendar className="h-6 w-6 text-teal-600" />,
      title: t("featureItineraryPlanning"),
      description: t("featureItineraryPlanningDesc"),
    },
    {
      icon: <Map className="h-6 w-6 text-teal-600" />,
      title: t("featureDestinationDiscovery"),
      description: t("featureDestinationDiscoveryDesc"),
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-teal-600" />,
      title: t("featureGroupChat"),
      description: t("featureGroupChatDesc"),
    },
    {
      icon: <Shield className="h-6 w-6 text-teal-600" />,
      title: t("featureSecurePayments"),
      description: t("featureSecurePaymentsDesc"),
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("featuresTitle")}</h2>
            <p className="text-xl text-gray-600">{t("featuresSubtitle")}</p>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Features
