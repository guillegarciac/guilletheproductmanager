import React from "react";

const Skills = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            My Skills
          </h2>

          <p className="pb-5">
          🎯 Dedicated, optimistic and practical Software Product Director & Project manager committed to helping make a difference in the tech-hospitality industry.  
          </p>
          <p className="pb-5">
          🎯 Passionate about and love agile software product development; from definition and design through development and delivery of finished products to production. 
          </p>
          <p className="pb-5">
          🎯 My colleagues and hierarchical superiors say that my qualities include leadership, dedication to team-based, customer-focused problem solving and a keen aptitude for identifying selling opportunities. 
          </p>
          <p className="pb-5">
          🎯 Clients say that I'm fast, smart, funny and always willing to help. I believe I have an innate ability to simultaneously manage different projects and I love running toward fires.  
          </p>
          <p className="pb-5">
          🎯 Not everyone is good at everything but everyone is good at something: my current experience has taught me that some can have good ideas but execution is key and I execute.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;