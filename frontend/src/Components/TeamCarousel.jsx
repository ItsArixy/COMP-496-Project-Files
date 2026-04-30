import React, { useState, useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { PrevButton, NextButton, usePrevNextButtons } from './CarouselArrows';
import { motion } from 'framer-motion';

const TeamCarousel = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const viewportRef = useRef(null);

  // Tracks the selected carousel card
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    requestAnimationFrame(onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  // Allows desktop users to scroll carousel with mouse wheel
  useEffect(() => {
    if (!emblaApi || !viewportRef.current) return;

    let lastScrollTime = 0;
    const SCROLL_COOLDOWN_MS = 500;

    const handleWheel = (event) => {
      if (window.innerWidth < 640) return;
      if (!isHovering) return;

      const now = Date.now();
      if (now - lastScrollTime < SCROLL_COOLDOWN_MS) return;
      lastScrollTime = now;

      event.preventDefault();

      if (event.deltaY > 0) {
        emblaApi.scrollNext();
      } else if (event.deltaY < 0) {
        emblaApi.scrollPrev();
      }
    };

    const container = viewportRef.current;
    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, [emblaApi, isHovering]);

  return (
    <section className="relative w-full group">
      <div className="mb-4 block text-center text-sm font-semibold text-blue-800 md:hidden">
        <h3>Swipe to Scroll</h3>
      </div>

      <div
        className="overflow-hidden"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div
          className="overflow-hidden"
          ref={(el) => {
            emblaRef(el);
            viewportRef.current = el;
          }}
        >
          <div className="flex -ml-4 touch-pan-y sm:-ml-6 lg:-ml-8">
            {slides.map((member) => (
              <div
                key={member.name}
                className="min-w-0 flex-[0_0_80%] pl-4 sm:flex-[0_0_calc(50%-12px)] sm:pl-6 lg:flex-[0_0_calc(33.333%-16px)] lg:pl-8"
              >
                <div className="group relative h-[420px] cursor-grab overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-blue-900/10 transition-all duration-300 hover:shadow-2xl sm:h-[480px] lg:h-[520px]">
                  <div className="absolute inset-0">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/50 to-transparent" />
                  </div>

                  <div className="relative flex h-full flex-col justify-end p-5 sm:p-7">
                    <h3 className="mb-2 text-3xl font-extrabold text-white">
                      {member.name}
                    </h3>

                    <p className="mb-2 font-bold text-yellow-300">
                      {member.role}
                    </p>

                    {member.specialty && (
                      <p className="text-white/90">{member.specialty}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:block">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      </div>

      <div className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:block">
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </section>
  );
};

export default TeamCarousel;