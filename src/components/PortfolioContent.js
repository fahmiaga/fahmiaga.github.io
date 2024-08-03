import React, { useState } from "react";
import ArrowRight from "../../src/assets/image/arrow-right.svg";
import ArrowLeft from "../../src/assets/image/arrow-left.svg";
import VideoPlayer from "./VideoPlayer";

const PortfolioContent = ({ data }) => {
  console.log(data[0]);
  const [imageId, setImageId] = useState(0);

  const handleClickLeft = () => {
    if (imageId !== 0) {
      setImageId(imageId - 1);
    }
  };
  const handleClickRight = () => {
    if (imageId < data.images.length - 1) {
      setImageId(imageId + 1);
    }
  };

  return (
    <>
      <div className="text-black">
        <div className="flex items-center justify-center group transition-transform duration-500">
          <img
            src={ArrowLeft}
            alt="arrow-left"
            className="h-24 cursor-pointer opacity-0 ease-out duration-300 transition-all group-hover:opacity-100"
            onClick={handleClickLeft}
          />
          <img
            src={data.images[imageId].image}
            alt={`${data.images[imageId].image}-${data.images[imageId].id}`}
            className="w-4/5 max-w-7xl"
          />
          <img
            src={ArrowRight}
            alt="arrow-right"
            className="h-24 cursor-pointer opacity-0 ease-out duration-300 transition-all group-hover:opacity-100"
            onClick={handleClickRight}
          />
        </div>
        <div className="mt-7">
          <p><strong>Description</strong> :{data.description}</p>
          {data.demo ? (<p><strong>Demo</strong> : <a
            href={data.demo}
            className="text-blue-600 underline"
          >
            Click Me
          </a> </p>) : ("")}
          <p>
            <strong>FrontEnd Project</strong> :
            {data.link_frontend !== null ? (
              <span>
                {" "}
                <a
                  href={data.link_frontend}
                  className="text-blue-600 underline"
                >
                  Click Me
                </a>{" "}
              </span>
            ) : (
              "-"
            )}
          </p>
          <p>
            <strong>BackEnd Project</strong>:{" "}
            {data.link_backend !== null ? (
              <span>
                {" "}
                <a
                  href={data.link_backend}
                  className="text-blue-600 underline"
                >
                  Click Me
                </a>{" "}
              </span>
            ) : (
              "-"
            )}
          </p>
          <div><strong>Video</strong> :
            {data.video !== null ?
              <VideoPlayer video={data.video} />
              : '-'
            }
          </div>

        </div>
      </div>
    </>
  );
};

export default PortfolioContent;
