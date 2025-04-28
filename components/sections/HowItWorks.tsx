"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useTranslations } from "@/lib/i18n/use-translations"

type Step = {
  number: string
  title: string
  description: string
  image: string
}

const HowItWorks = () => {
  const { t } = useTranslations()

  const steps: Step[] = [
    {
      number: "01",
      title: t("step1Title"),
      description: t("step1Desc"),
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      number: "02",
      title: t("step2Title"),
      description: t("step2Desc"),
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      number: "03",
      title: t("step3Title"),
      description: t("step3Desc"),
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      number: "04",
      title: t("step4Title"),
      description: t("step4Desc"),
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-white to-teal-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t("howItWorksTitle")}</h2>
            <p className="text-xl text-gray-600">{t("howItWorksSubtitle")}</p>
          </motion.div>
        </div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-8 lg:gap-16`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex-1">
                <div className="mb-4">
                  <span className="inline-block text-5xl font-bold text-teal-200">{step.number}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-lg text-gray-600 mb-6">{step.description}</p>
              </div>

              <div className="flex-1">
                <div className="relative">
                  <div className="absolute -inset-4 bg-teal-100 rounded-lg opacity-30 blur-lg -z-10" />
                  <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                  >
                    <Image
                      src={step.image || "/placeholder.svg"}
                      alt={step.title}
                      width={400}
                      height={300}
                      className="rounded-lg shadow-lg w-full"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
