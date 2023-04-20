import React, { useState } from "react";
import LeftArrow from "../assets/image/arrow-right-short.svg";
import Modal from "./Modal";
import PortfolioContent from "./PortfolioContent";
import manga1 from "../assets/image/mangalime-2.jpg";
import manga2 from "../assets/image/mangalime-1.jpg";
import manga3 from "../assets/image/mangalime-3.jpg";
import sport1 from "../assets/image/sport-1.png";
import sport2 from "../assets/image/sport-2.png";
import sport3 from "../assets/image/sport-3.png";
import sport4 from "../assets/image/sport-4.png";
import Videosport from "../assets/image/sportsman.webm";
import furni1 from "../assets/image/furnitured-1.png";
import furni2 from "../assets/image/furnitured-2.png";
import furni3 from "../assets/image/furnitured-3.png";
import videoFurni from "../assets/image/furnitured.webm";
import pertamina1 from "../assets/image/pertamina-1.png";
import pertamina2 from "../assets/image/pertamina-2.png";
import videoPertamina from "../assets/image/pertamina.webm";

const Project = () => {
  const data = [
    {
      id: 1,
      title: " Mangalime",
      link_backend: "https://github.com/fahmiaga/comic-api-laravel",
      link_frontend: "https://github.com/fahmiaga/comic-frontend",
      images: [
        {
          id: 1,
          image: manga1,
        },
        {
          id: 1,
          image: manga2,
        },
        {
          id: 1,
          image: manga3,
        },
      ],
      description:
        "Mangalime is an app to read comics online. made with PHP laravel framework and react js.",
      video: null
    },
    {
      id: 2,
      title: " Furnitured",
      link_backend: "https://github.com/fahmiaga/comic-api-laravel",
      link_frontend: "https://github.com/fahmiaga/comic-frontend",
      images: [
        {
          id: 1,
          image: furni1,
        },
        {
          id: 1,
          image: furni2,
        },
        {
          id: 1,
          image: furni3,
        },
      ],
      description:
        "Furnitured is e-commerce that sell furniture. made with PHP laravel framework and vue js.",
      video: videoFurni
    },
    {
      id: 3,
      title: "Sportsman",
      link_backend: null,
      link_frontend: "https://github.com/fahmiaga/sportsman-app",
      images: [
        {
          id: 1,
          image: sport1,
        },
        {
          id: 2,
          image: sport2,
        },
        {
          id: 3,
          image: sport3,
        },
        {
          id: 3,
          image: sport4,
        },
      ],
      description:
        "A tracking and workout app is a mobile adn web application designed to help users keep track of their fitness goals and progress. It usually has features that allow users to set fitness goals, track their workouts, and monitor their progress over time.",
      video: Videosport
    },
    {
      id: 4,
      title: "Pertamina",
      link_backend: "https://github.com/fahmiaga/comic-api-laravel",
      link_frontend: "https://github.com/fahmiaga/comic-frontend",
      images: [
        {
          id: 1,
          image: pertamina1,
        },
        {
          id: 1,
          image: pertamina2,
        }
      ],
      description:
        "Mangalime is an app to read comics online. made with PHP laravel framework and react js.",
      video: videoPertamina
    },
  ];
  const [showModal, setShowModal] = useState(false);
  const [detail, setDetail] = useState({})
  const handleShow = (id) => {
    setShowModal(true)
    setDetail(data.find(x => x.id === id))
  }


  return (
    <>
      <div id="works" className="mt-40 text-white lg:px-52 px-4">
        <div className="flex items-center">
          <h1 className="text-4xl text-white text-center">Project</h1>
          <hr className="w-full border-yellow-600 border-t-4 ml-2" />
        </div>
        <div className="w-full grid grid-cols-2 gap-4 mt-16">
          {data.map((dat) => (
            <div
              className="w-full bg-slate-200 h-64 relative group transition-transform duration-500"
              key={dat.id}
            >
              <div className="card-hovered"></div>
              <div className="hovered-content h-full flex flex-col justify-center items-center">
                <h3 className="text-black text-4xl font-semibold">
                  Portfolio Item
                </h3>
                <h3 className="py-4 text-2xl">{dat.title}</h3>
                <div
                  className="w-14 h-14 bg-transparent border-solid border-black border-2 rounded-full flex justify-center items-center ease-out duration-300 transition-all cursor-pointer hover:bg-white"
                  onClick={() => handleShow(dat.id)}
                >
                  <img src={LeftArrow} alt="special" className="w-10" />
                </div>
              </div>
              <img
                src={dat.images[0].image}
                alt="tet"
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
          >
            <PortfolioContent data={detail} />
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Project;
