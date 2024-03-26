import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen  bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-20 ml-20">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10 ml-20">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus illum error magni laborum mollitia exercitationem
          numquam, eaque cupiditate impedit nam illo earum, ea iure, enim nulla
          quaerat est atque! Quam molestias inventore minus ipsum perferendis
          voluptatibus facilis tenetur, error illum aspernatur fugiat illo nobis
          aliquid. Adipisci distinctio iusto quod, quam quia voluptatibus sunt
          facere similique aspernatur odio dolore temporibus quas possimus
          architecto? Est, aliquam maxime omnis possimus debitis accusantium
          esse!
        </p>
      </div>
    </div>
  );
};

export default About;
