import Hero from '@/components/organisms/MarketingComponents/Hero';
import styles from '../../styles/components/organisms/Marketing/MarketingPage.module.scss';
import BottomComponent from '@/components/BottomComponent';

interface MarketingPageProps {}

export default async function MarketingPage({}: MarketingPageProps) {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.topBlock}>
          <Hero />
        </div>

        <div className={styles.bottomBlock}></div>
      </main>

      <BottomComponent />
    </div>
  );
}
