import NavItemType from "@/lib/types/nav-item-type"

const dropdownNavMobileItems: NavItemType[] = [
  {
    title: "HOME",
    href: "/",
  },
  {
    title: "PAGE",
    href: "/page",
    // variant: "button",
  },
  {
    title: "SECONDARY",
    href: "/secondary",
    separator: true,
  },
  {
    title: "CONTACT",
    href: "/contact",
  },
]

export default dropdownNavMobileItems
