import React from 'react';
import styles from '../../../styles/components/organisms/Business/DiscoverImage.module.scss';

import PlayButton from '@/components/molecules/PlayButton';
import Image from 'next/image';
import clsx from 'clsx';

interface DiscoverImageProps {}

export default function DiscoverImage({}: DiscoverImageProps) {
  return (
    <div className={styles.discoverImage}>
      <Image
        className={clsx(styles.image, styles.imageDesc)}
        src="/images/Business/discover.png"
        alt="dashboard example"
        width={1416}
        height={760}
      />
      <Image
        className={clsx(styles.image, styles.imageMob)}
        src="/images/Business/discover-mobile.jpg"
        alt="dashboard example"
        width={355}
        height={638}
      />
      <PlayButton className={styles.playButton} />
    </div>
  );
}
