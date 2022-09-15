import React, { useRef, useState } from "react";
import "../styles/about.css";
import linkedin from "../styles/images/linkedin.png";
import github from "../styles/images/github.png";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";

function About() {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <div
      className="divAbout"

      /*   {
          setIsNavExpanded ? "divAbout hidden " : "shown divAbout"
        } */
    >
      <div className="aboutBrief">
        <p className="titleBrief">About this app</p>
        <p className="textBrief">
          This website was developed as part of Project 3 of the Code Academy
          Berlin program. The project consisted in building a free-of-choice Web
          Progressive App using Firebase as back-end. <br />
          <br /> This Vocabulary App works with the PONS’ online Dictionary API
          and its purpose is to help me increase my German vocabulary. <br />
          <br /> In the <span className="colorText">Words </span> tab, any word
          can be searched or you can get a random one. Then, the primary data is
          displayed along with its main definitions. The{" "}
          <span className="material-symbols-outlined infologobrief">info</span>{" "}
          button shows more information about the word such as phonetics,
          gender, part of speech, among others. The word can be saved in a
          unique Vocabulary by clicking the{" "}
          <span className="material-symbols-outlined infologobrief ">
            add_circle
          </span>{" "}
          button.
          <br /> <br /> Anyone can register and access their own personalized
          Vocabulary. I hope it helps you in your German journey too!{" "}
        </p>
        <p></p>
      </div>
      <div>
        <hr
          style={{
            color: "white",
            backgroundColor: "white",
            height: 2,
            borderColor: "white",
          }}
        />
        <div className="aboutLogos ">
          <div>
            <a
              rel="noreferrer"
              href="https://github.com/BetoCarrillo"
              target={"_blank"}
            >
              <div className="gitLogoDiv ">
                <img src={github} alt="" height={55}></img>
              </div>
              <div className="githubflex">
                <div className="gitNameDiv overlay">Github</div>
              </div>
            </a>
          </div>
          <div>
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/alberto-carrillo-ch/"
              target={"_blank"}
            >
              <div className=" linkLogoDiv">
                <img src={linkedin} alt="" height={55}></img>
              </div>
              <div className="linkedflex">
                <div className="linkedNameDiv overlay">LinkedIn</div>
              </div>
            </a>
          </div>
          <div>
            <div className=" mailLogoDiv">
              <span
                className="material-symbols-outlined"
                ref={target}
                onClick={() => setShow(!show)}
              >
                mail
              </span>
            </div>
            <div className="mailflex">
              {" "}
              <a
                rel="noreferrer"
                href="mailto:alberto.carrillo01@gmail.com"
                target={"_blank"}
              >
                <div className="mailNameDiv overlay">Mail</div>
              </a>
              <Overlay target={target.current} show={show} placement="top">
                {(props) => (
                  <Tooltip className="mailpopover" {...props}>
                    alberto.carrillo01@gmail.com
                  </Tooltip>
                )}
              </Overlay>
            </div>
          </div>
        </div>
        <hr
          className="botBreakLine"
          style={{
            color: "white",
            backgroundColor: "white",
            height: 2,
            borderColor: "white",
          }}
        />
      </div>
    </div>
  );
}

export default About;
