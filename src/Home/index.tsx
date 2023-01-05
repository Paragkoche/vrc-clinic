import { useEffect, useState } from "react";
import AnxietyStress from "../assets/Anxiety & Stress.jpg";
import ViolentBehavior from "../assets/Violent Behavior.jpg";
import AutismAssessment from "../assets/Autism Assessment.jpg";
import NeuroRehabilitation from "../assets/Neuro Rehabilitation.jpg";
import NeurodevelopmentalTherapy from "../assets/Neurodevelopmental Therapy.jpg";
import AnxietyDisordersTreatment from "../assets/Anxiety Disorders Treatment.jpg";
import AutismSpectrumDisordersTreatment from "../assets/Autism Spectrum Disorders Treatment.jpg";
import social1 from "../assets/social1.webp";
import social2 from "../assets/social2.jpg";
import social3 from "../assets/social3.jpg";
import social4 from "../assets/social4.jpg";
import social5 from "../assets/social5.jpg";
import social6 from "../assets/social6.jpg";
import Intor from "../assets/Group 3.svg";
import ASD from "../assets/ASD.jpg";
import ADHD from "../assets/ADHD.jpg";
import SLD from "../assets/Speech-Language Delays.jpg";
import DS from "../assets/Downsyndrome.jpg";
import CP from "../assets/cerebralPalsy.jpg";
import OMD from "../assets/oralMotor.jpg";
import OT from "../assets/ot.jpg";
import PT from "../assets/pyth.jpg";
import axios from "axios";
import classes from "./index.module.scss";
import NumberScroller from "react-number-scroller";
export default () => {
  const [slide, setSlide] = useState([0, 101, 201, 301, 401, 501, 601]);
  const [slide2, setSlide2] = useState([0, 101, 201, 301, 401]);
  const [counter, setCounter] = useState(1);
  const [ans, SetAns] = useState("");
  const [from, setFrom] = useState({
    fist_name: "",
    last_name: "",
    address: "",
    phone_number: "",
    dob: "",
    happened: "",
  });
  const [text, setText] = useState("Submit");
  return (
    <main className={classes.main}>
      <section className={classes.intro} id="home">
        <div className={classes.text}>
          <h1>
            Supporting your
            <br /> mental health.
          </h1>
          <p>
            occupational therapists support mental health! Some work exclusively
            in mental health settings, but we all greatly consider mental health
            as a service provider.
          </p>
          <div className={classes.counterCont}>
            <p>Trusted by Mom's and Professionals</p>
            <div>
              <div>
                <p>
                  <NumberScroller to={20000} timeout={0} delay={5} />+
                </p>

                <span>Mom's Enrolled</span>
              </div>
              <div className="v-line"></div>
              <div>
                <p>
                  <NumberScroller to={100} timeout={10} delay={5} />+
                </p>

                <span>Integrated Centers</span>
              </div>
              <div className="v-line"></div>
              <div>
                <p>
                  <NumberScroller to={750} timeout={1000} delay={5} />+
                </p>

                <span>Professional Experts</span>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.image_cont}>
          <img src={Intor} />
        </div>
      </section>
      <section className={classes.why}>
        <div className={classes.header}>
          <h1>Why choose us</h1>
          <p>
            <span> Dr. Chetan Jambhulkar</span> experience of 12+ years and has
            been
            <br />
            associated with some of the best hospitals in Bilaspur.
          </p>
        </div>
        <div className={classes.cards}>
          <div>
            <img src={ASD} />
            <strong>ASD</strong>
          </div>
          <div>
            <img src={ADHD} />
            <strong>ADHD</strong>
          </div>
          <div>
            <img src={SLD} />
            <strong>Speech-Language Delays</strong>
          </div>
          <div>
            <img src={DS} />
            <strong>Down's Syndrome</strong>
          </div>
          <div>
            <img src={CP} />
            <strong>Cerebral Palsy</strong>
          </div>
          <div>
            <img src={OMD} />
            <strong>Oral-Motor Delays</strong>
          </div>
          <div>
            <img src={OT} />
            <strong>Occupational therapy</strong>
          </div>
          <div>
            <img src={PT} />
            <strong>physiotherapy</strong>
          </div>
        </div>
      </section>
      <section className={classes.contactUs} id="contact-us">
        <h1>How to Contact us</h1>
        <div>
          <div className={classes.contact_us_text}>
            <h1>Contact details</h1>
            <div>
              <div>
                <div>
                  <strong>Email</strong>
                </div>
                <div>
                  <p>Email</p>
                </div>
                <div>
                  <strong>Phone No</strong>
                </div>
                <div>
                  <p>+91 8080754160</p>
                </div>
                <div>
                  <strong>Address</strong>
                </div>
                <div>
                  <address>
                    No-68, Madhyanagri Road, IDGAH Chowk, Bilaspur-Chhattisgarh
                    - 495001, Infront Of Nice Tec Computer College
                  </address>
                </div>
                <div>
                  <strong>Timeing</strong>
                </div>
                <div style={{ marginBottom: "25px" }}>
                  <p>Mon - Sat</p>
                  <p>9:00am - 9:00pm</p>
                </div>
                <div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231.0688438379803!2d82.15068923198812!3d22.083940301217506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a280b16f390a2f3%3A0x736023f207c5f86!2sVRC%20OCCUPATIONAL%20THERAPY%20CLINIC!5e0!3m2!1sen!2sin!4v1672467349881!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="form-cont">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setText("Sending ..");
                axios
                  .post("https://stormy-gray-tick.cyclic.app/", from)
                  .then(() => {
                    alert(
                      "Your appointment has been sent, we will contact you soon!"
                    );
                    setFrom({
                      address: "",
                      dob: "",
                      fist_name: "",
                      happened: "",
                      last_name: "",
                      phone_number: "",
                    });
                    setText("Submit");
                  });
              }}
              className="form"
            >
              <div className="input-2">
                <div className="input-cont">
                  <input
                    type="text"
                    value={from.fist_name}
                    onChange={(e) =>
                      setFrom((s) => ({ ...s, fist_name: e.target.value }))
                    }
                  />
                  <label>First Name</label>
                </div>
                <div className="input-cont">
                  <input
                    type="text"
                    value={from.last_name}
                    onChange={(e) =>
                      setFrom((s) => ({ ...s, last_name: e.target.value }))
                    }
                  />
                  <label>Last Name</label>
                </div>
              </div>
              <div className="input-cont">
                <input
                  type="text"
                  value={from.address}
                  onChange={(e) =>
                    setFrom((s) => ({ ...s, address: e.target.value }))
                  }
                />
                <label>Address</label>
              </div>
              <div className="input-2">
                <div className="input-cont">
                  <input
                    type="text"
                    value={from.phone_number}
                    onChange={(e) =>
                      setFrom((s) => ({ ...s, phone_number: e.target.value }))
                    }
                  />
                  <label>Phone Number</label>
                </div>
                <div className="input-cont">
                  <input
                    type="date"
                    value={from.dob}
                    onChange={(e) =>
                      setFrom((s) => ({ ...s, dob: e.target.value }))
                    }
                  />
                  <label>Date of birth</label>
                </div>
              </div>

              <div className="input-cont textarea">
                <textarea
                  value={from.happened}
                  onChange={(e) =>
                    setFrom((s) => ({ ...s, happened: e.target.value }))
                  }
                ></textarea>
                <label>What happened</label>
              </div>
              <button className="btn">{text}</button>
            </form>
          </div>
        </div>
      </section>
      <section className={classes.service} id="service">
        <h1>Service</h1>
        <div>
          <div className={classes.name}>
            <div onClick={() => setSlide([0, 101, 201, 301, 401, 501, 601])}>
              <p>Anxiety & Stress</p>
            </div>
            <div onClick={() => setSlide([-101, 0, 101, 201, 301, 401, 501])}>
              <p>Violent Behavior</p>
            </div>
            <div onClick={() => setSlide([-201, -101, 0, 101, 201, 301, 401])}>
              <p>Autism Assessment</p>
            </div>
            <div onClick={() => setSlide([-301, -201, -101, 0, 101, 201, 301])}>
              <p>Neuro Rehabilitation</p>
            </div>
            <div
              onClick={() => setSlide([-401, -301, -201, -101, 0, 101, 201])}
            >
              <p>Neurodevelopmental Therapy</p>
            </div>
            <div
              onClick={() => setSlide([-501, -401, -301, -201, -101, 0, 101])}
            >
              <p>Anxiety Disorders Treatment</p>
            </div>
            <div
              onClick={() => setSlide([-601, -501, -401, -301, -201, -101, 0])}
            >
              <p>Autism Spectrum Disorders Treatment</p>
            </div>
          </div>
          <div className={classes.sliders}>
            {[
              {
                heading: "Anxiety & Stress",
                par: `The various tools and strategies in use during occupational
            therapy will help your child learn to handle anxiety by teaching
            coping mechanisms. This process may use both intangible and
            tangible techniques. An intangible technique may include lessons
            in belly breathing, guided imagery, or progressive muscle
            relaxation.`,
                image: AnxietyStress,
              },
              {
                heading: "Violent Behavior",
                par: `Violent behavior is any behavior by an individual that threatens or actually harms or injures the individual or others or destroys property. Violent behavior often begins with verbal threats but over time escalates to involve physical harm.`,
                image: ViolentBehavior,
              },
              {
                heading: "Autism Assessment",
                par: `The various tools and strategies in use during occupational
            therapy will help your child learn to handle anxiety by teaching
            coping mechanisms. This process may use both intangible and
            tangible techniques. An intangible technique may include lessons
            in belly breathing, guided imagery, or progressive muscle
            relaxation.`,
                image: AutismAssessment,
              },
              {
                heading: "Neuro Rehabilitation",
                par: `The various tools and strategies in use during occupational
            therapy will help your child learn to handle anxiety by teaching
            coping mechanisms. This process may use both intangible and
            tangible techniques. An intangible technique may include lessons
            in belly breathing, guided imagery, or progressive muscle
            relaxation.`,
                image: NeuroRehabilitation,
              },
              {
                heading: "Neurodevelopmental Therapy",
                par: `Neurodevelopmental therapy, a problem solving approach is commonly used in treating movement dysfunctions in children with CNS disorders. NDT focuses on enhancing the sensation of movement through the internal and external sensory feedback mechanisms through a motivating functional play therapy which makes the child an active participant in therapy.`,
                image: NeurodevelopmentalTherapy,
              },
              {
                heading: "Anxiety Disorders Treatment",
                par: `The various tools and strategies in use during occupational
            therapy will help your child learn to handle anxiety by teaching
            coping mechanisms. This process may use both intangible and
            tangible techniques. An intangible technique may include lessons
            in belly breathing, guided imagery, or progressive muscle
            relaxation.`,
                image: AnxietyDisordersTreatment,
              },
              {
                heading: "Autism Spectrum Disorders Treatment",
                par: `Pervasive developmental disorders are now commonly referred to as autism spectrum disorders (ASDs). ASDs present with a range of severity and impairments, and often are a cause of severe disability, representing a major public health concern. The diagnostic criteria require delays or abnormal functioning in social interaction, language, and/or imaginative play within the first 3 years of life, resulting in a deviation from the developmental pattern expected for the age. `,
                image: AutismSpectrumDisordersTreatment,
              },
            ].map((v, i) => (
              <div
                className={`${classes.slider}`}
                style={{ left: slide[i] + "%" }}
              >
                <div>
                  <img src={v.image} />
                </div>
                <div>
                  <h1>{v.heading}</h1>
                  <p>{v.par}</p>
                  <div>
                    <svg
                      width="64"
                      height="64"
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="10"
                        y="10"
                        width="44"
                        height="44"
                        rx="22"
                        fill="#00AFB9"
                      />
                      <path
                        d="M32.025 36C31.625 36 31.2877 35.8583 31.013 35.575C30.7377 35.2917 30.6167 34.9583 30.65 34.575C30.7 33.875 30.8667 33.2667 31.15 32.75C31.4333 32.2333 31.8833 31.7 32.5 31.15C33.1833 30.55 33.704 30.029 34.062 29.587C34.4207 29.1457 34.6 28.6417 34.6 28.075C34.6 27.3917 34.371 26.825 33.913 26.375C33.4543 25.925 32.8167 25.7 32 25.7C31.4667 25.7 31.0127 25.8123 30.638 26.037C30.2627 26.2623 29.9583 26.5417 29.725 26.875C29.4917 27.2083 29.2043 27.4333 28.863 27.55C28.521 27.6667 28.1917 27.6583 27.875 27.525C27.4917 27.3583 27.2293 27.0833 27.088 26.7C26.946 26.3167 26.975 25.9583 27.175 25.625C27.6583 24.875 28.3083 24.25 29.125 23.75C29.9417 23.25 30.9 23 32 23C33.75 23 35.096 23.4877 36.038 24.463C36.9793 25.4377 37.45 26.6083 37.45 27.975C37.45 28.8083 37.271 29.521 36.913 30.113C36.5543 30.7043 35.9917 31.375 35.225 32.125C34.6583 32.6583 34.2583 33.0917 34.025 33.425C33.7917 33.7583 33.6333 34.1417 33.55 34.575C33.4833 34.9917 33.3083 35.3333 33.025 35.6C32.7417 35.8667 32.4083 36 32.025 36ZM32 42C31.45 42 30.9793 41.8043 30.588 41.413C30.196 41.021 30 40.55 30 40C30 39.45 30.196 38.979 30.588 38.587C30.9793 38.1957 31.45 38 32 38C32.55 38 33.021 38.1957 33.413 38.587C33.8043 38.979 34 39.45 34 40C34 40.55 33.8043 41.021 33.413 41.413C33.021 41.8043 32.55 42 32 42Z"
                        fill="white"
                      />
                      <rect
                        x="5"
                        y="5"
                        width="54"
                        height="54"
                        rx="27"
                        stroke="#2BA4C4"
                        stroke-opacity="0.61"
                        stroke-width="10"
                      />
                    </svg>
                    <span> Contacts us</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={classes.client}>
        <div className={classes.text}>
          <h1>Your child is in safe hands</h1>
          <p>
            First-class specialists work in out Occupational therapy center
            <br /> in the seer of child psychology and pedagogy
          </p>
        </div>
        <div className={classes.sliders}>
          <div className={classes.slide}>
            <div className={classes.slide_item}>
              {[{}, {}, {}, {}, {}].map((v, i) => (
                <div style={{ left: slide2[i] + "%" }}>
                  <div>
                    <img src="https://drchetanjambhulkar.getmy.clinic/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa-%2FAD5-WClAbiu3nLcts130yOnc0ak3thtUBrqZKU0yU_0D%3Ds120-c-c0x00000000-cc-rp-mo-br100&w=64&q=75" />
                  </div>
                  <h1>Samriddhi Khatri</h1>
                  <h2>Client</h2>
                  <p>
                    My sister gourangi Khatri duther of kiran khatri was so weak
                    but now she has more power than me
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className={classes.controller}>
            <button
              onClick={() => {
                if (slide2[0] !== 0) {
                  setSlide2((s) => [
                    s[0] + 100,
                    s[1] + 100,
                    s[2] + 100,
                    s[3] + 100,
                    s[4] + 100,
                  ]);
                  setCounter((s) => --s);
                }
              }}
            >
              <svg
                width="162"
                height="24"
                viewBox="0 0 162 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.939346 10.9393C0.353546 11.5251 0.353546 12.4749 0.939346 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939346 10.9393ZM162 10.5L2 10.5V13.5L162 13.5V10.5Z"
                  fill="#00AFB9"
                />
              </svg>
            </button>
            <p>
              {counter}/<span>5</span>
            </p>
            <button
              onClick={() => {
                if (slide2[4] != 1) {
                  setSlide2((s) => [
                    s[0] - 100,
                    s[1] - 100,
                    s[2] - 100,
                    s[3] - 100,
                    s[4] - 100,
                  ]);
                  setCounter((s) => ++s);
                }
              }}
            >
              <svg
                width="162"
                height="24"
                viewBox="0 0 162 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M161.061 13.0607C161.646 12.4749 161.646 11.5251 161.061 10.9393L151.515 1.3934C150.929 0.807611 149.979 0.807611 149.393 1.3934C148.808 1.97919 148.808 2.92893 149.393 3.51472L157.879 12L149.393 20.4853C148.808 21.0711 148.808 22.0208 149.393 22.6066C149.979 23.1924 150.929 23.1924 151.515 22.6066L161.061 13.0607ZM0 13.5H160V10.5H0V13.5Z"
                  fill="#00AFB9"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
      <section className={classes.follow}>
        <div className={classes.right}>
          <h1>Follow on Instagram and Facebook</h1>
          <p>
            Every day we post publications, gaye about the educational games
            with your child
          </p>
          <div>
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="10"
                y="10"
                width="44"
                height="44"
                rx="22"
                fill="#00AFB9"
              />
              <path
                d="M42 32C42 26.48 37.52 22 32 22C26.48 22 22 26.48 22 32C22 36.84 25.44 40.87 30 41.8V35H28V32H30V29.5C30 27.57 31.57 26 33.5 26H36V29H34C33.45 29 33 29.45 33 30V32H36V35H33V41.95C38.05 41.45 42 37.19 42 32Z"
                fill="white"
              />
              <rect
                x="5"
                y="5"
                width="54"
                height="54"
                rx="27"
                stroke="#2BA4C4"
                stroke-opacity="0.61"
                stroke-width="10"
              />
            </svg>
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="10"
                y="10"
                width="44"
                height="44"
                rx="22"
                fill="#00AFB9"
              />
              <path
                d="M27.8 22H36.2C39.4 22 42 24.6 42 27.8V36.2C42 37.7383 41.3889 39.2135 40.3012 40.3012C39.2135 41.3889 37.7383 42 36.2 42H27.8C24.6 42 22 39.4 22 36.2V27.8C22 26.2617 22.6111 24.7865 23.6988 23.6988C24.7865 22.6111 26.2617 22 27.8 22M27.6 24C26.6452 24 25.7295 24.3793 25.0544 25.0544C24.3793 25.7295 24 26.6452 24 27.6V36.4C24 38.39 25.61 40 27.6 40H36.4C37.3548 40 38.2705 39.6207 38.9456 38.9456C39.6207 38.2705 40 37.3548 40 36.4V27.6C40 25.61 38.39 24 36.4 24H27.6ZM37.25 25.5C37.5815 25.5 37.8995 25.6317 38.1339 25.8661C38.3683 26.1005 38.5 26.4185 38.5 26.75C38.5 27.0815 38.3683 27.3995 38.1339 27.6339C37.8995 27.8683 37.5815 28 37.25 28C36.9185 28 36.6005 27.8683 36.3661 27.6339C36.1317 27.3995 36 27.0815 36 26.75C36 26.4185 36.1317 26.1005 36.3661 25.8661C36.6005 25.6317 36.9185 25.5 37.25 25.5ZM32 27C33.3261 27 34.5979 27.5268 35.5355 28.4645C36.4732 29.4021 37 30.6739 37 32C37 33.3261 36.4732 34.5979 35.5355 35.5355C34.5979 36.4732 33.3261 37 32 37C30.6739 37 29.4021 36.4732 28.4645 35.5355C27.5268 34.5979 27 33.3261 27 32C27 30.6739 27.5268 29.4021 28.4645 28.4645C29.4021 27.5268 30.6739 27 32 27M32 29C31.2044 29 30.4413 29.3161 29.8787 29.8787C29.3161 30.4413 29 31.2044 29 32C29 32.7956 29.3161 33.5587 29.8787 34.1213C30.4413 34.6839 31.2044 35 32 35C32.7956 35 33.5587 34.6839 34.1213 34.1213C34.6839 33.5587 35 32.7956 35 32C35 31.2044 34.6839 30.4413 34.1213 29.8787C33.5587 29.3161 32.7956 29 32 29Z"
                fill="white"
              />
              <rect
                x="5"
                y="5"
                width="54"
                height="54"
                rx="27"
                stroke="#2BA4C4"
                stroke-opacity="0.61"
                stroke-width="10"
              />
            </svg>
          </div>
        </div>
        <div className={classes.left}>
          <img src={social1} />
          <img src={social2} />
          <img src={social3} />
          <img src={social4} />
          <img src={social5} />
          <img src={social6} />
        </div>
      </section>
      <section className={classes.fqs} id="fqa">
        <header>
          <h1>Frequently Asked Questions</h1>
        </header>
        <div className={classes.h}>
          <div className={classes.qs}>
            <div
              onClick={() => {
                SetAns(
                  "Dr. CHETAN JAMBHULKAR is a specialist in Occupational Therapy. He has more than 12 years of experience."
                );
              }}
            >
              <p>Why should I consult Dr. Chetan Jambhulkar</p>
              <svg
                width="18"
                height="27"
                viewBox="0 0 18 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.86866 1.01451L17.0691 12.5396C17.2258 12.6768 17.3365 12.8254 17.4013 12.9855C17.4671 13.1456 17.5 13.3171 17.5 13.5C17.5 13.6829 17.4671 13.8544 17.4013 14.0145C17.3365 14.1746 17.2258 14.3232 17.0691 14.4604L3.86866 26.0198C3.50307 26.3399 3.04608 26.5 2.49769 26.5C1.94931 26.5 1.47926 26.3285 1.08756 25.9855C0.695852 25.6425 0.5 25.2423 0.5 24.785C0.5 24.3276 0.695852 23.9274 1.08756 23.5844L12.6037 13.5L1.08756 3.41557C0.721965 3.09543 0.539169 2.7012 0.539169 2.23288C0.539169 1.76364 0.735023 1.35752 1.12673 1.01451C1.51843 0.671505 1.97542 0.5 2.49769 0.5C3.01997 0.5 3.47696 0.671505 3.86866 1.01451Z"
                  fill="#2BA4C4"
                />
              </svg>
            </div>
            <div
              onClick={() =>
                SetAns(
                  "A specialist doctor is trained to treat complex health conditions in their particular field. If you are diagnosed with a condition, it is best to consult a doctor who specializes in dealing with that particular condition."
                )
              }
            >
              <p>Why is it best to consult a specialist?</p>
              <svg
                width="18"
                height="27"
                viewBox="0 0 18 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.86866 1.01451L17.0691 12.5396C17.2258 12.6768 17.3365 12.8254 17.4013 12.9855C17.4671 13.1456 17.5 13.3171 17.5 13.5C17.5 13.6829 17.4671 13.8544 17.4013 14.0145C17.3365 14.1746 17.2258 14.3232 17.0691 14.4604L3.86866 26.0198C3.50307 26.3399 3.04608 26.5 2.49769 26.5C1.94931 26.5 1.47926 26.3285 1.08756 25.9855C0.695852 25.6425 0.5 25.2423 0.5 24.785C0.5 24.3276 0.695852 23.9274 1.08756 23.5844L12.6037 13.5L1.08756 3.41557C0.721965 3.09543 0.539169 2.7012 0.539169 2.23288C0.539169 1.76364 0.735023 1.35752 1.12673 1.01451C1.51843 0.671505 1.97542 0.5 2.49769 0.5C3.01997 0.5 3.47696 0.671505 3.86866 1.01451Z"
                  fill="#2BA4C4"
                />
              </svg>
            </div>
            <div>
              <p>How can I book an appointment with Dr. CHETAN JAMBHULKAR?</p>
              <svg
                width="18"
                height="27"
                viewBox="0 0 18 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.86866 1.01451L17.0691 12.5396C17.2258 12.6768 17.3365 12.8254 17.4013 12.9855C17.4671 13.1456 17.5 13.3171 17.5 13.5C17.5 13.6829 17.4671 13.8544 17.4013 14.0145C17.3365 14.1746 17.2258 14.3232 17.0691 14.4604L3.86866 26.0198C3.50307 26.3399 3.04608 26.5 2.49769 26.5C1.94931 26.5 1.47926 26.3285 1.08756 25.9855C0.695852 25.6425 0.5 25.2423 0.5 24.785C0.5 24.3276 0.695852 23.9274 1.08756 23.5844L12.6037 13.5L1.08756 3.41557C0.721965 3.09543 0.539169 2.7012 0.539169 2.23288C0.539169 1.76364 0.735023 1.35752 1.12673 1.01451C1.51843 0.671505 1.97542 0.5 2.49769 0.5C3.01997 0.5 3.47696 0.671505 3.86866 1.01451Z"
                  fill="#2BA4C4"
                />
              </svg>
            </div>
            <div
              onClick={() =>
                SetAns(
                  "Dr. CHETAN JAMBHULKAR provides different modes of consultation for you to choose from as per your convenience. You can choose to book a clinic appointment in Bilaspur or you can also consult the doctor online via video or telephonic cal"
                )
              }
            >
              <p>What are the different modes of consultation?</p>
              <svg
                width="18"
                height="27"
                viewBox="0 0 18 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.86866 1.01451L17.0691 12.5396C17.2258 12.6768 17.3365 12.8254 17.4013 12.9855C17.4671 13.1456 17.5 13.3171 17.5 13.5C17.5 13.6829 17.4671 13.8544 17.4013 14.0145C17.3365 14.1746 17.2258 14.3232 17.0691 14.4604L3.86866 26.0198C3.50307 26.3399 3.04608 26.5 2.49769 26.5C1.94931 26.5 1.47926 26.3285 1.08756 25.9855C0.695852 25.6425 0.5 25.2423 0.5 24.785C0.5 24.3276 0.695852 23.9274 1.08756 23.5844L12.6037 13.5L1.08756 3.41557C0.721965 3.09543 0.539169 2.7012 0.539169 2.23288C0.539169 1.76364 0.735023 1.35752 1.12673 1.01451C1.51843 0.671505 1.97542 0.5 2.49769 0.5C3.01997 0.5 3.47696 0.671505 3.86866 1.01451Z"
                  fill="#2BA4C4"
                />
              </svg>
            </div>
            <div
              onClick={() =>
                SetAns(
                  "Yes, our staff and clinic follows all safety protocols and we take appropriate measures to ensure a safe environment for our patients, including social distancing and hand sanitizing stations."
                )
              }
            >
              <p>
                Are safety guidelines followed in Dr. CHETAN JAMBHULKAR's
                <br />
                consultation chamber?
              </p>
              <svg
                width="18"
                height="27"
                viewBox="0 0 18 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.86866 1.01451L17.0691 12.5396C17.2258 12.6768 17.3365 12.8254 17.4013 12.9855C17.4671 13.1456 17.5 13.3171 17.5 13.5C17.5 13.6829 17.4671 13.8544 17.4013 14.0145C17.3365 14.1746 17.2258 14.3232 17.0691 14.4604L3.86866 26.0198C3.50307 26.3399 3.04608 26.5 2.49769 26.5C1.94931 26.5 1.47926 26.3285 1.08756 25.9855C0.695852 25.6425 0.5 25.2423 0.5 24.785C0.5 24.3276 0.695852 23.9274 1.08756 23.5844L12.6037 13.5L1.08756 3.41557C0.721965 3.09543 0.539169 2.7012 0.539169 2.23288C0.539169 1.76364 0.735023 1.35752 1.12673 1.01451C1.51843 0.671505 1.97542 0.5 2.49769 0.5C3.01997 0.5 3.47696 0.671505 3.86866 1.01451Z"
                  fill="#2BA4C4"
                />
              </svg>
            </div>
            <div
              onClick={() =>
                SetAns(
                  "If you have any more queries that aren't listed, you can email us or call us."
                )
              }
            >
              <p>What if my query is not listed here?</p>
              <svg
                width="18"
                height="27"
                viewBox="0 0 18 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.86866 1.01451L17.0691 12.5396C17.2258 12.6768 17.3365 12.8254 17.4013 12.9855C17.4671 13.1456 17.5 13.3171 17.5 13.5C17.5 13.6829 17.4671 13.8544 17.4013 14.0145C17.3365 14.1746 17.2258 14.3232 17.0691 14.4604L3.86866 26.0198C3.50307 26.3399 3.04608 26.5 2.49769 26.5C1.94931 26.5 1.47926 26.3285 1.08756 25.9855C0.695852 25.6425 0.5 25.2423 0.5 24.785C0.5 24.3276 0.695852 23.9274 1.08756 23.5844L12.6037 13.5L1.08756 3.41557C0.721965 3.09543 0.539169 2.7012 0.539169 2.23288C0.539169 1.76364 0.735023 1.35752 1.12673 1.01451C1.51843 0.671505 1.97542 0.5 2.49769 0.5C3.01997 0.5 3.47696 0.671505 3.86866 1.01451Z"
                  fill="#2BA4C4"
                />
              </svg>
            </div>
          </div>
          <div className={classes.ans}>
            <p>{ans}</p>
          </div>
        </div>
      </section>
    </main>
  );
};
