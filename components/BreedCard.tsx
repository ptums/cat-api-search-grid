import React, { useState } from "react";
import dynamic from "next/dynamic";
import CatImage from "components/CatImage";
import { Breed } from "types/Breed";


const AffectionStars = dynamic(() => import("components/AffectionStars"))


const Card = ({ image, name, description, affection_level }: Breed) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <div className="border drop-shadow rounded-lg cursor-pointer card relative">
        {image && Object.keys(image).includes("url") && (
          <CatImage src={image.url} alt={name} />
        )}
        {(!image || Object.values(image).length <= 0) && (
          <div 
            className="w-full bg-gray-300 text-black flex flex-col justify-center align-center text-center"
            style={{ height: "300px" }}
          >
            <p className="text-3xl font-bold">Image not found</p>
          </div>
        )}
        <div
          onMouseOver={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          className="p-4 absolute bottom-0 left-0 w-full name-banner transition ease-in-out delay-300 hover:h-full"
        >
          <p className="text-white text-xl font-bold">{name}</p>
          {show && (
            <>
              <p className="text-white text-lg my-4">
                <strong>Affection:</strong>{" "}
                <AffectionStars affectionLevel={affection_level} />
              </p>
              <p className="text-white text-sm">{description}</p>
            </>
          )}
        </div>
      </div>
      <style jsx>{`
        .card:nth-child(4n - 3) > .name-banner {
          background-color: rgba(52, 211, 153, 0.6);
        }
        .card:nth-child(4n - 2) > .name-banner {
          background-color: rgba(245, 158, 11, 0.6);
        }
        .card:nth-child(4n - 1) > .name-banner {
          background-color: rgba(37, 99, 235, 0.6);
        }
        .card:nth-child(4n) > .name-banner {
          background-color: rgba(220, 38, 38, 0.6);
        }
      `}</style>
    </>
  );
};

export default Card;
