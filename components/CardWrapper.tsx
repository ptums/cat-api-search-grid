import React from "react";
import dynamic from "next/dynamic";
import { Breed } from "types/Breed";
const BreedCard = dynamic(() => import("components/BreedCard"))
const CatImage = dynamic(() => import("components/CatImage"))

interface Props {
  breeds: Breed[];
  isSearch: boolean;
}
const CardWrapper = ({ breeds, isSearch }: Props) => {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-2 md:gap-4 lg:gap-5">
      {isSearch ? (
        <>
          {breeds.map((item: Breed) => (
            <BreedCard key={item.id} {...item} />
          ))}
        </>
      ) : (
        <>
          {breeds.map((item) => (
            <CatImage key={item.id} alt={item.id} src={item.url} />
          ))}
        </>
      )}
    </div>
  );
};

export default CardWrapper;
