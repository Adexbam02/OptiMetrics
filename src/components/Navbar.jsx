import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import NewLogoWhite from "../assets/NewLogoWhite.png";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav>
      <div className="container">
        <Link to="/">
          <a href="/" className="logo">
            <img src={NewLogoWhite} alt="Logo" />
            <h3>OptiMetrics</h3>
          </a>
        </Link>

        <div className="navMenu">
          <ul className="navLinks">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="product">Product</Link>
            </li>
            <li>
              <Link to="software">Software</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
          </ul>

          <div>
            <img
              src={toggle ? close : menu}
              alt=""
              className="menuBtn"
              onClick={() => setToggle((prev) => !prev)}
            />

            <ul className={`sidebar navL ${toggle ? "flex" : "hidden"}`}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="product">Product</Link>
              </li>
              <li>
                <Link to="software">Software</Link>
              </li>
              <li>
                <Link to="about">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
