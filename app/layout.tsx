import "@/styles/globals.css"
import { Inter as FontSans } from "next/font/google"
import type { Metadata } from "next"

import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/layout/theme-provider"
import Header from "@/components/layout/header/header"
import Footer from "@/components/layout/footer"
import { Toaster } from "sonner"

import HorizontalNav from "@/components/layout/header/horizontal-nav"
import DropdownNavMobile from "@/components/layout/header/dropdown-nav-mobile"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Sandwicherie",
  description: "Les meilleurs sandwichs de Casa livrés chez vous",
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="page-container h-screen flex flex-col">
            <Toaster position="top-center" />
            <Header horizontalNav={<HorizontalNav />} dropdownNavMobile={<DropdownNavMobile />} />
            <main className="flex flex-col mt-14 p-6 items-center flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
