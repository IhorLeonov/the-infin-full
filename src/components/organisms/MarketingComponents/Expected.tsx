import React from 'react';
import styles from '../../../styles/components/organisms/Marketing/Expected.module.scss';

import { Section } from '@/components/atoms/Section';
import PlusesGrid from '@/components/atoms/PlusesGrid';

interface ExpectedProps {}

export default function Expected({}: ExpectedProps) {
  return (
    <Section type="filled" className={styles.section}>
      <div className={styles.topBlock}>
        <p className={styles.smallText}>Expected outcomes</p>

        <div className={styles.titleBox}>
          {/* <PlusesGrid className={styles.pluses} /> */}
          <p className={styles.bigText}>
            At the end of the consultancy, you should expect actionable insight
            into improving your organization’s bottom line as well as its return
            on human capital. Specifically, together we can use the data to help
            you with:
          </p>
        </div>
      </div>

      <ul className={styles.list}>
        <li className={styles.listItem}>
          <div className={styles.listNumber}>01</div>
          <p className={styles.listText}>
            Aligning your labor spend with your business goals by investing in
            the right people at the right time.
          </p>
        </li>
        <li className={styles.listItem}>
          <div className={styles.listNumber}>02</div>
          <p className={styles.listText}>
            Better distribution of bonuses and compensation pools with each
            employee having a realistic picture of their value, recognition for
            their contribution, and helpful feedback for improvement.
          </p>
        </li>
        <li className={styles.listItem}>
          <div className={styles.listNumber}>03</div>
          <p className={styles.listText}>
            Improved team dynamics and company culture, with a deeper
            appreciation for each other among team members.
          </p>
        </li>
        <li className={styles.listItem}>
          <div className={styles.listNumber}>04</div>
          <p className={styles.listText}>
            Recognition of true leadership (not just by title) within the
            organization and building around them.
          </p>
        </li>
        <li className={styles.listItem}>
          <div className={styles.listNumber}>05</div>
          <p className={styles.listText}>
            A clear picture of performance trends on all levels.
          </p>
        </li>
      </ul>
    </Section>
  );
}
