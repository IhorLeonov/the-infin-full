import Hero from '@/components/organisms/ContactComponents/Hero';
import styles from '../../styles/components/pages/Contact/ContactPage.module.scss';
import BottomComponent from '@/components/BottomComponent';
import LargeImage from '@/components/organisms/LargeImage';

interface ContactPageProps {}

export default async function ContactPage({}: ContactPageProps) {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        <LargeImage
          mobileImage="/images/handphone-mobile.png"
          desctopImage="/images/handphone-desctop.png"
        />
      </main>

      <BottomComponent className={styles.bottomComponent}/>
    </div>
  );
}
