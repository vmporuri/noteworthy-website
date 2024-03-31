import logo from "../assets/noteworthy-bear.png";

export function NavBar() {
  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "Media", href: "#media" },
    { label: "Members", href: "#members" },
  ];

  return (
    <nav className="m-0 bg-blue-400 sticky top-0">
      <ul className="flex px-4 justify-between">
        <div className="flex">
          <a href="#home" className="hover:bg-blue-300 p-3 align-self-start">
            <li className="text-white text-lg font-semibold ">
              <img src={logo} className="h-7" alt="Logo" />
            </li>
          </a>
          <a className="p-3 align-self-start">
            <li className="text-white text-lg font-semibold ">
              Noteworthy
            </li>
          </a>
        </div>
        <div className="flex">
          {menuItems.map((item, index) => (
            <a key={index} href={item.href} className="hover:bg-blue-300 p-3">
              <li className="text-white text-lg font-semibold">
                {item.label}
              </li>
            </a>
          ))}
        </div>
      </ul>
    </nav>
  );
}
