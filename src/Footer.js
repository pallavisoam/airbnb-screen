import React from "react";
import "./Footer.css";

function Footer() {
  let date = new Date();
  let current = date.getFullYear();
  return (
    <div className="footer">
      <p>© {current} Airbnb clone! No rights reserved - this is a demo!</p>
      <p>Privacy • Terms • Sitemap • Company Details</p>
    </div>
  );
}

export default Footer;
