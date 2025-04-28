'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTranslations } from '@/lib/i18n/use-translations'

type Testimonial = {
  quote: string
  author: string
  role: string
  avatar: string
  rating: number
}

const Testimonials = () => {
    const { t } = useTranslations()
    const [activeIndex, setActiveIndex] = useState<number>(0)

    const testimonials: Testimonial[] = [
        {
            quote:
        'TravelMates transformed our annual friend trip. We saved hours of planning time and avoided all the usual money arguments. Everyone knew exactly what they owed!',
            author: 'Sarah Johnson',
            role: 'Group Trip Organizer',
            avatar: '/placeholder.svg?height=80&width=80',
            rating: 5,
        },
        {
            quote:
        'As someone who always ends up organizing trips, this platform is a game-changer. The expense splitting feature alone saved our friendships after our Europe tour.',
            author: 'Michael Chen',
            role: 'Frequent Traveler',
            avatar: '/placeholder.svg?height=80&width=80',
            rating: 5,
        },
        {
            quote:
        'We used TravelMates for our family reunion with 15 people across 3 generations. Everyone could participate in the planning regardless of their tech skills.',
            author: 'Elena Rodriguez',
            role: 'Family Trip Coordinator',
            avatar: '/placeholder.svg?height=80&width=80',
            rating: 5,
        },
    ]

    const nextTestimonial = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <section id={'testimonials'} className={'py-20 bg-white'}>
            <div className={'container mx-auto px-4 sm:px-6 lg:px-8'}>
                <div className={'text-center max-w-3xl mx-auto mb-16'}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className={'text-3xl md:text-4xl font-bold text-gray-900 mb-4'}>{t('testimonialsTitle')}</h2>
                        <p className={'text-xl text-gray-600'}>{t('testimonialsSubtitle')}</p>
                    </motion.div>
                </div>

                <div className={'max-w-4xl mx-auto'}>
                    <div className={'relative bg-white rounded-2xl shadow-xl p-8 md:p-12'}>
                        {/* Decorative elements */}
                        <div className={'absolute top-0 left-0 transform -translate-x-4 -translate-y-4'}>
                            <div className={'text-6xl text-teal-200'}>&quot;</div>
                        </div>

                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className={'text-center'}
                        >
                            <div className={'mb-6'}>
                                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                                    <Star key={i} className={'inline-block w-6 h-6 text-yellow-400 fill-yellow-400'} />
                                ))}
                            </div>

                            <blockquote className={'text-xl md:text-2xl text-gray-700 italic mb-8'}>
                &quot;{testimonials[activeIndex].quote}&quot;
                            </blockquote>

                            <div className={'flex items-center justify-center'}>
                                <div className={'mr-4'}>
                                    <Image
                                        src={testimonials[activeIndex].avatar || '/placeholder.svg'}
                                        alt={testimonials[activeIndex].author}
                                        width={64}
                                        height={64}
                                        className={'rounded-full'}
                                    />
                                </div>
                                <div className={'text-left'}>
                                    <div className={'font-semibold text-lg'}>{testimonials[activeIndex].author}</div>
                                    <div className={'text-gray-500'}>{testimonials[activeIndex].role}</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Navigation buttons */}
                        <div className={'absolute bottom-4 right-4 flex space-x-2'}>
                            <Button variant={'outline'} size={'icon'} onClick={prevTestimonial} className={'rounded-full'}>
                                <ChevronLeft className={'h-5 w-5'} />
                            </Button>
                            <Button variant={'outline'} size={'icon'} onClick={nextTestimonial} className={'rounded-full'}>
                                <ChevronRight className={'h-5 w-5'} />
                            </Button>
                        </div>
                    </div>

                    {/* Indicators */}
                    <div className={'flex justify-center mt-6 space-x-2'}>
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`w-3 h-3 rounded-full transition-colors ${
                                    index === activeIndex ? 'bg-teal-600' : 'bg-gray-300'
                                }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
