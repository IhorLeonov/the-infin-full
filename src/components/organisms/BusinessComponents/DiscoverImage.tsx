import React from 'react';
import styles from '../../../styles/components/pages/Business/DiscoverImage.module.scss';

import LargeImage from '../LargeImage';
import PlayButton from '@/components/molecules/PlayButton';

interface DiscoverImageProps {}

export default function DiscoverImage({}: DiscoverImageProps) {
  return (
    <div className={styles.discoverImage}>
      <LargeImage
        className={styles.imageContainer}
        classNameImage={styles.image}
        sectionName="discover-image"
        mobileImage="/images/discover.png"
        desctopImage="/images/discover.png"
        alt="discover image"
        scale={false}
      />
      <PlayButton className={styles.playButton} />
    </div>
  );
}
