// import { Link } from "react-router-dom";
import classes from "./index.module.scss";
export default () => {
  return (
    <footer className={classes.footer} id="about-us">
      <div className={classes.right}>
        <h1>Contact us</h1>
        <div className={classes.container}>
          <h2>Dr. CHETAN JAMBHULKAR</h2>
          <p>Occupational Therapy</p>
        </div>
        <div className={classes.container}>
          <h2>Biography</h2>
          <p>
            Dr. CHETAN JAMBHULKAR is a renowned and experienced Occupational
            Therapy in Bilaspur. He brings with him an experience of 12+ years
            and has been associated with some of the best hospitals in Bilaspur.
            A dedicated compassionate doctor who handles many challenging cases
            with the latest cutting edge technology. He offers patient-friendly
            scientific advice to your problems while maintaining the highest
            professional and ethical values.
          </p>
        </div>
        <div className={classes.container}>
          <h2>Education</h2>
          <p>B.O.Th., DPT.</p>
        </div>
        <div className={classes.container}>
          <h2>Experience</h2>
          <p>12+ years</p>
        </div>
        <div className={classes.container}>
          <h2>Phone No</h2>
          <a href="tel://+91 8080754160">+91 8080754160</a>
        </div>
      </div>
      <div className={classes.left}>
        <h1>Address</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231.0688438379803!2d82.15068923198812!3d22.083940301217506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a280b16f390a2f3%3A0x736023f207c5f86!2sVRC%20OCCUPATIONAL%20THERAPY%20CLINIC!5e0!3m2!1sen!2sin!4v1672467349881!5m2!1sen!2sin"
          width="600"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </footer>
  );
};
