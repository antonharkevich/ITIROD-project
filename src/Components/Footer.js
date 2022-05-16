import React from "react";
import trophy from "../Images/trophy-free-icon-font.png";

import "./styles.css";
  
const Footer = () => {
  return (
    <footer class="footer">
        <p class="footer__title">
            Statistics from Lichess with Love
        </p>
        <img class = "footer__logo" src={trophy} />

    </footer>
  );
};
export default Footer;