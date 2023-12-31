import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import "./Skills.css";
import { BiCaretRight, BiCaretLeft } from "react-icons/bi";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaAward } from "react-icons/fa";

const Skills = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: "1",
      title: "Front End React Developer",
      content:
        "Worked on several projects using React, including [ERP],[QrReader for Worktime] , [Applying for job opportunities] and [real-time chat app with Socket.io].",
    },
    {
      id: "2",
      title: "Front End React Developer",
      content:
        "Collaborated with designers and other developers to create responsive and mobile-friendly web applications.",
    },
    {
      id: "3",
      title: "Front End React Developer",
      content: "Assisted with troubleshooting and bug fixing as needed.",
    },
    {
      id: "4",
      title: "Front End React Developer",
      content:
        "Worked closely with back-end developers to ensure seamless integration of front-end and back-end functionality.",
    },
  ];
  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <Element name="skills">
      <section className="skills">
        <h2>Experience</h2>
        <div className="container skills_container">
          <div className="skills_cards">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`skills_card ${index === currentSlide ? "" : "out"}`}
              >
                <div className="hreader-skills_card">
                  <FaAward className="about_icon" />
                  <label>
                    4 - 2022 Al-Yousser for Engineering Upgrading
                  </label>
                </div>
                <p>{slides[currentSlide].title}</p>
                <small>{slides[currentSlide].content}</small>
              </div>
            ))}
          </div>
        </div>
        <div className="btn-next">
          <button onClick={nextSlide}>
            <BiCaretLeft />
          </button>
          <label>Move</label>
          <button onClick={prevSlide}>
            <BiCaretRight />
          </button>
        </div>
      </section>
    </Element>
  );
};

export default Skills;
