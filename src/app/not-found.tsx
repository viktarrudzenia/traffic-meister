import Link from 'next/link';

import TmButton from '@/shared/components/TmButton';

import styles from './not-found.module.scss';

export default function NotFound() {
  return (
    <div className={styles.NotFound__wrapper}>
      <h2>Page not found...</h2>
      <p>We&apos;re unable to find the page you&apos;re looking for</p>
      <TmButton>
        <Link className={styles.NotFound__link} href="/">
          Back to Home
        </Link>
      </TmButton>
    </div>
  );
}
