import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../navBar/navbar.css";

const Navbar = () => {
  const location = useLocation();
  console.log(location);
  if (location.pathname === "/login") return <></>;
  return (
    <>
      <nav className="navBarContainer solid">
        <div className="navBtnContainer">
          <button className="navBtn">
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "cyan" : "white",
              })}
            >
              {/* <img src="" alt="" className="desktopMenuBtn" /> */}
              About Me
            </NavLink>
          </button>
          <button className="navBtn">
            <NavLink
              to="/projects"
              style={({ isActive }) => ({
                color: isActive ? "cyan" : "white",
              })}
            >
              {/* <img src="" alt="" className="desktopMenuImg" /> */}
              Portfolio
            </NavLink>
          </button>
          <button className="navBtn">
            <NavLink
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? "cyan" : "white",
              })}
            >
              {/* <img src="" alt="" className="desktopMenuImg" /> */}
              Contact Me
            </NavLink>
          </button>
          <button
            className="navBtn"
            onClick={() => {
              console.log("monke");
            }}
          >
            <NavLink
              to="/public/Garrett_Gonzales_Resume_2023.pdf"
              target="_blank"
              style={({ isActive }) => ({
                color: isActive ? "cyan" : "white",
              })}
            >
              {/* <img src="" alt="" className="desktopMenuImg" /> */}
              My Resume
            </NavLink>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
