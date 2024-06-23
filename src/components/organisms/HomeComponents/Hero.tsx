'use client';

import React from 'react';
import styles from '../../../styles/components/organisms/Home/Hero.module.scss';

import Image from 'next/image';
import PlusesGrid from '../../atoms/PlusesGrid';
import AnimatedText from '../../molecules/AnimatedText';

import { Section } from '../../atoms/Section';
import { Button } from '../../atoms/Button';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

interface HeroProps {}

export default function Hero({}: HeroProps) {
  const router = useRouter();

  return (
    <Section id="home" className={styles.hero} type="ghost">
      <div className={styles.topBlock}>
        <p className={styles.smallText}>
          <span>Web + Mobile app</span>
        </p>

        <motion.div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src="/images/Home/hand-phone.png"
            width={201}
            height={160}
            alt="hand with phone"
            priority
          />
        </motion.div>
      </div>

      <div className={styles.bottomBlock}>
        <AnimatedText
          el="p"
          className={styles.description}
          text="A market-based assessment of your contribution."
          delay={1.5}
          once
        />

        <motion.div
          initial={{ scale: 0.75, y: 100 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.5 }}
          className={styles.titleBox}
        >
          <h2 className={styles.mainTitle}>
            To know your true value, Help others understand theirs.
          </h2>

          <motion.div
            className={styles.plusesGrid}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 3, delay: 1 }}
          >
            {/* <PlusesGrid /> */}
          </motion.div>
        </motion.div>

        <Button
          className={styles.button}
          appearance="primary"
          onClick={() => router.push('/contact', { scroll: false })}
        >
          Schedule a demo
        </Button>
      </div>
    </Section>
  );
}
