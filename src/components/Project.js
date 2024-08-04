import React, { useState, useEffect } from "react";
import openSvg from "../assets/image/open-link.svg";
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
import hotelzero1 from "../assets/image/0.png";
import hotelzero2 from "../assets/image/1.png";
import hotelzero3 from "../assets/image/3.png";
import hotelzero4 from "../assets/image/4.png";
import rails from "../assets/image/rails.png";
import ruby from "../assets/image/ruby.png";
import react from "../assets/image/react.png";
import js from "../assets/image/js.png";
import html from "../assets/image/html.png";
import css from "../assets/image/css.png";
import vue from "../assets/image/vue.png";
import postgres from "../assets/image/postgres.png";
import php from "../assets/image/php.png";
import mysql from "../assets/image/mysql.png";
import laravel from "../assets/image/laravel.png";
import bs from "../assets/image/bs.png";
import jwt from "../assets/image/jwt.png";
import tw from "../assets/image/tw.png";
import redux from "../assets/image/redux.png";
import vuex from "../assets/image/vuex.png";
import vuetify from "../assets/image/vuetify.png";
import redis from "../assets/image/redis.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

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
      video: null,
      tech_stack: [
        {
          name: 'PHP',
          image: php
        },
        {
          name: 'Laravel',
          image: laravel
        },
        {
          name: 'Javascript',
          image: js
        },
        {
          name: 'React',
          image: react
        },
        {
          name: 'Mysql',
          image: mysql
        },
        {
          name: 'HTML',
          image: html
        },
        {
          name: 'CSS',
          image: css
        },
        {
          name: 'Boostrap',
          image: bs
        },
        {
          name: 'JWT',
          image: jwt
        },
        {
          name: 'Redux',
          image: redux
        },
      ]
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
      video: videoFurni,
      tech_stack: [
        {
          name: 'PHP',
          image: php
        },
        {
          name: 'Laravel',
          image: laravel
        },
        {
          name: 'Javascript',
          image: js
        },
        {
          name: 'Vue Js',
          image: vue
        },
        {
          name: 'Postgresql',
          image: postgres
        },
        {
          name: 'HTML',
          image: html
        },
        {
          name: 'CSS',
          image: css
        },
        {
          name: 'Tailwind',
          image: tw
        },
        {
          name: 'JWT',
          image: jwt
        },
        {
          name: 'Vuex',
          image: vuex
        },
      ]
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
          id: 4,
          image: sport4,
        },
      ],
      description:
        "A tracking and workout app is a mobile adn web application designed to help users keep track of their fitness goals and progress. It usually has features that allow users to set fitness goals, track their workouts, and monitor their progress over time.",
      video: Videosport,
      tech_stack: [
        {
          name: 'Javascript',
          image: js
        },
        {
          name: 'React',
          image: react
        },
        {
          name: 'Postgresql',
          image: postgres
        },
        {
          name: 'HTML',
          image: html
        },
        {
          name: 'CSS',
          image: css
        },
        {
          name: 'JWT',
          image: jwt
        },
        {
          name: 'Redux',
          image: redux
        }
      ]
    },
    {
      id: 4,
      title: "Pertamina",
      link_backend: null,
      link_frontend: null,
      images: [
        {
          id: 1,
          image: pertamina1,
        },
        {
          id: 2,
          image: pertamina2,
        }
      ],
      description:
        "Pertamina dashboard",
      video: videoPertamina,
      tech_stack: [
        {
          name: 'Javascript',
          image: js
        },
        {
          name: 'React',
          image: react
        },
        {
          name: 'HTML',
          image: html
        },
        {
          name: 'CSS',
          image: css
        },
        {
          name: 'JWT',
          image: jwt
        },
        {
          name: 'Redux',
          image: redux
        },
        {
          name: 'Tailwind',
          image: tw
        }
      ]
    },
    {
      id: 5,
      title: "HotelZero",
      link_backend: null,
      link_frontend: null,
      images: [
        {
          id: 1,
          image: hotelzero1,
        },
        {
          id: 2,
          image: hotelzero2,
        },
        {
          id: 3,
          image: hotelzero3,
        },
        {
          id: 4,
          image: hotelzero4,
        }
      ],
      demo: "https://www.hotelzero.io/",
      tech_stack: [
        {
          name: 'Javascript',
          image: js
        },
        {
          name: 'Vue Js',
          image: vue
        },
        {
          name: 'Postgresql',
          image: postgres
        },
        {
          name: 'HTML',
          image: html
        },
        {
          name: 'CSS',
          image: css
        },
        {
          name: 'Ruby',
          image: ruby
        },
        {
          name: 'Ruby on Rails',
          image: rails
        },
        {
          name: 'Vuetify',
          image: vuetify
        },
        {
          name: 'Redis',
          image: redis
        },
        {
          name: 'Tailwind',
          image: tw
        },
      ]
    }
  ];
  const [showModal, setShowModal] = useState(false);
  const [detail, setDetail] = useState({})
  const handleShow = (id) => {
    setShowModal(true)
    setDetail(data.find(x => x.id === id))
  }

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <div id="works" className="mt-40 text-white lg:px-52 px-4">
        <div className="flex items-center">
          <h1 className="text-4xl text-white text-center">Project</h1>
          <hr className="w-full border-yellow-600 border-t-4 ml-2" />
        </div>
        <div className="w-full grid grid-cols-2 gap-4 mt-16">
          {data.map((dat) => (
            // <div
            //   className="w-full bg-slate-200 h-64 relative group transition-transform duration-500"
            //   key={dat.id}
            //   data-aos="fade-left"
            // >
            //   <div className="card-hovered"></div>
            //   <div className="hovered-content h-full flex flex-col justify-center items-center">
            //     <h3 className="text-black text-4xl font-semibold">
            //       Portfolio Item
            //     </h3>
            //     <h3 className="py-4 text-2xl">{dat.title}</h3>
            //     <div
            //       className="w-14 h-14 bg-transparent border-solid border-black border-2 rounded-full flex justify-center items-center ease-out duration-300 transition-all cursor-pointer hover:bg-white"
            //       onClick={() => handleShow(dat.id)}
            //     >
            //       <img src={LeftArrow} alt="special" className="w-10" />
            //     </div>
            //   </div>
            //   <img
            //     src={dat.images[0].image}
            //     alt="tet"
            //     className="w-full h-64 object-cover"
            //   />
            // </div>
            <div className="w-full bg-white rounded-xl min-h-[444px]" >
              <div className="relative mb-10">
                <img
                  src={dat.images[0].image}
                  alt="tet"
                  className="w-full h-28 object-cover rounded-t-xl"
                />
                <h1 className="text-4xl text-center font-extrabold text-yellow-600 absolute w-full -bottom-4">{dat.title}</h1>
              </div>
              <div className="px-2">
                <h3 className="text-xl text-slate-400">Technology Stack:</h3>
                {dat.tech_stack ? (
                  <div className="w-full grid grid-cols-3 grid-flow-row gap-4 mb-6">
                    {dat.tech_stack.map((stack) => (
                      <div className="text-black flex gap-1 items-center p-2 bg-slate-300 rounded-md max-w-[130px]">
                        <img src={stack.image} alt={stack.name} className="w-8 h-8" />
                        <p>{stack.name}</p>
                      </div>
                    ))}
                  </div>) : ""}

              </div>
              <div className="w-full flex items-center justify-center cursor-pointer" onClick={() => handleShow(dat.id)}>
                <p className="text-lg font-bold text-blue-600">Open details</p>
                <img src={openSvg} alt="open-link" className="w-5 h-5" />
              </div>
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
