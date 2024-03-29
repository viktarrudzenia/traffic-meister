import Link from 'next/link';

import { TmButton } from '@/components/shared';

import styles from './not-found.module.scss';

export default function NotFound() {
  return (
    <div className={styles.NotFound__wrapper}>
      <h2 data-testid="page-not-found">Page not found...</h2>
      <p>We&apos;re unable to find the page you&apos;re looking for</p>
      <TmButton>
        <Link data-testid="back-to-home" className={styles.NotFound__link} href="/">
          Back to Home
        </Link>
      </TmButton>
    </div>
  );
}
