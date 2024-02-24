import TmErrorBoundary from '@/shared/components/TmErrorBoundary';

import styles from './index.module.scss';

export default function ContentWrapper({ children }: { children: React.ReactNode }) {
  return (
    <main className={styles.ContentWrapper__wrapper}>
      <TmErrorBoundary errorTextDescription="Oops, some error occurred" errorBtnText="Reload page">
        {children}
      </TmErrorBoundary>
    </main>
  );
}
