import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../navBar/navbar.css";
import contactIcon from "../../assets/contactIcon.png";
import birbIcon from "../../assets/birbIcon.png";
import donateIcon from "../../assets/donateIcon.png";
import logoutIcon from "../../assets/logoutIcon.png";

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
              My Birbs
            </NavLink>
            <img src={birbIcon} alt="" className="birbIcon" />
          </button>
          <button className="navBtn">
            <NavLink
              to="/profile"
              style={({ isActive }) => ({
                color: isActive ? "cyan" : "white",
              })}
            >
              My Profile
            </NavLink>
            <img src={contactIcon} alt="" className="contactIcon" />
          </button>
          {/* <button className="navBtn">
            <NavLink
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? "cyan" : "white",
              })}
            >
              Donate
            </NavLink>
            <img src={donateIcon} alt="" className="donateIcon" />
          </button> */}
          <button
            className="navBtn"
            onClick={() => {
              console.log("monke");
            }}
          >
            <NavLink
              to="/logout"
              target="_blank"
              style={({ isActive }) => ({
                color: isActive ? "cyan" : "white",
              })}
            >
              Log Out
            </NavLink>
            <img src={logoutIcon} alt="" className="logoutIcon" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
