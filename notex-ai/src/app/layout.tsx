import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import Provider from '@/components/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NoteX-AI',
  description: 'A Note Taking App that is AI Assisted , Allows you to manage tasks and improve productivity',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
      <html lang="en">
        <ClerkProvider>
          <Provider>
          <body className={inter.className}>{children}</body>
          </Provider>
        
        </ClerkProvider>
      </html>
    
    
  )
}
