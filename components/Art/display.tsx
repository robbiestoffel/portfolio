import Image from "next/image"; 
import { FC } from "react";

interface DisplayProps {
  title: string,
  medium: string,
  size: string,
  year: string,
  src: string,
  portrait: boolean;
  alt: string,
}

const Display: React.FC<DisplayProps> = ({ title, medium, size, year, src, portrait, alt }) => {
  
  let height: number;
  let width: number;

  if (portrait === true ) {
    height = 400;
    width = 300;
  } else {
    height = 300;
    width = 500;
  }
  
  return (
		<div className="bg-brown-950 flex flex-col md:flex-row items-center md:items-start gap-5 items-start p-5">
			<div className="flex md:basis-1/2 justify-center md:justify-end h-96 w-96">
				<Image src={src} height={height} width={width} alt={alt} />
			</div>
			<div>
        <p className="text-lg">
          {title}
          <br />
          {medium}
          <br />
          {size}
          <br />
          {year}
        </p>
      </div>
		</div>
	);
}

export default Display;
