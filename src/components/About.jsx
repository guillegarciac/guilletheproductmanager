import React from "react";
import AboutImg from "../assets/hero-img.png";

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
          👋 Hi, My Name Is Guille Garcia Cardiel everyone calls me Guille. <br></br>🔭 I work as Director of Product <a href="https://reviewpro.shijigroup.com">@ReviewPro</a>, the leading provider of Guest Intelligence solutions for the hospitality industry. I am responsible for the entire spectrum of product planning and execution; from definition, design, and development, to delivery of finished product to production. 
          </p>
          <p className="pb-5">
          🌱 Prior to ReviewPro, I’ve worked in several areas of global hospitality. Today, I use this breadth of experience, insight and professional knowledge to be an established thought-leader in SaaS development and operations within the tech-hospitality industry.
          </p>
          <p className="pb-5">
            I am proficient in Frontend skills like React.js, Redux, Redux Tool
            Kit, Axios, Tailwind CSS, SaSS, Css3 and many more.
          </p>

          <p>In backend I know Node.js, Express.js, MongoDB, and Mongoose</p>

          <p>
            In my spare time I create YouTube videos and write blogs on my Blog.
            Where I talk about programming theory and build various projects.
          </p>
        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;