import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Crad from "@/components/Crad";
import Counter from "@/components/Counter";
import { FeaturedCompanies } from "@/constants";
import Image from "next/image";

const Testimonial = () => {
  return (
    <section className=" pt-[5rem]">
      <p className="text-text_secondary text-xl font-bold mb-2 md:text-xl text-center">
        Dynamic Trading
      </p>
      <h1 className="text-xl md:text-2xl font-semibold text-center text-text_color py-5">
        See Our Seticfied User Says About Dynamic
      </h1>
      <div className="flex flex-col gap-8">
        <Carousel className="flex items-center justify-center p-0 md:p-10">
          <CarouselContent className="-ml-1">
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
              <Crad
                header="Buying Crypto Was Never Easy"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit pariatur error dolorem sunt numquam, beatae doloribus 
                voluptate eius obcaecati rerum quasi voluptatibus eveniet quisquam qui exercitationem assumenda laboriosam quaerat possimus."
                name="John Watson"
                loaction="New York"
              />
            </CarouselItem>
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
              <Crad
                header="Buying Crypto Was Never Easy"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit pariatur error dolorem sunt numquam, beatae doloribus 
                voluptate eius obcaecati rerum quasi voluptatibus eveniet quisquam qui exercitationem assumenda laboriosam quaerat possimus."
                name="John Watson"
                loaction="New York"
              />
            </CarouselItem>
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
              <Crad
                header="Buying Crypto Was Never Easy"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit pariatur error dolorem sunt numquam, beatae doloribus 
                voluptate eius obcaecati rerum quasi voluptatibus eveniet quisquam qui exercitationem assumenda laboriosam quaerat possimus."
                name="John Watson"
                loaction="New York"
              />
            </CarouselItem>
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
              <Crad
                header="Buying Crypto Was Never Easy"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit pariatur error dolorem sunt numquam, beatae doloribus 
                voluptate eius obcaecati rerum quasi voluptatibus eveniet quisquam qui exercitationem assumenda laboriosam quaerat possimus."
                name="John Watson"
                loaction="New York"
              />
            </CarouselItem>
            <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
              <Crad
                header="Buying Crypto Was Never Easy"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit pariatur error dolorem sunt numquam, beatae doloribus 
                voluptate eius obcaecati rerum quasi voluptatibus eveniet quisquam qui exercitationem assumenda laboriosam quaerat possimus."
                name="John Watson"
                loaction="New York"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="ml-12" />
          <CarouselNext className="mr-14" />
        </Carousel>

        <Counter />
        <div className=" flex flex-wrap items-center gap-4 justify-center mt-5 md:justify-around md:gap-6 mt-16">
          {FeaturedCompanies.map((item) => (
            <Image
              src={item.logo}
              alt={item.name}
              width={95}
              height={100}
              key={item.name}
              className=" h-[23px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
