import './globals.css'
import type {Metadata} from 'next'
import {Open_Sans} from 'next/font/google'
import {Header} from "@/components/header";
import {Footer} from "@/components/footer";
import {cn} from "@/lib/utils";
import React from "react";

const inter = Open_Sans({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Computer Society of India',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

  <html lang="en">
  <head>
      <link rel="icon" href="/csilogo.webp" sizes="any"/>
  </head>
  <body className={cn(inter.className)}>
  <Header/>

  {children}
  <Footer/>
  </body>
  </html>
  )
}
