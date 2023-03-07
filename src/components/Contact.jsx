import React from "react";

const Contact = () => {
  return (
    <section className="bg-secondery px-5 py-32" id="contact">
      <div className="text-center md:w-[60%] mx-auto text-white">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-indigo-600 pb-2">
          Contact Me
        </h2>
        <p>
          I am currently open for a part time freelance Frontend Developer projects. If you
          want to discuss about that feel free to email me or call me.
        </p>

        <p className="py-2">
          <span className="font-bold">Email:</span> ggarciacardiel@gmail.com
        </p>
        <p className="py-2">
          <span className="font-bold">Phone:</span> 34 620 77 82 77
        </p>
      </div>
    </section>
  );
};

export default Contact;