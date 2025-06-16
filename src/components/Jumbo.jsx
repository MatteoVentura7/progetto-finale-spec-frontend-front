import { useEffect } from "react";

export default function Jumbo() {
  let currentSlide = 1;
  const totalSlides = 3;

  function showSlide(index) {
    if (index < 1) {
      currentSlide = totalSlides;
    } else if (index > totalSlides) {
      currentSlide = 1;
    } else {
      currentSlide = index;
    }
    document.getElementById(`btn${currentSlide}`).checked = true;
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      showSlide(currentSlide + 1);
    }, 10000); // 10000 milliseconds = 10 seconds

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="flex justify-center">
      <div className="jumbo">
        <input className="radio-btn" type="radio" name="slider" id="btn1" />
        <input className="radio-btn" type="radio" name="slider" id="btn2" />
        <input className="radio-btn" type="radio" name="slider" id="btn3" />

        <div className="images-container">
          <div className="image relative">
            <picture>
              <source srcSet="/vigna.jpg" media="(max-width: 500px)" />
              <source srcSet="/vigna.jpg" media="(max-width: 950px)" />
              <img
                src="/vigna.jpg"
                alt=""
                className="w-full h-auto object-cover"
              />
            </picture>
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-white text-center">
                <h1 className="text-8xl font-bold">La Vigna</h1>
                <p className="text-lg md:text-xl mt-10">
                  Dove coltiviamo le migliori tipologie di uva al mondo
                </p>
              </div>
            </div>
          </div>
          <div className="image relative">
            <picture>
              <source srcSet="public\cantina.jpg" media="(max-width: 500px)" />
              <source srcSet="public\cantina.jpg" media="(max-width: 950px)" />
              <img
                src="public\cantina.jpg"
                alt=""
                className="w-full h-auto object-cover"
              />
            </picture>
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-white text-center">
                <h1 className="text-8xl font-bold">La Cantina</h1>
                <p className="text-lg md:text-xl mt-10">
                  Dove coltiviamo le migliori tipologie di uva al mondo
                </p>
              </div>
            </div>
          </div>
          <div className="image relative">
            <picture>
              <source srcSet="public\enoteca.jpg" media="(max-width: 500px)" />
              <source srcSet="public\enoteca.jpg" media="(max-width: 950px)" />
              <img
                src="public\enoteca.jpg"
                alt=""
                className="w-full h-auto object-cover"
              />
            </picture>
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-white text-center">
                <h1 className="text-8xl font-bold">L'enoteca</h1>
                <p className="text-lg md:text-xl mt-10">
                  Dove coltiviamo le migliori tipologie di uva al mondo
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="btn-container">
          <label className="btn" htmlFor="btn1"></label>
          <label className="btn" htmlFor="btn2"></label>
          <label className="btn" htmlFor="btn3"></label>
        </div>

        <button className="prev " onClick={prevSlide}>
          &#10094;
        </button>
        <button className="next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
}
