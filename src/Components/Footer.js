import React from "react";
import "./styles.css";
import trophy from "./trophy-free-icon-font.png";
  
const Footer = () => {
  return (
    <footer class="footer">
        <div class="footer__title">
            Statistics from Lichess with Love
        </div>
        <img class = "footer__logo" src={trophy} />

    </footer>
  );
};
export default Footer;