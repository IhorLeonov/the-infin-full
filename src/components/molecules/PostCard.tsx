import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from '../../styles/components/molecules/PostCard.module.scss';
import clsx from 'clsx';

import Image from 'next/image';
import Avatar from './Avatar';

interface PostCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  imageSrc: string;
  title: string;
  description: string;
}

export default function PostCard({
  className,
  imageSrc,
  title,
  description,
  ...props
}: PostCardProps) {
  return (
    <div className={clsx(styles.postCard, className)} {...props}>
      <Image
        className={styles.image}
        src={imageSrc}
        alt={title}
        width={441}
        height={300}
      />

      <h4 className={styles.title}>{title}</h4>
      <p className={styles.description}>{description}</p>

      <Avatar
        className={styles.avatar}
        imageSrc="/images/olivia.png"
        position="Publisher"
        name="Olivia Johnson"
      />
    </div>
  );
}
