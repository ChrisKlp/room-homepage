import { useEffect } from 'react';
import { ReactComponent as IconArrow } from '../../../assets/icon-arrow.svg';
import style from './SliderContent.module.scss';

const SliderContent = ({ heading, body, sliderContentRef }) => {
  useEffect(() => {
    sliderContentRef.current.classList.add(style.fadeIn);
    sliderContentRef.current.addEventListener('animationend', () => {
      sliderContentRef.current.classList.remove(style.fadeIn);
    });
  });

  return (
    <div className={style.sliderContent}>
      <div ref={sliderContentRef} className={style.sliderContent__wrapper}>
        <h1 className={style.sliderContent__heading}>{heading}</h1>
        <p className={style.sliderContent__text}>{body}</p>
        <a href="#" className={style.sliderContent__link}>
          <p className={style.sliderContent__linkText}>Shop Now</p>
          <IconArrow className={style.sliderContent__linkArrow} />
        </a>
      </div>
    </div>
  );
};
export default SliderContent;
