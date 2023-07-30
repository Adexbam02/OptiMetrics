import { footerLinks } from "../data.js";
import "../components/footer.css";
import { Link } from "react-router-dom";
import NewLogoWhite from "../assets/NewLogoWhite.png";

const Footer = () => {
  // const handleLinkClick = (url) => {
  //   // Open the link in a new tab
  //   const newTab = window.open(url, '_blank');
  //   newTab.focus();
  // };
  return (
    <footer>
      <div className="container footerContainer">
        <div className="footerInfo">
          <a href="/" className="logo">
            <img src={NewLogoWhite} alt="Logo" />
            <h3>OptiMetrics</h3>
          </a>
          <p>
            Empowering Progress through Data Insights - OptiMetrics: Your
            Strategic Partner in Unleashing the Power of Data Analytics.
            Discover the Future of Informed Decision-Making.
          </p>
          <p>All rights reserved.</p>
        </div>

        <div className="Footer">
          {footerLinks.map((footerLink, index) => (
            <div key={index} className="footers">
              <h4 className="footerTitle">{footerLink.title}</h4>
              <ul className="footerContent">
                {footerLink.links.map((link, name, subIndex) => (
                  <Link key={subIndex} to={link.link} className="footerLi">
                    {link.name}
                  </Link>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
