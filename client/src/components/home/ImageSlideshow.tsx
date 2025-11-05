import React, { useCallback, useEffect, useState, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const imageModules = import.meta.glob<{ default: string }>('./slides_images/*.{jpg,jpeg,JPG,JPEG,png,PNG}', { 
  eager: true 
});

/*
const imageAltTexts: Record<string, string> = {
  'IMG_3010.JPG': 'Group photo for the 3pm shift at Olney Summerfest 2025!',
  'IMG_3023.JPG': 'A happy kid displays his hand paintings!',
  'IMG_2999.jpeg': 'Cynthia and Valerie hand painting with some kids!',
  'IMG_3026.JPG': 'Olney Summerfest 2025 Workshop',
  'IMG_3031.JPG': 'SparkArts workshop in action',
  'IMG_3032.JPG': 'Students creating art together',
  'IMG_3632.jpg': 'Creative art activities',
  'IMG_3635.jpg': 'Hands-on learning experience',
};
*/

export default function ImageSlideshow() {
  const [api, setApi] = useState<any>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const images = Object.entries(imageModules)
    .map(([path, module]) => {
      const filename = path.split('/').pop() || '';
      return {
        src: module.default,
        //alt: imageAltTexts[filename] || 'SparkArts workshop photo',
        alt: "SparkArts working ",
      };
    })
    .sort((a, b) => {
      const getFilename = (obj: typeof a) => obj.alt;
      return getFilename(a).localeCompare(getFilename(b));
    });

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