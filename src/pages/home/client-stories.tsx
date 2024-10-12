"use client";

import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import useCarouselSlide from "@/hooks/use-carousel-slide";

const ClientStories = () => {
  const { activeSlide, goToSlide, settings, sliderRef } = useCarouselSlide();

  return (
    <section className="mt-24 text-gray-200 ">
      <h1 className="text-balance text-3xl font-bold text-center text-gray-200">
        What people say about us
      </h1>

      <div className="md:mt-14 w-full overflow-x-hidden py-10">
        <div className="relative mx-auto max-w-5xl">
          <Slider {...settings} ref={sliderRef} aria-live="polite">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="cursor-pointer p-4">
                <div className="grid justify-start p-4 md:grid-cols-[70px_1fr_70px] ">
                  <div className="flex  items-start md:justify-center    ">
                    <Image
                      alt="Image of the testimonial quote icon"
                      className="size-10 opacity-25"
                      height={24}
                      loading="lazy"
                      src="/icon/blockquote.svg"
                      width={44}
                    />
                  </div>

                  <article className="mt-6 md:mt-0 text-center">
                    <blockquote className="text-xl text-gray-200 sm:pb-5 sm:text-[30px] lg:text-[32px] leading-[1] ">
                      {testimonial.text}
                    </blockquote>
                    <div className="pt-6">
                      <h2 className="text-[20px] font-bold leading-[30px] text-gray-200 lg:leading-9">
                        {testimonial.name}
                      </h2>
                      <p className="leading-6 text-[#121418] opacity-[70%]">
                        {testimonial.address}
                      </p>
                    </div>
                  </article>

                  <div className="flex size-20  items-center md:justify-center  justify-end h-full w-full  ">
                    <Image
                      alt="Image of the testimonial quote icon"
                      className="size-10 opacity-25 rotate-180"
                      height={24}
                      loading="lazy"
                      src="/icon/blockquote.svg"
                      width={44}
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <div className=" flex w-full  items-center gap-x-4    justify-center md:pl-0">
            {TESTIMONIALS.map((items, index) => (
              <button
                key={index}
                aria-controls="carousel"
                aria-label="next slide"
                className={`${
                  activeSlide === index
                    ? "h-7 bg-primary"
                    : "h-5 bg-primary px-2 opacity-[50%] hover:bg-primary hover:opacity-[100%]"
                } rounded-full p-2 transition-all`}
                type="button"
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const TESTIMONIALS = [
  {
    id: 0,
    text: "Pro-Ray’s commitment to safety and quality is evident in everything they do. Their radiation protection solutions have significantly improved the working environment for our radiology staff",
    name: "Dr. Bello",
    address: "Head of Radiology, Zenith Specialist Hospital",
    alt: "client testimonial",
  },
  {
    id: 1,
    text: "Pro-Ray’s commitment to safety and quality is evident in everything they do. Their radiation protection solutions have significantly improved the working environment for our radiology staff",
    name: "Dr. Bello",
    address: "Head of Radiology, Zenith Specialist Hospital",
    alt: "client testimonial",
  },
  {
    id: 2,
    text: "Pro-Ray’s commitment to safety and quality is evident in everything they do. Their radiation protection solutions have significantly improved the working environment for our radiology staff",
    name: "Dr. Bello",
    address: "Head of Radiology, Zenith Specialist Hospital",
    alt: "client testimonial",
  },
  {
    id: 3,
    text: "Pro-Ray’s commitment to safety and quality is evident in everything they do. Their radiation protection solutions have significantly improved the working environment for our radiology staff",
    name: "Dr. Bello",
    address: "Head of Radiology, Zenith Specialist Hospital",
    alt: "client testimonial",
  },
  {
    id: 4,
    text: "Pro-Ray’s commitment to safety and quality is evident in everything they do. Their radiation protection solutions have significantly improved the working environment for our radiology staff",
    name: "Dr. Bello",
    address: "Head of Radiology, Zenith Specialist Hospital",
    alt: "client testimonial",
  },
];

export default ClientStories;
