import styles from './index.module.scss';

export default function ContentWrapper({ children }: { children: React.ReactNode }) {
  return <main className={styles.ContentWrapper__wrapper}>{children}</main>;
}
