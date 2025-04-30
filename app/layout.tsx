import type React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { LocaleProvider } from '@/lib/i18n/locale-context'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
    title: 'TravelMates - Collaborative Travel Planning Platform',
    description:
    'Plan, organize, and share expenses on group trips with friends and family. Make travel planning simple and enjoyable with TravelMates.',
    manifest: '/manifest.json',
    generator: 'v0.dev',
}

type RootLayoutProps = {
  children: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
    return (
        <html lang={'en'} suppressHydrationWarning={true}>
            <head />
            <body className={inter.className}>
                <ThemeProvider attribute={'class'} defaultTheme={'light'} enableSystem={true} disableTransitionOnChange={true}>
                    <LocaleProvider>{children}</LocaleProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}

export default RootLayout
