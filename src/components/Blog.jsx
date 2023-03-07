import React from "react";

const Blog = () => {
  const post = [
    {
      img: "https://res.cloudinary.com/duw4zfhmh/image/upload/v1678191910/deavault/1637916654505_xjpx1q.jpg",
      title: "How Integrations Supercharge Hotel Software Solutions",
      url: "https://insights.shijigroup.com/how-integrations-supercharge-hotel-software-solutions/",
    },
    {
      img: "https://res.cloudinary.com/duw4zfhmh/image/upload/v1678192218/deavault/1677828021995_oerfi3.jpg",
      title: "GX Talks | How can a proactive communication strategy help you exceed guest expectations?",
      url: "https://www.youtube.com/watch?v=XuD1Wop8-bs&ab_channel=ShijiReviewPro",
    },
  ];

  return (
    <section className="bg-primary text-white px-5 py-32" id="blog">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[100px] border-indigo-600 pb-2">
            Other
          </h2>

          <p className="pb-5">Some of my best articles and videos</p>
        </div>

        <div></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-2 gap-10">
        {post.map((item) => {
          return (
            <div>
              <img src={item.img} alt={item.title} />
              <h3 className="py-5 text-2xl">{item.title}</h3>
              <a
                href={item.url}
                className=" btn bg-accent  border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent"
              >
                Read More
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Blog; 