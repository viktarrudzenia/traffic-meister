import { ReactNode } from 'react';
import cn from 'classnames';

import styles from './index.module.scss';

interface TmButtonProps {
  onClick?: () => void;
  children?: ReactNode;
  additionalClassName?: string;
}

export default function TmButton({ children, onClick, additionalClassName }: TmButtonProps) {
  return (
    <button
      type="button"
      className={cn(styles.TmButton__button, additionalClassName)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
