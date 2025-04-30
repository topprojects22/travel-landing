'use client'

import type React from 'react'

import { createContext, useContext, useEffect, useState } from 'react'
import type { Locale } from './translations'

type LocaleContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
}

const LocaleContext = createContext<LocaleContextType>({
    locale: 'en',
    setLocale: () => {},
})

type LocaleProviderProps = {
  children: React.ReactNode
}

export const LocaleProvider = ({ children }: LocaleProviderProps) => {
    const [locale, setLocale] = useState<Locale>('en')

    // Load saved locale from localStorage on client side
    useEffect(() => {
        const savedLocale = localStorage.getItem('locale') as Locale
        if (savedLocale && (savedLocale === 'en' || savedLocale === 'ru')) {
            setLocale(savedLocale)
        }
    }, [])

    // Save locale to localStorage when it changes
    useEffect(() => {
        localStorage.setItem('locale', locale)
    }, [locale])

    return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>
}

export const useLocale = () => {
    const context = useContext(LocaleContext)
    if (!context) {
        throw new Error('useLocale must be used within a LocaleProvider')
    }
    return context
}
