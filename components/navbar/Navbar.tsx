import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import ActiveLink from "../active-link/ActiveLink";

const NavItems = [
  { path: "/about", text: "About" },
  { path: "/pricing", text: "Pricing" },
  { path: "/contact", text: "Contact" },
];

const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href="/" className="flex items-center">
        <HomeIcon className="mr-2" />
        Home
      </Link>

      <div className="flex flex-1"></div>

      {NavItems.map((item, index) => {
        return <ActiveLink key={index} {...item} />;
      })}
    </nav>
  );
};

export default Navbar;
