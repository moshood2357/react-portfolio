import React from "react";
import currency from "../assets/portfolio/currency.png";
import websitescroll from "../assets/portfolio/websitescroll.png";
import piggame from "../assets/portfolio/piggame.png";
// import reactParallax from "../assets/portfolio/reactParallax.jpg";
import tiideHR from "../assets/portfolio/tiideHR.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: currency,
      code: "https://github.com/moshood2357/currency-converter",
       demo: "https://currencyconverter-1.netlify.app/"
    },
    {
      id: 2,
      src: websitescroll,
      code: "https://github.com/moshood2357/scroll-website",
      demo: "https://myscrollwebsite.netlify.app/", 
    },

    {
      id: 3,
      src: piggame,
      code: "https://github.com/moshood2357/updated-pig-game",
      demo: "https://wunmi2.netlify.app/"
    },
    {id: 4,
      src: tiideHR,
      code: "https://github.com/Tiidelab-Fellowship/tiide-hr-react-fe",
      demo: "https://tiide-hr.netlify.app/"
    },
    // {
    //   id: 5,
    //   src: installNode,
    // },
    {
      id: 5,
      src: reactWeather,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(( {id, src, code, demo}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href = {demo}> 
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
                <a href = {code}>
                  <button  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
