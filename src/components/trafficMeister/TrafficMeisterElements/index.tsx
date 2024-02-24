'use client';
import { useTrafficMeisterStore } from '@/store/trafficMeister/useTrafficMeisterStore';
import TrafficMeisterElement from '../TrafficMeisterElement';

import styles from './index.module.scss';

export default function TrafficMeisterElements() {
  const filteredTrafficMeisterData = useTrafficMeisterStore(
    (state) => state.filteredTrafficMeisterData
  );

  return (
    <div className={styles.TrafficMeisterVehicles__wrapper}>
      <div>All selections:</div>
      <div>
        {filteredTrafficMeisterData.map((trafficMeisterElement) => (
          <TrafficMeisterElement
            key={trafficMeisterElement.id}
            trafficMeisterElement={trafficMeisterElement}
          />
        ))}
      </div>
    </div>
  );
}
