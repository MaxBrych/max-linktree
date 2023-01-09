import Image from "next/image";
import React from "react";

export const Hero = () => {
  return (
    <div className="py-8 md:pt-4">
      <Image
        className="w-24 h-24 mx-auto rounded-full"
        src="/../public/pfp_1.jpg"
        alt="Picture of Me"
        width={96}
        height={96}
      />
      <h1 className="my-4 text-2xl text-center text-bold">@MaxBrych</h1>
    </div>
  );
};
