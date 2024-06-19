import Hero from '@/components/organisms/BlogComponents/Hero';
import styles from '../../styles/components/organisms/Blog/BlogPage.module.scss';
import BottomComponent from '@/components/BottomComponent';
import LargeImage from '@/components/organisms/LargeImage';

interface BlogPageProps {}

export default async function BlogPage({}: BlogPageProps) {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        <LargeImage
          sectionName="home-image"
          mobileImage="/images/blog-mobile.png"
          desctopImage="/images/blog.png"
          alt="people laugh"
          scale
        />
      </main>

      <BottomComponent />
    </div>
  );
}
