import styles from './index.module.scss';

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  return <div className={styles.AppWrapper__wrapper}>{children}</div>;
}
