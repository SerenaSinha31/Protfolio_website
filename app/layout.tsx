import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Serena Sinha - Portfolio",
  description: "Computer Science Engineering Student & Full Stack Developer",
  keywords: ["Serena Sinha", "Portfolio", "Full Stack Developer", "Computer Science", "React", "Node.js"],
  authors: [{ name: "Serena Sinha" }],
  openGraph: {
    title: "Serena Sinha - Portfolio",
    description: "Computer Science Engineering Student & Full Stack Developer",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
