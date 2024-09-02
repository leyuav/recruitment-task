import styles from './style';
import {
  Navbar,
  // Billing,
  // Business,
  // CardDeal,
  // Clients,
  // CTA,
  // Footer,
  Hero,
  // Stats,
  // Testimonials,
} from './components';

const App = () => (
  <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.padding} ${styles.flexCenter} h-[79px]`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}></div>
    </div>
  </div>
);

export default App;
