import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="NavBarDiv">
      <ul>
        <li>
          <NavLink
            style={({ isActive }) =>
            isActive ? { color: "white" } : { color: "black" }
          }
            to="/"
          >
            Asset List
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "white" } : { color: "black" }
            }
            to="/upload"
          >
            Upload Asset
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) =>
            isActive ? { color: "white" } : { color: "black" }
          }
            to="/setting"
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
