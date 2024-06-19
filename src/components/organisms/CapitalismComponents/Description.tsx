import React from 'react';
import styles from '../../../styles/components/organisms/Capitalism/Description.module.scss';

import { Section } from '@/components/atoms/Section';
import { Divider } from '@/components/atoms/Divider';

interface DescriptionProps {}

export default function Description({}: DescriptionProps) {
  return (
    <Section type="ghost" className={styles.section}>
      <Divider className={styles.hrTop} />

      <div className={styles.wrapper}>
        <h3 className={styles.title}>
          In Capitalism 1.0, the owners of productive assets soak up all the
          rewards.
        </h3>

        <div className={styles.textBox}>
          <p className={styles.text}>
            The Elon Musks and Jeff Bezoses of this world have done quite well
            for themselves. But what about their employees?
          </p>
        </div>
      </div>

      <Divider className={styles.hrMid} />

      <div className={styles.wrapper}>
        <h3 className={styles.title}>
          In Capitalism 2.0, those who make the greatest contribution to the
          collective good are those who receive the greatest rewards.
        </h3>

        <div className={styles.textBox}>
          <p className={styles.text}>
            This is not to take away the rewards of the high earners but rather
            to reward the high contributors — at any level.
          </p>

          <p className={styles.smallText}>
            From interns to CEOs, some people contribute more than others. And
            many contribute the same but are rewarded differently for various
            reasons.
          </p>
        </div>
      </div>
    </Section>
  );
}
