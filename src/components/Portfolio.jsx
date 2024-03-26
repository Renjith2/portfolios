// import React from "react";
// import imdb from '../assets/portfolio/imdb.jpg'
// import bookmyshows from '../assets/portfolio/bookmyshows.jpg'
// import installNode from "../assets/portfolio/installNode.jpg";
// import navbar from "../assets/portfolio/navbar.jpg";
// import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
// import reactWeather from "../assets/portfolio/reactWeather.jpg";

// const Portfolio = () => {
//   const portfolios = [
//     {
//       id: 1,
//       src: bookmyshows,
//       href:"https://superb-puffpuff-fa801b.netlify.app/register",
//     },
//     {
//       id: 2,
//       src: imdb,
//       href:"https://courageous-kitten-5ccf5a.netlify.app/",
//     },
//     {
//       id: 3,
//       src: navbar,
//     },
//     {
//       id: 4,
//       src: reactSmooth,
//     },
//     {
//       id: 5,
//       src: installNode,
//     },
//     {
//       id: 6,
//       src: reactWeather,
//     },
//   ];

//   return (
//     <div
//       name="portfolio"
//       className="mt-40 ml-20  md:h-screen"
//     >
//       <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
//         <div className="pb-8">
//           <p className="text-4xl font-bold inline border-b-4 border-gray-500">
//             Portfolio
//           </p>
//           <p className="py-6">Check out some of my work right here</p>
//         </div>

//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">
//           {portfolios.map(({ id, src,href }) => (
//             <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
             
//               <img
//                 src={src}
//                 alt=""
//                 className="rounded-md w-full h-auto duration-200 hover:scale-105"
//               />
//               <div className="flex items-center justify-center pt-2">
//                 <button className="w-1/3 px-2 py-1 m-2 text-sm duration-200 hover:scale-105">
//                   Demo
//                   <a href={href}/>
//                 </button>
//                 <button className="w-1/3 px-2 py-1 m-2 text-sm duration-200 hover:scale-105">
//                   Code
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;


import React from "react";
import imdb from '../assets/portfolio/imdb.jpg'
import bookmyshows from '../assets/portfolio/bookmyshows.jpg'
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: bookmyshows,
      href:"https://superb-puffpuff-fa801b.netlify.app/register",
      href1:"https://github.com/Renjith2/Mov-Cli",
    },
    {
      id: 2,
      src: imdb,
      href:"https://courageous-kitten-5ccf5a.netlify.app/",
      href1:"https://github.com/Renjith2/MoviesLab",
    },
    {
      id: 3,
      src: navbar,
    },
    {
      id: 4,
      src: reactSmooth,
    },
    {
      id: 5,
      src: installNode,
    },
    {
      id: 6,
      src: reactWeather,
    },
  ];

  return (
    <div
      className="mt-40 ml-20 md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">
          {portfolios.map(({ id, src, href,href1 }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
             
              <img
                src={src}
                alt=""
                className="rounded-md w-full h-auto duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center pt-2">
                <button className="w-1/3 px-2 py-1 m-2 text-sm duration-200 hover:scale-105">
                  <a href={href} target="_blank" rel="noopener noreferrer">Demo</a> {/* Open link in a new tab */}
                </button>
                <button className="w-1/3 px-2 py-1 m-2 text-sm duration-200 hover:scale-105">
                  <a href={href1} target="_blank" rel="noopener noreferrer">Code</a> {/* Anchor to code section in the same page */}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

