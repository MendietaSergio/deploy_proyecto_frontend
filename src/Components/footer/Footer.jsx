import instagramlogo from "../media/instagram.svg";
import twitterlogo from "../media/twitter.svg";
import basketball from "../media/basket.svg";
import youtubelogo from "../media/youtube.svg";

import { MenuItem, MenuItemLink } from "../header/profile/ProfileStyles";
import { Footer } from "./FooterStyles"

const StyledFooter = () => {
    return (
      <Footer>
        <div className="primary-footer">
        <ul>
            <li><MenuItemLink color="#FFF" to="/marketplace">Mercado</MenuItemLink></li>
            <li><MenuItemLink color="#FFF" to="/about-us">Sobre nosotros</MenuItemLink></li>
            <li><MenuItemLink color="#FFF" to="/faq">FAQ</MenuItemLink></li>
        </ul>
        <hr />
        </div>
        <div className="secondary-footer">
          <h2 className="copy-right"> © No Country</h2>
          <ul>
            <li>
              <a href="https://www.instagram.com/" target="_blank"><img src={instagramlogo} alt="instagram" /></a>
            </li>
            <li>
              <a href="https://twitter.com/" target="_blank"><img src={twitterlogo} alt="twitter" /></a>
            </li>
            <li>
              <a href="https://www.google.com.ar/maps/preview" target="_blank"><img src={basketball} alt="basketball" /></a>
            </li>
            <li>
              <a href="https://www.youtube.com/" target="_blank"><img src={youtubelogo} alt="youtube" /></a>
            </li>
          </ul>
        </div>
      </Footer>
    );
}

export default StyledFooter;