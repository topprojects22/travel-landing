"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { useTranslations } from "@/lib/i18n/use-translations"

const Footer = () => {
  const { t } = useTranslations()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">TravelMates</h3>
            <p className="mb-4">Making group travel planning simple, collaborative, and stress-free.</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-teal-400 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-teal-400 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-teal-400 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-teal-400 transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">{t("product")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="hover:text-teal-400 transition-colors">
                  {t("features")}
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-teal-400 transition-colors">
                  {t("pricing")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-teal-400 transition-colors">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-teal-400 transition-colors">
                  Product Updates
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">{t("resources")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-teal-400 transition-colors">
                  {t("blog")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-teal-400 transition-colors">
                  {t("travelGuides")}
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-teal-400 transition-colors">
                  {t("faq")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-teal-400 transition-colors">
                  {t("supportCenter")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">{t("company")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-teal-400 transition-colors">
                  {t("aboutUs")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-teal-400 transition-colors">
                  {t("careers")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-teal-400 transition-colors">
                  {t("privacyPolicy")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-teal-400 transition-colors">
                  {t("termsOfService")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>
            © {new Date().getFullYear()} TravelMates. {t("allRightsReserved")}
          </p>
          <div className="mt-4 md:mt-0">
            <select className="bg-gray-800 text-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-1 focus:ring-teal-500">
              <option value="en">{t("english")}</option>
              <option value="ru">{t("russian")}</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
