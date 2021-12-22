/**
 *  This component displays the individual cat image
 */
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
}

const CatImage = ({ src, alt }: Props) => (
  <div className="relative" style={{ width: "100%", height: "300px" }}>
    <Image
      src={src}
      alt={alt}
      layout="fill"
      objectFit="cover"
      objectPosition="center"
      priority={true}
    />
  </div>
);

export default CatImage;
