import { RxHamburgerMenu } from "react-icons/rx"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import NavItemType from "@/lib/types/nav-item-type"
import dropdownNavMobileItems from "@/data/layout/dropdown-nav-mobile-items"

function DropdownItem({ title, href, variant = "link", separator }: NavItemType) {
  let className: string = ""
  if (variant === "link") className = "pl-2"
  else if (variant === "button") className = "font-semibold bg-teal-600 px-3 py-2 rounded hover:bg-rose-700 transition-colors w-full text-white text-center"

  return (
    <>
      <DropdownMenuItem>
        <Link className={className} href={href}>
          {title}
        </Link>
      </DropdownMenuItem>
      {separator && <DropdownMenuSeparator />}
    </>
  )
}

export default function DropdownNavMobile() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative text-2xl ml-1 px-2">
          <RxHamburgerMenu />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-48" align="end" forceMount>
        {dropdownNavMobileItems.map((item, index) => {
          return <DropdownItem key={index} href={item.href} title={item.title} separator={item.separator} variant={item.variant} />
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
