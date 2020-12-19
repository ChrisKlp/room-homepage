import style from './Slider.module.scss';
import { slides } from '../../data';
import { useEffect, useState } from 'react';
import SliderNavigation from './SliderNavigation/SliderNavigation';
import SliderContent from './SliderContent/SliderContent';

const Slider = () => {
  const mediaQuery = window.matchMedia('(max-width: 768px');

  const [slideIndex, setSlideIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(mediaQuery.matches);

  const handleNextSlide = () => {
    setSlideIndex(prev => (prev + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setSlideIndex(prev => (slideIndex === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const handler = e => setIsMobile(e.matches);

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [mediaQuery]);

  const { desktopImage, mobileImage, heading, body } = slides[slideIndex];

  return (
    <section className={style.slider}>
      <div
        className={style.slider__image}
        style={{
          backgroundImage: `url(${isMobile ? mobileImage : desktopImage})`,
        }}
      ></div>
      <SliderNavigation
        prevSlideFn={handlePrevSlide}
        nextSlideFn={handleNextSlide}
      />
      <SliderContent heading={heading} body={body} />
    </section>
  );
};

export default Slider;
