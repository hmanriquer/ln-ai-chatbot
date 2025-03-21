import type { Metadata } from 'next'
import Providers from '@/app/providers'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Lexis Nexis Hackathon | AI Chatbot',
  description:
    'This is an AI chatbot app built with Next.js, the Lexis Nexis Copilot AI, and Docker',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-svh flex-col antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
