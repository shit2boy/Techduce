import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="foot">
      <div className="grid-4 ">
        <div className="">
          <p className="foot-icon p-2">
            {" "}
            <i class="fas fa-leaf fa-2x" />{" "}
          </p>
          <h3 className="footTitle">A learning platform powered by Quillow</h3>
          <p>
            <a href="mailto:hello@quillow.edu">hello@quillow.edu</a>
          </p>
        </div>
        {/* <div> */}
        <ul className="foot-items">
          <li>
            <h2>Platform</h2>
          </li>
          <li>Quillow for business</li>
          <li>teach on Quillow</li>
          <li>Get the App</li>
        </ul>
        {/* </div> */}
        {/* <div> */}
        <ul className="foot-items">
          <li>
            <h2>Resources</h2>
          </li>
          <li>Careers</li>
          <li>Blog</li>
          <li>Help and support</li>
          <li>Affliate</li>
        </ul>
        {/* </div> */}
        {/* <div> */}
        <ul className="foot-items">
          <li>
            <h2>company</h2>
          </li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Terms</li>
          <li>Privacy policy</li>
        </ul>
        {/* </div> */}
      </div>
    </footer>
  );
};

export default Footer;
