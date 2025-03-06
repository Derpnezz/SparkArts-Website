
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ImageSlideshow() {
  const images = [
    {
      src: "https://img.freepik.com/free-photo/kids-having-fun-art-class_23-2148774342.jpg",
      alt: "Kids painting in art class",
    },
    {
      src: "https://img.freepik.com/free-photo/children-having-fun-art-class_23-2148630935.jpg",
      alt: "Children doing crafts",
    },
    {
      src: "https://img.freepik.com/free-photo/children-having-fun-art-class-learning-draw_23-2149038842.jpg",
      alt: "Kids learning to draw",
    },
    {
      src: "https://img.freepik.com/free-photo/kids-making-clay-crafts_23-2149038880.jpg",
      alt: "Children making clay crafts",
    },
    {
      src: "https://img.freepik.com/free-photo/kids-having-fun-art-class_23-2149038913.jpg",
      alt: "Kids enjoying art class",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Our Workshops in Action</h2>
        
        <div className="relative w-full max-w-5xl mx-auto">
          <Carousel className="w-full" opts={{ loop: true, align: "start" }}>
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/1 h-[400px]">
                  <div className="p-1 h-full">
                    <div className="rounded-xl overflow-hidden h-full">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 lg:left-[-60px] top-1/2 transform -translate-y-1/2" />
            <CarouselNext className="absolute right-4 lg:right-[-60px] top-1/2 transform -translate-y-1/2" />
          </Carousel>
          
          <div className="flex justify-center mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                className="w-3 h-3 mx-1 rounded-full bg-gray-300 hover:bg-primary focus:bg-primary transition-colors"
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
