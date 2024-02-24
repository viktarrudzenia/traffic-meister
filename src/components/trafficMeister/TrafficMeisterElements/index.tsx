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
      <div>
        <table className={styles.TrafficMeisterVehicles__table}>
          <thead>
            <tr>
              <th>Type</th>
              <th>Brand</th>
              <th>Colors</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredTrafficMeisterData.map((trafficMeisterElement) => (
              <TrafficMeisterElement
                key={trafficMeisterElement.id}
                trafficMeisterElement={trafficMeisterElement}
              />
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th scope="row" colSpan={2}>
                Total selections
              </th>
              <td colSpan={2}>{filteredTrafficMeisterData.length}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
