import styles from './style';
import {
  Navbar,
  Hero,
  // Billing,
  // Business,
  // CardDeal,
  // Clients,
  // CTA,
  // Footer,
  // Stats,
  // Testimonials,
} from './components';

const App = () => (
  <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.flexCenter} h-[79px]`}>
      <div className={`${styles.boxWidth} z-10`}>
        <Navbar />
      </div>
    </div>

    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    {/* <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}></div>
    </div> */}
  </div>
);

export default App;
