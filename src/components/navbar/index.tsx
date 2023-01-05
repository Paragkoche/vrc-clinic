import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./index.module.scss";

export default () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className={classes.head}>
      <nav className={classes.navBar}>
        <div className={classes.logo}>
          <img src="/logo.svg" />
        </div>
        <ul className={classes.menu}>
          <li>
            <Link to="/#home">Home</Link>
          </li>
          <li>
            <Link to="#about-us">About us</Link>
          </li>
          <li>
            <Link to="/#service">Services</Link>
          </li>
          <li>
            <Link to="/#fqa">FQA</Link>
          </li>
          <li>
            <Link to="/#contact-us">Contact us</Link>
          </li>
        </ul>
        <div
          className={classes.phone_button}
          onClick={() => setIsOpen((s) => !s)}
        >
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 12L10 12M20 6L4 6M20 18L16 18"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
      </nav>
      <ul
        className={classes.phone_menu}
        style={{
          opacity: isOpen ? "1" : "0",
        }}
      >
        <li onClick={() => console.log("pp")}>Home</li>
        <li>About us</li>
        <li>Services</li>
        <li>FQA</li>
        <li>Contact us</li>
      </ul>
    </header>
  );
};
