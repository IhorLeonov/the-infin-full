import React from 'react';
import styles from '../../../styles/components/organisms/Marketing/Hero.module.scss';

import { Section } from '@/components/atoms/Section';
import { Button } from '@/components/atoms/Button';

import Image from 'next/image';

interface HeroProps {}

export default function Hero({}: HeroProps) {
  return (
    <Section type="ghost" className={styles.section}>
      <div className={styles.topBlock}>
        <div className={styles.titleBox}>
          <div className={styles.tag}>Marketing Efforts</div>
          <h2 className={styles.title}>
            <span>Unlock Your Organization&apos;s Full Potential with </span>The
            INFIN
          </h2>
        </div>

        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src="/images/Marketing/hero-marketing.png"
            alt="The infin dashboard"
            width={573}
            height={370}
          />
        </div>
      </div>

      <div className={styles.bottomBlock}>
        <Button appearance="primary" className={styles.button}>
          Let&apos;s jump on a call
        </Button>

        <div className={styles.textBox}>
          <p className={styles.text}>
            Which employees have the best (and worst) ROI? Is compensation
            actually aligned with business outcomes?
          </p>

          <p className={styles.bottomText}>
            As it happens, your team has the answers. By using The INFIN you can
            get honest and accurate insights, turning them into concrete and
            actionable data points. The results will be two-fold: a clear
            picture of individual value within your organization, and granular
            data of your ROI on labor spend.
          </p>
        </div>
      </div>
    </Section>
  );
}
