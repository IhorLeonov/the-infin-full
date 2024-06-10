'use client';

import React from 'react';
import styles from '../../styles/components/ButtonMenu.module.scss';

import BurgerIcon from '../../../public/icons/burger-menu.svg';
import CloseIcon from '../../../public/icons/close.svg';

import { usePathname } from 'next/navigation';

interface ButtonMenuProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

export default function ButtonMenu({ isOpen, setIsOpen }: ButtonMenuProps) {
  const pathname = usePathname();

  const calculateBorderColor = () => {
    if (isOpen) {
      return '#c1c1c1';
    } else {
      if (pathname === '/contact') {
        return '#ffffff29';
      } else {
        return '#12121229';
      }
    }
  };

  return (
    <button
      type="button"
      className={styles.buttonMenu}
      onClick={setIsOpen}
      style={{
        backgroundColor: isOpen ? '#c1c1c1' : 'transparent',
        borderColor: calculateBorderColor(),
      }}
    >
      {isOpen ? (
        <CloseIcon />
      ) : (
        <BurgerIcon
          style={{ stroke: pathname === '/contact' ? '#fff' : '#121212' }}
        />
      )}
    </button>
  );
}
