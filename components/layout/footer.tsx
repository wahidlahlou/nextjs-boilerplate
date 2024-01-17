import Link from "next/link"

export default function Footer() {
  return (
    <footer className="p-4 h-14 items-center flex-shrink-0 flex flex-row justify-between border-t w-full bg-zinc-900 text-gray-300 text-sm">
      <div>Wahid Lahlou &copy; 2024</div>
      <Link className="hover:underline" href="/admin/dashboard">
        Admin
      </Link>
    </footer>
  )
}
