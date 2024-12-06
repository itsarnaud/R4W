import { Link } from "react-router-dom"

export default function Navbar() {

  return (
    <header className="px-7 h-[10vh] flex items-center bg-[#34ACF1]">
      <nav className="flex justify-between items-center w-full text-white">

        <img src="/whale-icon.svg" alt="icon" className="h-10 w-10" />

        <div className="flex items-center gap-12 uppercase font-bold text-lg">
          <Link href="/">home</Link>
          <Link href="/">quizz</Link>
          <Link href="/">about us</Link>
        </div>

        <div></div>

      </nav>
    </header>
  )

}