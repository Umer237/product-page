import React, { useEffect, useState } from "react";
import { BsBasket } from "react-icons/bs";
import "./Header.css";
const Header = () => {
  const [navLinks, setNavLinks] = useState([]);

  useEffect(() => {
    const links = [
      { name: " OUR STORY ", path: "/ourstory" },
      { name: " RECIPES ", path: "/recipes" },
      { name: " CONTACT ", path: "/contact" },
      { name: " STORE ", path: "/store" },
    ];
    setNavLinks(links);
  }, []);
  return (
    <>
      <div className="Navbar">
        <nav>
          <ul>
            <div className="Logo">
              <a href="/">
                <BsBasket />
              </a>
            </div>
            <li>
              {navLinks.map((d,i) => (
                <li key={i}>
                  <a href={d.path}>{d.name}</a>
                </li>
              ))}
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
