'use client';

import React from 'react';
import styles from '../../../styles/components/pages/Business/Directing.module.scss';

import { Section } from '@/components/atoms/Section';

import Image from 'next/image';

import { Button } from '@/components/atoms/Button';
import { useRouter } from 'next/navigation';

interface DirectingProps {}

export default function Directing({}: DirectingProps) {
  const router = useRouter();

  return (
    <Section type="filled" className={styles.directing}>
      <div className={styles.imageBox}>
        <Image
          className={styles.image}
          src="/images/directing.png"
          width={537}
          height={687}
          alt="Boys are working with laptops"
        />
      </div>

      <div className={styles.rightBlock}>
        <p className={styles.smallText}>
          Better data leads to better decisions.
        </p>

        <h3 className={styles.title}>
          Using The <span className={styles.titleAccent}>INFIN gives</span> you
          access to the data most leaders dream about.
        </h3>

        <Button
          appearance="primary"
          className={styles.button}
          onClick={() => router.push('/individuals')}
        >
          See The INFIN for yourself
        </Button>
      </div>
    </Section>
  );
}
