import { React, useState } from "react";
import "./Nav.css";
import { AiFillHome, AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BsMessenger } from "react-icons/bs";
import { Link } from "react-scroll";
import { FaAward } from "react-icons/fa";
// import { BsImages } from "react-icons/bs";
// import { NavLink } from "react-bootstrap";

const Nav = () => {
  const [activeviwo, setactiveviwo] = useState("");
  return (
    <nav>
      <Link
        // href="#"
        // onClick={() => setactiveviwo("Home")}
        className={activeviwo === "Home" ? "active" : ""}
        title="الرئيسية"
        to="Home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={400}
      >
        <AiFillHome />
      </Link>
      <Link
        // href="#About"
        // onClick={() => setactiveviwo("About")}
        className={activeviwo === "About" ? "active" : ""}
        title="معلومات عني"
        to="About"
        spy={true}
        smooth={true}
        offset={-70}
        duration={400}
      >
        <AiOutlineUser />
      </Link>
      <Link
        // href="#About"
        // onClick={() => setactiveviwo("About")}
        className={activeviwo === "skills" ? "active" : ""}
        title="الخبرات"
        to="skills"
        spy={true}
        smooth={true}
        offset={-70}
        duration={400}
      >
        <FaAward />
      </Link>
      <Link
        // href="#Experience"
        // onClick={() => setactiveviwo("Experience")}
        className={activeviwo === "Experience" ? "active" : ""}
        title="مهاراتي"
        to="Experience"
        spy={true}
        smooth={true}
        offset={-70}
        duration={400}
      >
        <BiBook />
      </Link>
      {/* <Link
        // href="#Services"
        // onClick={() => setactiveviwo("Services")}
        className={activeviwo === "Services" ? "active" : ""}
        title="الخدمات"
        to="Services"
        spy={true}
        smooth={true}
        offset={-70}
        duration={400}
      > */}
        {/* <RiServiceLine /> */}
      {/* </Link> */}
      {/* <a href="#Protofilo" onClick={() => setactiveviwo("#Protofilo")} className={activeviwo === "#Protofilo"} title="معرض الاعمال">
        <BsImages />
      </a> */}
      <Link
        // href="#Contact"
        // onClick={() => setactiveviwo("Contact")}
        className={activeviwo === "Contact" ? "active" : ""}
        title="تواصل معنا"
        to="Contact"
        spy={true}
        smooth={true}
        offset={-70}
        duration={400}
      >
        <BsMessenger />
      </Link>
    </nav>
  );
};

export default Nav;
