import React from "react";
import HeroImg from "../assets/guillehero.jpeg";

const Hero = () => {
  return (
    <section className="bg-primary px-5 text-white py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            Hi, <br />I am <span className="text-accent">G</span>uille <br />
            Director of Product & Fullstack Developer
          </h1>

          <p className="py-5">
            I am proficient in the below Languages and Tools
          </p>

          <div className="icons-container">
              <a href="https://www.atlassian.com/software/jira" target="_blank" rel="noreferrer">
                <img
                  src="https://img.icons8.com/color/512/jira.png"
                  alt="jira-software"
                  width="40"
                />
              </a>
              &nbsp;
              <a href="https://www.atlassian.com/software/confluence" target="_blank" rel="noreferrer">
                <img
                  src="https://img.icons8.com/fluency/512/confluence.png"
                  alt="jira-confluence"
                  width="40"
                />
              </a>
              &nbsp;
              <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                  alt="html5"
                  width="37"
                />
              </a>
              &nbsp;
              <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                  alt="css3"
                  width="37"
                />
              </a>
              &nbsp;
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
                  alt="javascript"
                  width="40"
                />
              </a>
              &nbsp;
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg"
                  alt="react"
                  width="40"
                />
              </a>
              &nbsp;
              <a href="https://nodejs.org" target="_blank" rel="noreferrer">
                <img
                  src="https://www.svgrepo.com/show/303266/nodejs-icon-logo.svg"
                  alt="nodejs"
                  width="40"
                />
              </a>
              &nbsp;
              <a href="https://expressjs.com" target="_blank" rel="noreferrer">
                <img
                  src="https://img.icons8.com/officexs/512/express-js.png"
                  alt="expressjs"
                  width="40"
                />
              </a>
              <br></br>
              
                <a href="https://handlebarsjs.com/" target="_blank" rel="noreferrer">
                <img
                  src="https://img.icons8.com/office/512/handlebar-mustache.png"
                  alt="handlebars-hbs"
                  width="40"
                />
              </a>
              &nbsp;
              <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"
                  alt="mongodb"
                  width="35"
                />
              </a>
              &nbsp;
              <a href="https://www.postman.com/" target="_blank" rel="noreferrer">
                <img
                  src="https://www.svgrepo.com/show/354202/postman-icon.svg"
                  alt="postman"
                  width="32"
                />
              </a>
              &nbsp;
              <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                <img
                  src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                  alt="git"
                  width="40"
                />
              </a>
              &nbsp;
              <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg"
                  alt="visualStudioCode"
                  width="40"
                />
              </a>
              &nbsp;
              <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
                <img
                  src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
                  alt="figma"
                  width="40"
                />
              </a>
              &nbsp;
              <a href="https://www.tableau.com/" target="_blank" rel="noreferrer">
                <img
                  src="https://img.icons8.com/color/512/tableau-software.png"
                  alt="tableau"
                  width="40"
                />
              </a>
                  &nbsp;
              <a href="https://www.mailchimp.com/" target="_blank" rel="noreferrer">
                <img
                  src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/512/external-mailchimp-is-a-marketing-automation-platform-and-an-email-marketing-service-logo-shadow-tal-revivo.png"
                  alt="mailchimp"
                  width="40"
                />
              </a>
              &nbsp;
              <a href="https://www.miro.com/" target="_blank" rel="noreferrer">
                <img
                  src="https://www.freelogovectors.net/wp-content/uploads/2021/12/mirologo-freelogovectors.net_.png"
                  alt="miro"
                  width="40"
                />
              </a>
          </div>
        </div>

        <div className="hero-img">
          <img
            src={HeroImg}
            alt="guillegarciac"

            className="lgw-[80%] ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;