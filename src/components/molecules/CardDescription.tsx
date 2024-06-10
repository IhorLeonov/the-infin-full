import React from 'react';
import styles from '../../styles/components/CardDescription.module.scss';
import clsx from 'clsx';

import { Divider } from '../atoms/Divider';

interface CardDescriptionProps {
  className?: string;
  titleTop: string;
  textMain: string;
  textTopLeft: string;
  textTopRight: string;
  textBottomLeft: string;
  textBottomRight: string;
}

export default function CardDescription({
  titleTop,
  textMain,
  textTopLeft,
  textBottomLeft,
  textTopRight,
  textBottomRight,
  className,
  ...props
}: CardDescriptionProps) {
  return (
    <div className={clsx(styles.cardDescription, className)} {...props}>
      <Divider className={styles.hr} />

      <div className={styles.topBlock}>
        <h4 className={styles.topTitle}>{titleTop}</h4>
        <p className={styles.bigText}>{textMain}</p>
      </div>

      <Divider className={styles.hr} />

      <div className={styles.bottomBlock}>
        <h3 className={styles.bottomTitle}>Use The INFIN’s insights to</h3>

        <p className={styles.bottomTextLeft}>
          <span>{textTopLeft}</span>
          <span>{textBottomLeft}</span>
        </p>

        <p className={styles.bottomTextRight}>
          <span>{textTopRight}</span>
          <span>{textBottomRight}</span>
        </p>
      </div>
    </div>
  );
}
