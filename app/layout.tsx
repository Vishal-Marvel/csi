import './globals.css'
import type { Metadata } from 'next'
import {Inter, Open_Sans} from 'next/font/google'
import {Header} from "@/components/header";
import {Footer} from "@/components/footer";
import {cn} from "@/lib/utils";

const inter = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Computer Society of India'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

  <html lang="en">
      <body className={cn(inter.className)}>
      <Header/>

      {children}
      <Footer/>
      </body>
    </html>
  )
}
