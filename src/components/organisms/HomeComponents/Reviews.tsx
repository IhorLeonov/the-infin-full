'use client';

import React, { useContext, useEffect, useRef } from 'react';
import styles from '../../../styles/components/organisms/Home/Reviews.module.scss';
import clsx from 'clsx';

import { Section } from '../../atoms/Section';
import { Divider } from '../../atoms/Divider';
import { CardTitle } from '../../molecules/CardTitle';
import { CardProps } from '@/lib/types';
import { motion } from 'framer-motion';
import { AppContext, IAppContext } from '@/context/app.context';

import PlusIcon from '../../../../public/icons/plus.svg';
import ReviewList from '../../molecules/ReviewList';
import useTargetInView from '@/hooks/useTargetInView';

export const reviews = [
  {
    review:
      "“[The INFIN] immediately identified the healthy and high performing teams, comfortable with task conflict, versus the dysfunctional and ineffective teams unable to withstand constructive feedback. Healthy and high performing teams were able to eliminate ambiguity and subjectivity in recognizing and rewarding each other's contributions. The INFIN provided us with a transparent and fair system for acknowledging the hard work and dedication of our colleagues and a way to willingly discuss weaknesses as individuals and as a team.”",
    imageSrc: '/images/Home/carla.png',
    name: 'Carla M.',
    job: 'Business Change Manager at DRGinvest',
  },
  {
    review:
      '“We appreciated its focus on fairness and objective data, it has completely changed how we handle employee evaluations and promotions. It also supports and motivates a true merit-based culture, eliminating the usual office politics. This platform has enabled our leadership team to better recognize the daily efforts of our employees, making sure that recognition and promotion opportunities are justly given. Thank you!”',
    imageSrc: '/images/Home/tyler.png',
    name: 'Tyler H.',
    job: 'CEO of Nuclear Holding Group',
  },
];

interface ReviewsProps extends CardProps {}

export default function Reviews({ className }: ReviewsProps) {
  const targetMiddle = useRef(null);
  const targetBottom = useRef(null);

  const { isInView: isInViewTargetBottom } = useTargetInView(targetBottom);
  const { isInView: isInViewTargetMiddle } = useTargetInView(targetMiddle);

  const { setActiveSection, removeActiveSection } = useContext(
    AppContext,
  ) as IAppContext;

  useEffect(() => {
    isInViewTargetBottom || isInViewTargetMiddle
      ? setActiveSection('reviews')
      : removeActiveSection('reviews');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInViewTargetBottom, isInViewTargetMiddle]);

  return (
    <Section
      className={clsx(styles.section, className)}
      type="filled"
      id="reviews"
    >
      <div className={styles.firstBlock}>
        <CardTitle
          className={styles.cardTitle}
          showTitle={false}
          showNumber={true}
          cardNumber="03"
          cardTitle="Reviews"
        />

        {/* <AnimatedLineText
          className={styles.title}
          el="h3"
          text={['Fair and', 'Objective']}
        /> */}
        <h3 className={styles.title}>
          Fair and, <br /> <span>Objective</span>
        </h3>

        <motion.div
          className={styles.pluses}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          <PlusIcon className={styles.plusIcon} />
          <PlusIcon className={styles.plusIcon} />
          <PlusIcon className={styles.plusIcon} />
        </motion.div>

        <div className={styles.description} ref={targetMiddle}>
          <p>
            The INFIN’s data is an objective, flexible, dynamic, and real-time
            alternative to the limited and speculative information normally
            available to employers and individuals.
          </p>

          <Divider className={styles.hr} />

          <p>
            The old maxim of “knowledge is power” applies here for both
            employers and employees. Don’t let individual performance and
            recognition be lost in the cloud of office politics. The INFIN gives
            a voice to each individual and a fuller picture to the employer.
          </p>
        </div>
      </div>

      <ReviewList reviews={reviews} />
      <div ref={targetBottom} />
    </Section>
  );
}
