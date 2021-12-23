/**
 *  This component displays the cat's affection rating with star emojis
 */
import React from "react";

interface Props {
  affectionLevel: number;
}

const AffectionStars = ({ affectionLevel }: Props) => {
  return (
    <>
      {[1, 2, 3, 4, 5].map((num: number) =>
        num <= affectionLevel ? <span key={num}>★</span> : <span key={num}>☆</span>
      )}
    </>
  );
};

export default AffectionStars;
