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
          <NavLink className="animated-underline" to="/about-us">
            Chi Siamo
          </NavLink>
        </li>
        <li>
          <NavLink className="animated-underline" to="/contacts">
            Contatti
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
