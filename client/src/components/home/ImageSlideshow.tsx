import React, { useCallback, useEffect, useState, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import threepm_group_photo_olneysummerfest2025 from "./slides_images/IMG_3010.JPG";
import asian_kid_tats_flex from "./slides_images/IMG_3023.JPG";
import hand_painting from "./slides_images/IMG_2999.jpeg"
import olney_summerfest_2025_workshop from "./slides_images/IMG_3026.JPG"
import IMG_3031 from "./slides_images/IMG_3031.JPG"
import IMG_3032 from "./slides_images/IMG_3032.JPG"

export default function ImageSlideshow() {
  const [api, setApi] = useState<any>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const images = [
    {
      src: threepm_group_photo_olneysummerfest2025,
      alt: "Group photo for the 3pm shift at Olney Summerfest 2025!",
    },
    {
      src: asian_kid_tats_flex,
      alt: "A happy kid displays his hand paintings!",
    },
    {
      src: hand_painting,
      alt: "Cynthia and Valerie hand painting with some kids!"
    },
    {
      src: olney_summerfest_2025_workshop,
      alt: "Olney Summerfest 2025 Workshop"
    },
    {
      src: IMG_3031
    },
    {
      src: IMG_3032
    },
  ];

  const onSelect = useCallback(() => {
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());
  }, [api]);

  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);

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
    }, 7500);
  }, [api]);

  const scrollTo = useCallback((index: number) => {
    if (!api) return;
    api.scrollTo(index);
    resetAndStartTimer();
  }, [api, resetAndStartTimer]);

  useEffect(() => {
    if (!api) return;

    api.on("select", onSelect);
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
          <Carousel setApi={setApi} className="w-full" opts={{ loop: true, align: "start" }}>
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/1 h-[450px]">
                  <div className="p-1 h-full">
                    <div className="rounded-xl overflow-hidden h-full flex items-center justify-center">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 lg:left-[-80px] top-1/2 transform -translate-y-1/2 h-14 w-14 bg-white shadow-xl rounded-full border-2" />
            <CarouselNext className="absolute right-4 lg:right-[-80px] top-1/2 transform -translate-y-1/2 h-14 w-14 bg-white shadow-xl rounded-full border-2" />
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