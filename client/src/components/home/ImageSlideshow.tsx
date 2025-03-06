
import React, { useCallback, useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";

export default function ImageSlideshow() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

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

  // Update selected index when slide changes
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Navigate to a specific slide when a dot is clicked
  const scrollTo = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  // Auto-slide functionality
  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", onSelect);
    
    // Auto-slide every 6 seconds
    const autoplayInterval = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 6000);

    return () => {
      emblaApi.off("select", onSelect);
      clearInterval(autoplayInterval);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Our Workshops in Action</h2>
        
        <div className="relative w-full max-w-5xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {images.map((image, index) => (
                <div 
                  key={index} 
                  className="min-w-0 flex-[0_0_100%] pl-4 h-[400px]"
                  role="group"
                  aria-roledescription="slide"
                >
                  <div className="p-1 h-full">
                    <div className="rounded-xl overflow-hidden h-full">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <CarouselPrevious 
            onClick={() => emblaApi?.scrollPrev()} 
            className="absolute left-4 lg:left-[-60px] top-1/2 transform -translate-y-1/2" 
          />
          <CarouselNext 
            onClick={() => emblaApi?.scrollNext()} 
            className="absolute right-4 lg:right-[-60px] top-1/2 transform -translate-y-1/2" 
          />
          
          <div className="flex justify-center mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 mx-1 rounded-full transition-colors ${
                  selectedIndex === index ? "bg-primary" : "bg-gray-300"
                } hover:bg-primary/80`}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
