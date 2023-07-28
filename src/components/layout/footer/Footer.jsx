import React from "react";
import { Outlet } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

import "./footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className=" footer-row">
            <div className="footer-links">
              <h4>Compañia</h4>
              <ul>
                <li>Nosotros</li>
                <li>Nuestros servicios</li>
                <li>Politica de privacidad</li>
                <li>Afiliate</li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Ayuda</h4>
              <ul>
                <li>Preguntas</li>
                <li>Compras</li>
                <li>Envios</li>
                <li>Pagos</li>
                <li>Envios de orden</li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Siguenos</h4>
              <div className="social-link">
                <a href="">
                  <FaFacebook />
                </a>
                <a href="">
                  <FaInstagram />
                </a>
                <a href="">
                  <FaTwitter />
                </a>
                <a href="">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
