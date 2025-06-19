import { NavLink } from "react-router-dom";

export default function MainNav() {
  return (
    <nav>
      <ul className="flex gap-x-6 text-lg text-black">
        <li>
          <NavLink className="animated-underline" to="/">
            Home Page
          </NavLink>
        </li>

        <li>
          <a href="#about">chi siamo</a>
        </li>
        <li>
          <a href="#contact"></a>
        </li>
      </ul>
    </nav>
  );
}
