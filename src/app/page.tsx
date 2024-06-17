import styles from '../styles/components/organisms/Home/HomePage.module.scss';

import Hero from '@/components/organisms/HomeComponents/Hero';
import WhyChoose from '@/components/organisms/HomeComponents/WhyChoose';
import Business from '@/components/organisms/HomeComponents/Business';
import Individuals from '@/components/organisms/HomeComponents/Individuals';
import Reviews from '@/components/organisms/HomeComponents/Reviews';
import BottomComponent from '@/components/BottomComponent';
import LargeImage from '@/components/organisms/LargeImage';

interface HomePageProps {}

export default async function HomePage({}: HomePageProps) {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        <LargeImage
          sectionName="home-image"
          mobileImage="/images/presentation-mobile.png"
          desctopImage="/images/presentation.png"
          alt="presentation"
          scale
        />
        <WhyChoose />

        <div className={styles.cardList}>
          <Business />
          <Individuals />
          <Reviews />
        </div>
      </main>

      <BottomComponent />
    </div>
  );
}
