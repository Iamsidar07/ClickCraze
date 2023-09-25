"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
interface BannerProps {
  bannerImages: string[];
}
const Banner = ({ bannerImages }: BannerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? bannerImages.length - 1 : prevIndex - 1,
    );
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative rounded-2xl bg-black bg-opacity-40">
      <button
        className="absolute inset-y-0 left-0 py-2 px-4 rounded-l-2xl bg-black bg-opacity-40 text-white z-10"
        onClick={prevImage}
      >
        &lt;
      </button>
      <button
        className="absolute inset-y-0 right-0 py-2 px-4 rounded-r-2xl bg-black bg-opacity-40 text-white z-10"
        onClick={nextImage}
      >
        &gt;
      </button>
      <div className="w-full h-44 md:h-96 overflow-hidden">
        {bannerImages.map((image, index) => (
          <Image
            key={index}
            className={`absolute w-full h-full object-cover transition-opacity duration-500 rounded-2xl ${
              index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            priority
            fill
            src={image}
            alt="Slider Image"
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
