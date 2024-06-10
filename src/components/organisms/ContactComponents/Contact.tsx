'use client';

import React, { useState } from 'react';
import styles from '../../../styles/components/pages/Contact/Contact.module.scss';

import { Section } from '@/components/atoms/Section';
import { colors } from '@/lib/constants';

interface ContactProps {}

export default function Contact({}: ContactProps) {
  const { accent } = colors;
  const [isActive, setIsActive] = useState<'left' | 'right'>('left');

  const onLeftButtonClick = () => {
    setIsActive('left');
  };
  const onRightButtonClick = () => {
    setIsActive('right');
  };

  return (
    <Section type="filled" className={styles.contact}>
      <div className={styles.description}>
        <div className={styles.switcher}>
          <button
            type="button"
            className={styles.leftButton}
            onClick={onLeftButtonClick}
            style={{
              background: isActive === 'left' ? accent : '#FFFFFF00',
            }}
          >
            Schedule a demo
          </button>
          <button
            type="button"
            className={styles.rightButton}
            onClick={onRightButtonClick}
            style={{
              background: isActive === 'right' ? accent : '#FFFFFF00',
            }}
          >
            Get in touch
          </button>
        </div>
      </div>
      <div className={styles.formWrapper}></div>
    </Section>
  );
}
