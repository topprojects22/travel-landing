'use client'

import { motion } from 'framer-motion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { useTranslations } from '@/lib/i18n/use-translations'

type FAQItem = {
  question: string
  answer: string
}

const FAQ = () => {
    const { t } = useTranslations()

    const faqs: FAQItem[] = [
        {
            question: 'How does expense splitting work?',
            answer:
        'Our platform automatically calculates each person\'s share based on who participated in each activity or expense. You can split costs equally, by percentage, or by custom amounts. Everyone can see a transparent breakdown of all expenses and their personal balance.',
        },
        {
            question: 'Can I use TravelMates for different types of trips?',
            answer:
        'TravelMates works for all types of group travel including family vacations, friend getaways, business trips, bachelor/bachelorette parties, and more. The platform is flexible enough to accommodate different group sizes and trip durations.',
        },
        {
            question: 'Is my payment information secure?',
            answer:
        'Yes, we take security very seriously. We use bank-level encryption and never store your full credit card details on our servers. All payments are processed through trusted payment providers that comply with PCI DSS standards.',
        },
        {
            question: 'Can I access TravelMates offline?',
            answer:
        'While the full functionality requires an internet connection, our mobile app allows you to download trip details for offline viewing. This means you can access your itinerary, contact information, and important documents even without internet access.',
        },
        {
            question: 'How do I invite people who don\'t have TravelMates accounts?',
            answer:
        'It\'s simple! You can invite anyone via email or by sharing a unique trip link. When they receive the invitation, they\'ll be guided through a quick signup process to join your trip. They only need to create a basic account to participate.',
        },
        {
            question: 'What happens if someone doesn\'t pay their share?',
            answer:
        'Our platform tracks all balances and sends friendly reminders to those who have outstanding payments. The trip organizer can also see who has and hasn\'t paid. We provide multiple payment options to make settling up as convenient as possible.',
        },
    ]

    return (
        <section id={'faq'} className={'py-20 bg-white'}>
            <div className={'container mx-auto px-4 sm:px-6 lg:px-8'}>
                <div className={'text-center max-w-3xl mx-auto mb-16'}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className={'text-3xl md:text-4xl font-bold text-gray-900 mb-4'}>{t('faqTitle')}</h2>
                        <p className={'text-xl text-gray-600'}>{t('faqSubtitle')}</p>
                    </motion.div>
                </div>

                <motion.div
                    className={'max-w-3xl mx-auto'}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <Accordion type={'single'} collapsible={true} className={'w-full'}>
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className={'text-left text-lg font-medium'}>{faq.question}</AccordionTrigger>
                                <AccordionContent className={'text-gray-600'}>{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    )
}

export default FAQ
