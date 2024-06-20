import React from 'react';
import styles from '../../../styles/components/organisms/Blog/RelatedPosts.module.scss';

import { Section } from '@/components/atoms/Section';
import { Button } from '@/components/atoms/Button';

import PostCard from '@/components/molecules/PostCard';

export interface IPost {
  imageSrc: string;
  title: string;
  description: string;
}

interface RelatedPostsProps {}

const posts: IPost[] = [
  {
    imageSrc: '/images/Blog/1-post.png',
    title: 'Blog title heading',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  },
  {
    imageSrc: '/images/Blog/2-post.png',
    title: 'Blog title heading',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  },
  {
    imageSrc: '/images/Blog/3-post.png',
    title: 'Blog title heading',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
  },
];

export default function RelatedPosts({}: RelatedPostsProps) {
  return (
    <Section type="filled" className={styles.section}>
      <div className={styles.topBlock}>
        <div className={styles.leftBlock}>
          <h3 className={styles.title}>Related posts</h3>

          <p className={styles.underTitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <Button appearance="ghost" className={styles.button}>
          View All
        </Button>
      </div>

      <ul className={styles.postList}>
        {posts.map((post) => (
          <li key={post.title}>
            <PostCard {...post} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
