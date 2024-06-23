import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from '../../styles/components/molecules/Socials.module.scss';
import Link from 'next/link';

import LinkIcon from '../../../public/icons/link.svg';
import LinkedinIcon from '../../../public/icons/linkedin.svg';
import XIcon from '../../../public/icons/x.svg';
import FacebookIcon from '../../../public/icons/facebook.svg';
import clsx from 'clsx';

interface SocialsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
}

export default function Socials({ className, ...props }: SocialsProps) {
  return (
    <div className={clsx(styles.socials, className)} {...props}>
      <Link
        href="https://the-infin-full.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <LinkIcon className={styles.icon} />
      </Link>

      <Link
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <LinkedinIcon className={styles.icon} />
      </Link>

      <Link
        href="https://x.com/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <XIcon className={styles.icon} />
      </Link>

      <Link
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <FacebookIcon className={styles.fbIcon} />
      </Link>
    </div>
  );
}
