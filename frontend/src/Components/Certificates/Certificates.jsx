import React, { useCallback, useEffect, useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import { CERTIFICATES } from "../../assets/assets";
import useEmblaCarousel from "embla-carousel-react";
import { IoArrowForward } from "react-icons/io5";
import CertificateCard from "../CertificateCard/CertificateCard";

const Certificates = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateScrollButtons = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", updateScrollButtons);
    updateScrollButtons();
  }, [emblaApi, updateScrollButtons]);

  return (
    <section
      id="projects"
      className="
    bg-background"
    >
      <div className="container mx-auto px-8 md:px-10 py-10">
        <div className="w-full lg:w-[60vw] mx-auto">
          <h4 className="heading">CERTIFICATES</h4>
          <hr className="hr-line" />
          <p className="text-sm text-center mt-4 leading-6">
            These certifications validate my expertise across various
            technologies, highlighting my commitment to clean code, performance,
            and seamless user experience.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            {" "}
            <div className="flex pt-14 pb-8">
              {CERTIFICATES.map((project) => (
                <div
                  key={project.id}
                  className="min-w-[100%] sm:min-w-[50%] lg:min-w-[40%]"
                >
                  <CertificateCard
                    key={project.id}
                    imgUrl={project.image}
                    title={project.title}
                    tags={project.provider}
                    description={project.description}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Left Navigation Button */}
          {/* Left Navigation Button */}
          <button
            className={`arrow-btn absolute top-1/2 -left-7 transform -translate-y-1/2 ${
              !canScrollPrev ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => emblaApi && emblaApi.scrollPrev()}
            disabled={!canScrollPrev}
          >
            <IoArrowForward className="rotate-180" />
          </button>

          {/* Right Navigation Button */}
          <button
            className={`arrow-btn absolute top-1/2 -right-7 transform -translate-y-1/2  ${
              !canScrollNext ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => emblaApi && emblaApi.scrollNext()}
            disabled={!canScrollNext}
          >
            <IoArrowForward />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
