import Link from "next/link"

const Header = () => {
  return (
    <div className="w-full flex justify-center items-center p-2.5 bg-amber-50 text-black h-20 gap-2 ">
      <Link href='/'>Home</Link>
      <Link href='/locations'>Locations</Link>
    </div>
  )
}

export default Header