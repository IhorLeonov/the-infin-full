import LargeHero from '@/components/organisms/LargeHero';
import styles from '../../styles/components/pages/Individuals/IndividualsPage.module.scss';
import BottomComponent from '@/components/BottomComponent';

interface IndividualsPageProps {}

export default async function IndividualsPage({}: IndividualsPageProps) {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <LargeHero
          pluses
          imageText
          text="Do you feel like you’re"
          titleFirstRow="Not appreciated"
          titleSecondRow="at work?"
          bottomTextAccent="You’re probably right."
          bottomTextFirst="Bosses don’t see enough of your work to truly appreciate your contributions (let alone bosses of bosses). Your colleagues all smile at you, but is what they say behind your back holding up your career advancement? Or, quite the opposite — you have the respect and admiration of the entire team but it never reaches management (especially when it’s time to give out those year-end bonuses). "
          bottomTextSecond="Isn’t it time to take control of all this? With The INFIN, every employee provides honest and constructive  ⎯  and anonymous  ⎯  feedback to each other in a dynamic way that shows who’s the hero (and who’s the slacker) of the office. You can finally build your reputation with the help of those who know you best. And take it anywhere you work. It’s like a team-reviewed performance resume that actually matters. "
          imageSrc="/images/individuals-hero.png"
          imageAlt="man portrait"
        />
      </main>

      <BottomComponent />
    </div>
  );
}
