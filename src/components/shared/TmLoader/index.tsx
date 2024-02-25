import styles from './index.module.scss';

export default function TmLoader() {
  return (
    <div data-testid="loader" className={styles.TmLoader__wrapper}>
      <div className={styles.TmLoader__loader} />
    </div>
  );
}
