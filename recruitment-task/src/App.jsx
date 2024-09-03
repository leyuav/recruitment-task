import styles from './style';
import { Navbar, Hero, GalleryHeaders, PhotoGallery, SEO, Footer } from './components';

const App = () => (
  <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.flexCenter} h-[79px]`}>
      <div className={`${styles.boxWidth} z-[10]`}>
        <Navbar />
      </div>
    </div>

    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <GalleryHeaders />
      </div>
    </div>

    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <PhotoGallery />
      </div>
    </div>

    <div className={`${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <SEO />
      </div>
    </div>

    {/* <div className={`${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div> */}
  </div>
);

export default App;
