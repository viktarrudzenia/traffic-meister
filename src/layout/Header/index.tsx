import Image from 'next/image';
import Link from 'next/link';

import styles from './index.module.scss';

export default function Header() {
  return (
    <header className={styles.Header__wrapper}>
      <div className={styles.Header__logoWrapper}>
        <Link href="/">
          <Image
            className={styles.Header__logoImage}
            src="/app-logo.svg"
            alt="logo"
            width="30"
            height="30"
          />
        </Link>
        <span className={styles.Header__logoText}>Traffic meister</span>
      </div>
    </header>
  );
}
