import Hero from '@/components/organisms/CapitalismComponents/Hero';
import styles from '../../styles/components/organisms/Capitalism/CapitalismPage.module.scss';
import BottomComponent from '@/components/BottomComponent';
import Description from '@/components/organisms/CapitalismComponents/Description';
import LargeImage from '@/components/organisms/LargeImage';
import WhiteCard from '@/components/organisms/CapitalismComponents/WhiteCard';

interface CapitalismPageProps {}

export default async function CapitalismPage({}: CapitalismPageProps) {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        <Description />
        <LargeImage
          sectionName="capitalism-image"
          mobileImage="/images/employees-mobile.png"
          desctopImage="/images/employees.png"
          alt="employees"
          scale
        />
        <WhiteCard />
      </main>

      <BottomComponent className={styles.bottomComponent} />
    </div>
  );
}
