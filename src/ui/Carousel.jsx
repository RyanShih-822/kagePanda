import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function Carousel() {
  // const [emblaRef] = useEmblaCarousel({ loop: true }, [
  //   Autoplay({ playOnInit: true, delay: 1500 }),
  // ]);
  // ref={emblaRef}
  return (
    <div className="embla flex-fill">
      <div className="embla__container">
        <div className="embla__slide">
          <img src="/banner1.jpg" alt="banner1" />
        </div>
        <div className="embla__slide">
          <img className="" src="/banner2.jpg" alt="banner2" />
        </div>
        <div className="embla__slide">
          <img src="/banner3.jpg" alt="banner3" />
        </div>
      </div>
    </div>
  );
}
