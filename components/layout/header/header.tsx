"use client"

import ThemeSwitcher from "@/components/layout/theme-switcher"
import Logo from "@/components/layout/header/logo"
import { useEffect, useState } from "react"

export default function Header({ horizontalNav, dropdownNavMobile }: { horizontalNav: React.ReactNode; dropdownNavMobile: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <header className="w-full fixed top-0 h-14 p-4 flex flex-shrink-0 items-center justify-between border-b z-10">
      <Logo />
      {!isMobile && horizontalNav}
      <div className="flex items-center gap-2">
        <ThemeSwitcher />
        {isMobile && dropdownNavMobile}
      </div>
    </header>
  )
}
