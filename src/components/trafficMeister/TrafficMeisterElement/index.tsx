import { ItrafficMeisterElement } from '../constants';

import styles from './index.module.scss';

interface TrafficMeisterElementProps {
  trafficMeisterElement: ItrafficMeisterElement;
}

export default function TrafficMeisterElement({
  trafficMeisterElement,
}: TrafficMeisterElementProps) {
  const { type, brand, colors } = trafficMeisterElement;
  return (
    <div className={styles.TrafficMeisterElement__wrapper}>
      <div>{type}</div>
      <div>{brand}</div>
      <div className={styles.TrafficMeisterElement__colors}>
        <span>Colors: </span>
        <div>
          {colors.map((color) => (
            <div key={color}>{color}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
