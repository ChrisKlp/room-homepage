import style from './About.module.scss';
import { about } from '../../data';

const About = () => {
  return (
    <section className={style.about}>
      <div className={`${style.about__img} ${style.about__imgFirst}`}></div>
      <div className={style.about__content}>
        <h2 className={style.about__heading}>{about.heading}</h2>
        <p className={style.about__text}>{about.body}</p>
      </div>
      <div className={`${style.about__img} ${style.about__imgSecond}`}></div>
    </section>
  );
};

export default About;
