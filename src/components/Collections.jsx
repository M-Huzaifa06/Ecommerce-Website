import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import CollectionCards from "./CollectionCards";

const Collections = () => {
  const cardsRef = useRef(null);
  const [scrollAmount, setScrollAmount] = useState(1000);

  // Detect screen size
  useEffect(() => {
    const updateScrollAmount = () => {
      if (window.innerWidth < 640) {
        // Mobile
        setScrollAmount(window.innerWidth * 0.7);
      } else {
        // Desktop
        setScrollAmount(1070);
      }
    };

    updateScrollAmount();
    window.addEventListener("resize", updateScrollAmount);

    return () => window.removeEventListener("resize", updateScrollAmount);
  }, []);

  const scrollLeft = () => {
    cardsRef.current?.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    cardsRef.current?.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full py-10 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Collections
          </h1>

          <div className="flex gap-3">
            <ChevronLeft
              className="cursor-pointer hover:scale-110 transition"
              onClick={scrollLeft}
            />
            <ChevronRight
              className="cursor-pointer hover:scale-110 transition"
              onClick={scrollRight}
            />
          </div>
        </div>

        {/* Cards */}
        <div className="w-full overflow-hidden">
          <CollectionCards cardsRef={cardsRef} />
        </div>

      </div>
    </section>
  );
};

export default Collections;
