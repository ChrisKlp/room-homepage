import iconAngleLeft from '../../../assets/icon-angle-left.svg';
import iconAngleRight from '../../../assets/icon-angle-right.svg';
import style from './SliderNavigation.module.scss';

const SliderNavigation = ({ prevSlideFn, nextSlideFn }) => (
  <div className={style.sliderNavigation}>
    <button className={style.sliderNavigation__button} onClick={prevSlideFn}>
      <img src={iconAngleLeft} alt="Icon Angle Left" />
    </button>
    <button className={style.sliderNavigation__button} onClick={nextSlideFn}>
      <img src={iconAngleRight} alt="Icon Angle Right" />
    </button>
  </div>
);

export default SliderNavigation;
