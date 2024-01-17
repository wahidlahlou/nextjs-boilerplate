import Link from "next/link"
import horizontalNavItems from "@/data/layout/horizontal-nav-items"
import NavItemType from "@/lib/types/nav-item-type"

const NavItem = ({ href, title, variant = "link" }: NavItemType) => {
  let className: string = ""
  if (variant === "link") className = "hover:bg-foreground/5 px-3 py-2 rounded"
  else if (variant === "button") className = "font-semibold px-3 py-2 rounded"

  return (
    <li>
      <Link className={className} href={href}>
        {title}
      </Link>
    </li>
  )
}

export default function HorizontalNav() {
  return (
    <nav className="relative">
      <ul className="flex flex-row gap-5">
        {horizontalNavItems.map((item, index) => {
          return <NavItem key={index} href={item.href} title={item.title} variant={item.variant} />
        })}
      </ul>
    </nav>
  )
}
