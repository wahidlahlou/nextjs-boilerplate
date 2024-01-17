import Link from "next/link"

export default function Logo() {
  return (
    <div className="logo flex items-center flex-shrink-0">
      <Link href="/">
        <h1 className="text-lg font-bold flex flex-row gap-2 m-0">FOOD COST</h1>
      </Link>
    </div>
  )
}
