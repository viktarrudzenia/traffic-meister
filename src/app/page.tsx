import TrafficMeisterForm from '@/components/TrafficMeisterForm';
import TrafficMeisterSelectedElement from '@/components/TrafficMeisterSelectedElement';

import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.Home__wrapper}>
      <TrafficMeisterForm />
      <TrafficMeisterSelectedElement />
    </div>
  );
}
