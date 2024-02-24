import { ReactNode } from 'react';

import styles from './index.module.scss';

interface TmButtonProps {
  onClick?: () => void;
  children?: ReactNode;
}

export default function TmButton({ children, onClick }: TmButtonProps) {
  return (
    <button type="button" className={styles.Button__button} onClick={onClick}>
      {children}
    </button>
  );
}
