export function NavBar() {
  return (
    <nav className="m-0 bg-blue-400 sticky top-0">
      <ul className="flex py-3">
        <a href="#home">
          <li className="ml-8 text-white text-lg font-semibold">
            Home
          </li>
        </a>
        <a>
          <li className="ml-8 text-white text-lg font-semibold">
            Media
          </li>
        </a>
        <a>
          <li className="ml-8 text-white text-lg font-semibold">
            Members
          </li>
        </a>
      </ul>
    </nav>
  )
}
