import React from 'react';
import styles from '../../../styles/components/organisms/Individuals/Chart.module.scss';

import { Section } from '@/components/atoms/Section';
import { Input } from '@/components/atoms/Input';
import { Button } from '@/components/atoms/Button';
import { Divider } from '@/components/atoms/Divider';

interface ChartProps {}

export default function Chart({}: ChartProps) {
  return (
    <Section type="ghost" className={styles.section}>
      <div className={styles.topBlock}>
        <h3 className={styles.title}>The INFIN gets you seen</h3>
        <p className={styles.description}>
          Few things are more demotivating than not being seen for all the good
          things you do. With The INFIN’s data, your work contributions will be
          transparent, with all the recognition that follows.
          <br />
          <br />
          It’s crazy that the employment reputation system hasn’t changed much
          in over a century: resumes, HR decisions made on limited data…. The
          INFIN puts the power firmly in the hands of the people. It’s in your
          hands.
        </p>
      </div>

      <div className={styles.bottomBlock}>
        <form className={styles.form}>
          <h4 className={styles.formTitle}>Organization Bonus Pool</h4>
          <p className={styles.smallText}>Total organization Bonus Pool</p>

          <Divider className={styles.hr} />

          <label className={styles.label}>
            Enter a dollar amount below
            <Input className={styles.input} />
          </label>

          <Button
            type="submit"
            appearance="ghost"
            className={styles.buttonSubmit}
          >
            Save on your device
          </Button>
        </form>

        <div className={styles.chartBlock}></div>
      </div>
    </Section>
  );
}
