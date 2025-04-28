'use client'

import { useCallback } from 'react'
import { type TranslationKey, translations } from './translations'
import { useLocale } from './locale-context'

export const useTranslations = () => {
    const { locale, setLocale } = useLocale()

    const t = useCallback(
        (key: TranslationKey) => {
            return translations[locale][key] || translations.en[key] || key
        },
        [locale],
    )

    return { t, locale, setLocale }
}
