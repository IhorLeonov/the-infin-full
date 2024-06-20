import Hero from '@/components/organisms/MarketingComponents/Hero';
import styles from '../../styles/components/organisms/Marketing/MarketingPage.module.scss';
import BottomComponent from '@/components/BottomComponent';
import HeroDescription from '@/components/organisms/MarketingComponents/HeroDescription';
import What from '@/components/organisms/MarketingComponents/What';

interface MarketingPageProps {}

export default async function MarketingPage({}: MarketingPageProps) {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.topBlock}>
          <Hero />
          <HeroDescription />
        </div>

        <div className={styles.bottomBlock}>
          <What />
        </div>
      </main>

      <BottomComponent />
    </div>
  );
}
