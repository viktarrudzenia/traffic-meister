import styles from './index.module.scss';

export default function TmLoader() {
  return (
    <div className={styles.TmLoader__wrapper}>
      <div className={styles.TmLoader__loader} />
    </div>
  );
}
