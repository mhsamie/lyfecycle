import "./navbar.css";
import logo from "../images/LC-Logo.png";
import hambergerMenu from "../images/Menu-Icon.png";
import SecondryBtn from "../UI/SecondryBtn";
const NavBar = () => {
  return (
    <header>
      <div>
        <img className="logo" src={logo} alt="" />
      </div>
      <nav>
        <div id="btn">
          <SecondryBtn width={{ width: "164px" }} text={"Book Now"} />
        </div>
        <div>
          <img className="hamberger-menu" src={hambergerMenu} alt="" />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
