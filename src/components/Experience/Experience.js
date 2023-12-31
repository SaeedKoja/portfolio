import React, { useEffect } from "react";
import "./Experience.css";
import { HiBadgeCheck } from "react-icons/hi";
import { Element } from "react-scroll";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Experience = () => {
  const controls = useAnimation();
  const control = useAnimation();
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
      });
      control.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
      });
    } else {
      controls.start({
        opacity: 0,
        y: -40,
      });
      control.start({
        opacity: 0,
        y: 40,
      });
    }
  }, [controls, control, inView]);
  return (
    <Element name="Experience">
      <section
        className="Experience"
        style={{ marginTop: "2rem", paddingTop: "0rem" }}
      >
        {/* <h5>What Skills I Have</h5> */}
        {/* <h2>My Experience</h2> */}
        <h2>My Skills</h2>
        <div className="container experience_container">
          <motion.div
            ref={ref}
            animate={controls}
            // initial={{ opacity: 0, y: 0 }}
            // style={{ opacity: 0, y: 0 }}
            className="experience_frontend"
          >
            <h3>FrontEnd Development</h3>
            <div className="experience_content">
              <div className="experience_content-box">
                <article className="experience_details">
                  <HiBadgeCheck className="experience_details-icon" />
                  <div>
                    <h4>H T M L</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
                <article className="experience_details">
                  <HiBadgeCheck className="experience_details-icon" />
                  <div>
                    <h4>React Js</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>
                <article className="experience_details">
                  <HiBadgeCheck className="experience_details-icon" />
                  <div>
                    <h4>Java Script</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>
              </div>
              <div className="experience_content-box-react">
                <article className="experience_details">
                  <HiBadgeCheck className="experience_details-icon" />
                  <div>
                    <h4>Css</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
                <article className="experience_details">
                  <HiBadgeCheck className="experience_details-icon" />
                  <div>
                    <h4>Redux toolkit</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>
                <article className="experience_details">
                  <HiBadgeCheck className="experience_details-icon" />
                  <div>
                    <h4>Next.js</h4>
                    <small className="text-light">Beginner</small>
                  </div>
                </article>
                <article className="experience_details">
                  {/* <HiBadgeCheck className="experience_details-icon" />
                  <div>
                    <h4>Tailwind Css</h4>
                    <small className="text-light">Intermediate</small>
                  </div> */}
                </article>
              </div>
              <div className="experience_content-box-react">
                <article className="experience_details">
                  {/* <HiBadgeCheck className="experience_details-icon" />
                  <div>
                    <h4>BootStrap</h4>
                    <small className="text-light">Intermediate</small>
                  </div> */}
                  <HiBadgeCheck className="experience_details-icon" />
                  <div>
                    <h4>Tailwind Css</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>
                <article className="experience_details">
                  <HiBadgeCheck className="experience_details-icon" />
                  <div>
                    <h4>Socket.IO</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>
                <article className="experience_details">
                  <HiBadgeCheck className="experience_details-icon" />
                  <div>
                    <h4>TypeScript</h4>
                    <small className="text-light">Beginner</small>
                  </div>
                </article>
              </div>
            </div>
            <div className="experience_content-mobile">
              <div className="experience_content-box">
                <article className="experience_details">
                  <HiBadgeCheck className="experience_details-icon" />
                  <div>
                    <h4>H T M L</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
                <article className="experience_details">
                  <HiBadgeCheck className="experience_details-icon" />
                  <div>
                    <h4>Css</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
                <article className="experience_details">
                  <HiBadgeCheck className="experience_details-icon" />
                  <div>
                    <h4>Java Script</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>
                <article className="experience_details">
                  <HiBadgeCheck className="experience_details-icon" />
                  <div>
                    <h4>React Js</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>
                <article className="experience_details">
                  <HiBadgeCheck className="experience_details-icon" />
                  <div>
                    <h4>Redux</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>
                <article className="experience_details">
                  <HiBadgeCheck className="experience_details-icon" />
                  <div>
                    <h4>Tailwind Css</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>
                <article className="experience_details">
                  <HiBadgeCheck className="experience_details-icon" />
                  <div>
                    <h4>BootStrap</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>
              </div>
            </div>
            {/* <h3 style={{ marginTop: "20px", marginBottom: "15px" }}>Soft Skills</h3> */}
          </motion.div>
          <motion.div
            ref={ref}
            animate={control}
            // initial={{ opacity: 0, y: 0 }}
            // style={{ opacity: 0, y: 0 }}
            className="experience_backend"
          >
            <h3>Soft Skills</h3>
            <div className="experience_content soft-skills">
              <div className="experience_content-box">
                <article className="experience_details">
                  <HiBadgeCheck className="experience_details-icon" />
                  <div>
                    <h4>Teamwork</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
                <article className="experience_details">
                  <HiBadgeCheck className="experience_details-icon" />
                  <div>
                    <h4>Attention to details</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
              </div>
              <div className="experience_content-box">
                <article className="experience_details">
                  <HiBadgeCheck className="experience_details-icon" />
                  <div>
                    <h4>Adaptability</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
                <article className="experience_details">
                  <HiBadgeCheck className="experience_details-icon" />
                  <div>
                    <h4>Creativity</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
              </div>
              <div className="experience_content-box">
                <article className="experience_details">
                  <HiBadgeCheck className="experience_details-icon" />
                  <div>
                    <h4>Time management</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
                <article className="experience_details">
                  <HiBadgeCheck className="experience_details-icon" />
                  <div>
                    <h4>Work ethic</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Element>
  );
};

export default Experience;
