'use client';

import React from 'react';
import styles from '../../styles/components/LargeHero.module.scss';

import { Section } from '@/components/atoms/Section';
import { Button } from '@/components/atoms/Button';

import Image from 'next/image';
import PlusIcon from '../../../public/icons/plus.svg';
import PlusesGrid from '../atoms/PlusesGrid';
import { useRouter } from 'next/navigation';

interface LargeHeroProps {
  pluses?: boolean;
  imageText?: boolean;
  text: string;
  titleFirstRow: string;
  titleSecondRow: string;
  bottomTextAccent: string;
  bottomTextFirst: string;
  bottomTextSecond: string;
  imageSrc: string;
  imageAlt: string;
}

export default function LargeHero({
  pluses,
  imageText,
  text,
  titleFirstRow,
  titleSecondRow,
  bottomTextAccent,
  bottomTextFirst,
  bottomTextSecond,
  imageSrc,
  imageAlt,
}: LargeHeroProps) {
  const router = useRouter();

  return (
    <Section className={styles.hero} type="ghost">
      <div className={styles.topBlock}>
        <div className={styles.leftBlock}>
          <PlusIcon className={styles.plusIcon} />

          <div className={styles.textBox}>
            <p className={styles.text}>{text}</p>

            <h2 className={styles.title}>
              <span>{titleFirstRow}</span>
              <br className={styles.titleBr} />
              <span>{titleSecondRow}</span>
            </h2>
          </div>
        </div>

        <div className={styles.rightBlock}>
          <div className={styles.imageContainer}>
            <Image
              src={imageSrc}
              width={297}
              height={450}
              priority
              alt={imageAlt}
              className={styles.image}
            />
            {imageText && (
              <p className={styles.imageText}>No respect. No respect at all.</p>
            )}
          </div>

          <Button
            className={styles.button}
            appearance="primary"
            onClick={() => router.push('/contact')}
          >
            Schedule a demo
          </Button>
        </div>
      </div>

      <p className={styles.bottomText}>
        <span className={styles.bottomTextAccent}>{bottomTextAccent}</span>
        {bottomTextFirst}
        <br />
        <br />
        {bottomTextSecond}
      </p>

      {pluses && <PlusesGrid className={styles.plusesGrid} />}
    </Section>
  );
}
