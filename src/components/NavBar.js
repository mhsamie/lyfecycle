import "./navbar.css";
import logo from "../images/LC-Logo.png";
import hambergerMenu from "../images/Menu-Icon.png";
const NavBar = () => {
  return (
    <header>
      <div>
        <img className="logo" src={logo} alt="" />
      </div>
      <nav>
        <button>Book Now</button>
        <div>
          <img className="hamberger-menu" src={hambergerMenu} alt="" />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
