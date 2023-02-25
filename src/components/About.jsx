import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Focused on leveraging on my deep drive and passion for creativity and dynamism. I am a highly positive, curiosity-driven individual who believes strongly that acquiring new skills and knowledge is the basis of any meaningful and tangible development. Aiming to explore the field of software development in order to make tangible impact on my immediate environment and the world at large.
        </p>

        <br />

        <p className="text-xl">
          I have taken several certification courses, thereby making me fully equiped and ever ready to face the task ahead.
        </p>
      </div>
    </div>
  );
};

export default About;
