import React from 'react';
import styles from '../../../styles/components/pages/Business/Directing.module.scss';

import { Section } from '@/components/atoms/Section';

import Image from 'next/image';

interface DirectingProps {}

export default function Directing({}: DirectingProps) {
  return (
    <Section type="filled">
      <Image
        src="/images/directing.png"
        width={537}
        height={687}
        alt="Boys are working with laptops"
      />
      <div className={styles.rightBlock}>
        <p>Better data leads to better decisions.</p>
        <h3>
          Using The INFIN gives you access to the data most leaders dream about.
        </h3>
        <button>See The INFIN for yourself</button>
      </div>
    </Section>
  );
}
