import TrafficMeisterForm from '@/components/trafficMeister/TrafficMeisterForm';
import TrafficMeisterSelectedElement from '@/components/trafficMeister/TrafficMeisterSelectedElement';

import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.Home__wrapper}>
      <TrafficMeisterForm />
      <TrafficMeisterSelectedElement />
    </div>
  );
}
