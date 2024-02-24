'use client'; // Error components must be Client Components
import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { TmButton } from '@/components/shared';

import styles from './error.module.scss';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
  const router = useRouter();

  return (
    <div className={styles.Error__wrapper}>
      <h2>Something went wrong!</h2>
      <TmButton
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </TmButton>
      or
      <TmButton>
        <Link href="/">Back to Home</Link>
      </TmButton>
      or
      <TmButton onClick={() => router.refresh()}>Refresh the page</TmButton>
    </div>
  );
}
