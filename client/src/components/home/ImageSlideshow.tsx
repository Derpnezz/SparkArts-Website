
import React, { useCallback, useEffect, useState, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEmblaCarousel } from "embla-carousel-react";

export default function ImageSlideshow() {
  const [api, setApi] = useState<any>(null);
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
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());
  }, [api]);

  // Initialize a ref to store the interval ID
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Function to reset and start the timer
  const resetAndStartTimer = useCallback(() => {
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current);
    }
    
    autoplayIntervalRef.current = setInterval(() => {
      if (api?.canScrollNext()) {
        api.scrollNext();
      } else {
        api?.scrollTo(0);
      }
    }, 7500); // Changed to 7.5 seconds
  }, [api]);

  // Navigate to a specific slide when a dot is clicked
  const scrollTo = useCallback(
    (index: number) => {
      if (!api) return;
      api.scrollTo(index);
      resetAndStartTimer(); // Reset timer when dot is clicked
    },
    [api, resetAndStartTimer]
  );

  // Auto-slide functionality
  useEffect(() => {
    if (!api) return;
    
    api.on("select", onSelect);
    
    // Start the timer initially
    resetAndStartTimer();

    return () => {
      api.off("select", onSelect);
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
      }
    };
  }, [api, onSelect, resetAndStartTimer]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Our Workshops in Action</h2>

        
        <div className="relative w-full max-w-5xl mx-auto"> 
          <Carousel 
            setApi={setApi} 
            className="w-full" 
            opts={{ loop: true, align: "start" }}
          >
            <CarouselContent>
              {images.map((image, index) => (
            // ADJUST WIDTH ON div className="relative w-full..
            // ADJUST HEIGHT HERE
                <CarouselItem key={index} className="md:basis-1/1 h-[450px]">
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
            <CarouselPrevious className="absolute left-4 lg:left-[-65px] top-1/2 transform -translate-y-1/2" />
            <CarouselNext className="absolute right-4 lg:right-[-65px] top-1/2 transform -translate-y-1/2" />
          </Carousel>
          
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
