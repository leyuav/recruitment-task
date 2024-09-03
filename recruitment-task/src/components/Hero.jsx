import styles from '../style';
import { carHero, waves } from '../assets';

const Hero = () => (
  <section
    id='home'
    className='flex md:flex-row flex-col relative'
  >
    <div
      className={`flex-1 ${styles.flexStart} ${styles.paddingX} flex-col pt-[120px] pb-[362px] w-[80%]`}
    >
      <h1 className={`${styles.heading} mb-[32px]`}>
        Sprzedajemy samochody <br /> z Europy
      </h1>

      <p className={`${styles.paragraph} max-w-[470px] mb-[48px]`}>
        Kup komfortowy pojazd, aby każda podróż <br /> była wyjątkowym przeżyciem.
      </p>

      <div className='flex justify-end items-center'>
        <button className={`${styles.button} w-[148px] h-[47px] mr-[24px] text-primary bg-accent`}>
          Zobacz zdjęcia
        </button>

        <button
          className={`${styles.button} w-[160px] h-[47px] bg-primary text-accent border-solid border-[1px] border-accent`}
        >
          Zadzwoń do nas
        </button>
      </div>
    </div>

    <div className={`flex-1 flex flex-col ${styles.flexCenter} absolute bottom-[92.63px] right-0`}>
      <img
        src={waves}
        alt='graphic design'
        className='w-[668.05px] md:block hidden h-[659px] absolute top-[-500px] right-[71.95px] z-[4]'
      />

      <img
        src={carHero}
        alt='cars'
        className='w-[1064px] h-[404.37] object-contain z-[5]'
      />
    </div>
  </section>
);

export default Hero;
