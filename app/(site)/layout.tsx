import { Footer, Header } from '@/components'
import '../globals.css'
import type { Metadata } from 'next'
import { Montserrat, Syne } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { neobrutalism } from '@clerk/themes'

const montserrat = Montserrat({
  subsets: ['latin-ext'],
  weight: ["300", "400", "500","600","700","800"],
  display: "swap",
  variable: "--font-montserrat"
})

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-syne"
})

export const metadata: Metadata = {
  title: 'ClickCraze - All product in one place | E-commerce app',
  description: 'Best place to shop all products in one place.',
  other: {
    "theme-color": "white",
    "color-scheme": "light only",
    "twitter:image": "https://images.pexels.com/photos/5632403/pexels-photo-5632403.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "twitter:card": "summary_large_image",
    "og:image": "https://images.pexels.com/photos/5632403/pexels-photo-5632403.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "og:type": "website",
    "og:site_name": "ClickCraze",
    "og:url":"https://click-craze.vercel.app/"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider appearance={{
      baseTheme: neobrutalism,
    }}>
      <html lang="en">
        <body className={`${montserrat.variable} font-montserrat ${syne.variable} min-h-screen flex flex-col bg-gradient-radial from-zinc-100 to-white`}>
          <Header />
          <div className='flex-1'>
            {children}
          </div>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  )
}
