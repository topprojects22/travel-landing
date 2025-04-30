'use client'

import type React from 'react'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { Send } from 'lucide-react'
import { useTranslations } from '@/lib/i18n/use-translations'

const CTA = () => {
    const [email, setEmail] = useState<string>('')
    const [submitted, setSubmitted] = useState<boolean>(false)
    const { t } = useTranslations()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically send the email to your backend
        setSubmitted(true)
    }

    return (
        <section className={'py-20 bg-teal-600'}>
            <div className={'container mx-auto px-4 sm:px-6 lg:px-8'}>
                <motion.div
                    className={'max-w-4xl mx-auto text-center'}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className={'text-3xl md:text-4xl font-bold text-white mb-4'}>{t('ctaTitle')}</h2>
                    <p className={'text-xl text-teal-100 mb-8 max-w-2xl mx-auto'}>{t('ctaSubtitle')}</p>

                    {submitted ? (
                        <motion.div
                            className={'bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-md mx-auto'}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className={'text-white text-xl font-medium mb-2'}>{t('thankYou')}</div>
                            <p className={'text-teal-100'}>{t('confirmationSent')}</p>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className={'max-w-md mx-auto'}>
                            <div className={'flex flex-col sm:flex-row gap-3'}>
                                <Input
                                    type={'email'}
                                    placeholder={t('enterEmail')}
                                    className={'bg-white/10 text-white placeholder:text-teal-200 border-teal-400'}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required={true}
                                />
                                <Button type={'submit'} className={'bg-white text-teal-600 hover:bg-teal-50 group'}>
                                    {t('getStartedFree')}
                                    <Send className={'ml-2 h-4 w-4 transition-transform group-hover:translate-x-1'} />
                                </Button>
                            </div>
                            <p className={'text-teal-200 text-sm mt-3'}>{t('noCardRequired')}</p>
                        </form>
                    )}

                    <div className={'mt-12 flex flex-wrap justify-center gap-8'}>
                        <div className={'text-center'}>
                            <div className={'text-3xl font-bold text-white mb-1'}>10,000+</div>
                            <div className={'text-teal-200'}>{t('activeUsers')}</div>
                        </div>
                        <div className={'text-center'}>
                            <div className={'text-3xl font-bold text-white mb-1'}>50,000+</div>
                            <div className={'text-teal-200'}>{t('tripsPlannedStat')}</div>
                        </div>
                        <div className={'text-center'}>
                            <div className={'text-3xl font-bold text-white mb-1'}>120+</div>
                            <div className={'text-teal-200'}>{t('countries')}</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default CTA
