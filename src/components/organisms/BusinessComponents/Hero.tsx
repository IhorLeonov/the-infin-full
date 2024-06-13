import React from 'react';
import styles from '../../../styles/components/pages/Business/Hero.module.scss';

import { Section } from '@/components/atoms/Section';
import { Button } from '@/components/atoms/Button';

import Image from 'next/image';
import PlusIcon from '../../../../public/icons/plus.svg';

interface HeroProps {}

export default function Hero({}: HeroProps) {
  return (
    <Section className={styles.hero} type="ghost">
      <div className={styles.topBlock}>
        <div className={styles.leftBlock}>
          <PlusIcon className={styles.plusIcon} />

          <div className={styles.textBox}>
            <p className={styles.text}>
              The INFIN is a finance tool, yet helps with both the bottom line
              and your People Ops. Imagine how much you could improve your
              business if you:
            </p>

            <h2 className={styles.title}>
              Learn the ROI <br className={styles.titleBr} /> of each employee
            </h2>
          </div>
        </div>

        <div className={styles.rightBlock}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/business-hero.jpg"
              width={297}
              height={450}
              priority
              alt="girl"
              className={styles.image}
            />
          </div>

          <Button className={styles.button} appearance="primary">
            Schedule a demo
          </Button>
        </div>
      </div>

      <p className={styles.bottomText}>
        <span className={styles.bottomTextAccent}>
          It’s an open secret of any workplace:
        </span>{' '}
        the team knows who is carrying the team, carrying their weight, and
        being carried.. The INFIN lets employees continuously and dynamically
        observe and rank each other based on job performance and personal
        interaction. And it gets better.
        <br />
        <br />
        The algorithm behind The INFIN automatically adjusts the weight of each
        employee’s “vote” based on how others rank them. As a result, you get an
        accurate picture of which employees are driving your success and of the
        strengths and weaknesses of each employee.
      </p>
    </Section>
  );
}
