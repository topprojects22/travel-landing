"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { useState } from "react"
import { useTranslations } from "@/lib/i18n/use-translations"

type Plan = {
  name: string
  description: string
  monthlyPrice: number
  yearlyPrice: number
  features: string[]
  cta: string
  popular: boolean
}

const Pricing = () => {
  const [annual, setAnnual] = useState<boolean>(false)
  const { t } = useTranslations()

  const plans: Plan[] = [
    {
      name: t("free"),
      description: t("freeDesc"),
      monthlyPrice: 0,
      yearlyPrice: 0,
      features: [
        "Up to 3 trips per year",
        "Basic expense splitting",
        "Simple itinerary planning",
        "Up to 5 travelers per trip",
        "Email support",
      ],
      cta: t("getStarted"),
      popular: false,
    },
    {
      name: t("premium"),
      description: t("premiumDesc"),
      monthlyPrice: 9.99,
      yearlyPrice: 99.99,
      features: [
        "Unlimited trips",
        "Advanced expense tracking",
        "Detailed itinerary planning",
        "Up to 15 travelers per trip",
        "Group chat",
        "Priority support",
        "Custom trip templates",
      ],
      cta: t("startFreeTrial"),
      popular: true,
    },
    {
      name: t("business"),
      description: t("businessDesc"),
      monthlyPrice: 29.99,
      yearlyPrice: 299.99,
      features: [
        "Unlimited trips",
        "Professional expense management",
        "Advanced itinerary tools",
        "Unlimited travelers",
        "Dedicated account manager",
        "API access",
        "White-labeling options",
        "Analytics dashboard",
      ],
      cta: t("contactSales"),
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("pricingTitle")}</h2>
            <p className="text-xl text-gray-600 mb-8">{t("pricingSubtitle")}</p>

            {/* Billing toggle */}
            <div className="flex items-center justify-center mb-8">
              <span className={`mr-3 ${annual ? "text-gray-500" : "text-gray-900 font-medium"}`}>{t("monthly")}</span>
              <button
                onClick={() => setAnnual(!annual)}
                className="relative inline-flex h-6 w-12 items-center rounded-full bg-teal-600"
              >
                <span className="sr-only">Toggle billing frequency</span>
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                    annual ? "translate-x-7" : "translate-x-1"
                  }`}
                />
              </button>
              <span className={`ml-3 ${annual ? "text-gray-900 font-medium" : "text-gray-500"}`}>
                {t("yearly")} <span className="text-teal-600 font-medium">({t("savePercent")})</span>
              </span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white rounded-xl shadow-lg overflow-hidden relative ${
                plan.popular ? "ring-2 ring-teal-600 transform md:-translate-y-4" : ""
              }`}
            >
              {plan.popular && (
                <div className="bg-teal-600 text-white text-center py-1 text-sm font-medium">{t("mostPopular")}</div>
              )}

              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    ${annual ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-600">{plan.monthlyPrice === 0 ? "" : annual ? "/year" : "/month"}</span>
                </div>

                <Button
                  className={`w-full mb-8 ${plan.popular ? "bg-teal-600 hover:bg-teal-700" : ""}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>

                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
