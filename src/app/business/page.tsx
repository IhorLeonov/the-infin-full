import Hero from '@/components/organisms/BusinessComponents/Hero';
import styles from '../../styles/components/pages/Business/BusinessPage.module.scss';
import BottomComponent from '@/components/BottomComponent';
import Benefits from '@/components/organisms/Benefits';
import Discover from '@/components/organisms/BusinessComponents/Discover';
import DiscoverImage from '@/components/organisms/BusinessComponents/DiscoverImage';
import Directing from '@/components/organisms/BusinessComponents/Directing';

interface BusinessPageProps {}

export default async function BusinessPage({}: BusinessPageProps) {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.topBlock}>
          <Hero />
          <Benefits />
        </div>

        <div className={styles.bottomBlock}>
          <Discover />
          <DiscoverImage />
          <Directing />
        </div>
      </main>

      <BottomComponent />
    </div>
  );
}
