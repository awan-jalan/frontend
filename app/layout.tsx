
import { Inter } from 'next/font/google'
import Header from '@/components/ui/header'
import "./globals.css"
import "./css/style.css"
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata = {
  icons: {
      icon: '@/public/favicon.png',
  },
  title: 'Project Awan Berjalan',
  description: 'Tugas besar LTKA untuk deteksi jalanan yang rusak',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={`${inter.variable} font-inter antialiased bg-white text-gray-900 tracking-tight`}>
      <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"/>
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}

        </div>
      </body>
    </html>
  )
}
