export function NavBar() {
  return (
    <nav className="m-0 bg-blue-400 sticky top-0">
      <ul className="flex pl-4">
        <a href="#home" className="hover:bg-blue-300 p-3">
          <li className="text-white text-lg font-semibold ">
            Home
          </li>
        </a>
        <a href="#home" className="hover:bg-blue-300 p-3">
          <li className="text-white text-lg font-semibold">
            Media
          </li>
        </a>
        <a href="#home" className="hover:bg-blue-300 p-3">
          <li className="text-white text-lg font-semibold">
            Members
          </li>
        </a>
      </ul>
    </nav>
  )
}
