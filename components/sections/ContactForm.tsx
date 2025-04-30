'use client'

import type React from 'react'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { CheckCircle2, Send } from 'lucide-react'
import { useTranslations } from '@/lib/i18n/use-translations'
import { z } from 'zod'

const formSchema = z.object({
    name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
    email: z.string().email({ message: 'Please enter a valid email address' }),
    subject: z.string().min(1, { message: 'Please select a subject' }),
    message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
})

type FormData = z.infer<typeof formSchema>

const ContactForm = () => {
    const { t } = useTranslations()
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: '',
    })
    const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

    const validateField = (field: keyof FormData, value: string) => {
        try {
            formSchema.shape[field].parse(value)
            setErrors((prev) => ({ ...prev, [field]: undefined }))
            return true
        } catch (error) {
            if (error instanceof z.ZodError) {
                setErrors((prev) => ({ ...prev, [field]: error.errors[0].message }))
                return false
            }
            return false
        }
    }

    const handleChange = (field: keyof FormData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
        validateField(field, value)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Validate all fields
        let isValid = true
        Object.entries(formData).forEach(([field, value]) => {
            const fieldValid = validateField(field as keyof FormData, value)
            if (!fieldValid) isValid = false
        })

        if (!isValid) {
            setIsSubmitting(false)
            return
        }

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500))

        setIsSubmitting(false)
        setIsSubmitted(true)
    }

    return (
        <section id={'contact'} className={'py-20 bg-white'}>
            <div className={'container mx-auto px-4 sm:px-6 lg:px-8'}>
                <div className={'max-w-3xl mx-auto'}>
                    <motion.div
                        className={'text-center mb-12'}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className={'text-3xl md:text-4xl font-bold text-gray-900 mb-4'}>Get In Touch</h2>
                        <p className={'text-xl text-gray-600'}>
              Have questions or feedback? We&apos;d love to hear from you. Fill out the form below and we&apos;ll get back to you
              shortly.
                        </p>
                    </motion.div>

                    {isSubmitted ? (
                        <motion.div
                            className={'bg-teal-50 border border-teal-200 rounded-xl p-8 text-center'}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <CheckCircle2 className={'h-16 w-16 text-teal-600 mx-auto mb-4'} />
                            <h3 className={'text-2xl font-bold text-gray-900 mb-2'}>Thank You!</h3>
                            <p className={'text-gray-600 mb-4'}>
                Your message has been sent successfully. We&apos;ll get back to you as soon as possible.
                            </p>
                            <Button
                                variant={'outline'}
                                className={'mt-2'}
                                onClick={() => {
                                    setIsSubmitted(false)
                                    setFormData({ name: '', email: '', subject: '', message: '' })
                                }}
                            >
                Send Another Message
                            </Button>
                        </motion.div>
                    ) : (
                        <motion.form
                            onSubmit={handleSubmit}
                            className={'bg-white rounded-xl border border-gray-200 shadow-sm p-6 md:p-8'}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className={'grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'}>
                                <div className={'space-y-2'}>
                                    <label htmlFor={'name'} className={'text-sm font-medium text-gray-700'}>
                    Your Name
                                    </label>
                                    <Input
                                        id={'name'}
                                        placeholder={'John Doe'}
                                        value={formData.name}
                                        onChange={(e) => handleChange('name', e.target.value)}
                                        className={errors.name ? 'border-red-300 focus-visible:ring-red-500' : ''}
                                    />
                                    {errors.name && <p className={'text-sm text-red-500'}>{errors.name}</p>}
                                </div>
                                <div className={'space-y-2'}>
                                    <label htmlFor={'email'} className={'text-sm font-medium text-gray-700'}>
                    Email Address
                                    </label>
                                    <Input
                                        id={'email'}
                                        type={'email'}
                                        placeholder={'your@email.com'}
                                        value={formData.email}
                                        onChange={(e) => handleChange('email', e.target.value)}
                                        className={errors.email ? 'border-red-300 focus-visible:ring-red-500' : ''}
                                    />
                                    {errors.email && <p className={'text-sm text-red-500'}>{errors.email}</p>}
                                </div>
                            </div>

                            <div className={'space-y-2 mb-6'}>
                                <label htmlFor={'subject'} className={'text-sm font-medium text-gray-700'}>
                  Subject
                                </label>
                                <Select value={formData.subject} onValueChange={(value) => handleChange('subject', value)}>
                                    <SelectTrigger
                                        id={'subject'}
                                        className={errors.subject ? 'border-red-300 focus-visible:ring-red-500' : ''}
                                    >
                                        <SelectValue placeholder={'Select a subject'} />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value={'general'}>General Inquiry</SelectItem>
                                        <SelectItem value={'support'}>Customer Support</SelectItem>
                                        <SelectItem value={'feedback'}>Feedback</SelectItem>
                                        <SelectItem value={'partnership'}>Partnership Opportunity</SelectItem>
                                        <SelectItem value={'other'}>Other</SelectItem>
                                    </SelectContent>
                                </Select>
                                {errors.subject && <p className={'text-sm text-red-500'}>{errors.subject}</p>}
                            </div>

                            <div className={'space-y-2 mb-6'}>
                                <label htmlFor={'message'} className={'text-sm font-medium text-gray-700'}>
                  Your Message
                                </label>
                                <Textarea
                                    id={'message'}
                                    placeholder={'How can we help you?'}
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) => handleChange('message', e.target.value)}
                                    className={errors.message ? 'border-red-300 focus-visible:ring-red-500' : ''}
                                />
                                {errors.message && <p className={'text-sm text-red-500'}>{errors.message}</p>}
                            </div>

                            <Button type={'submit'} className={'w-full bg-teal-600 hover:bg-teal-700 text-white'} disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <span className={'flex items-center'}>
                                        <svg
                                            className={'animate-spin -ml-1 mr-2 h-4 w-4 text-white'}
                                            xmlns={'http://www.w3.org/2000/svg'}
                                            fill={'none'}
                                            viewBox={'0 0 24 24'}
                                        >
                                            <circle
                                                className={'opacity-25'}
                                                cx={'12'}
                                                cy={'12'}
                                                r={'10'}
                                                stroke={'currentColor'}
                                                strokeWidth={'4'}
                                            ></circle>
                                            <path
                                                className={'opacity-75'}
                                                fill={'currentColor'}
                                                d={'M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'}
                                            ></path>
                                        </svg>
                    Sending...
                                    </span>
                                ) : (
                                    <span className={'flex items-center'}>
                    Send Message
                                        <Send className={'ml-2 h-4 w-4'} />
                                    </span>
                                )}
                            </Button>
                        </motion.form>
                    )}
                </div>
            </div>
        </section>
    )
}

export default ContactForm
