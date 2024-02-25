'use client';
import Image from 'next/image';

import { TmButton } from '@/components/shared';
import { useTrafficMeisterStore } from '@/store/trafficMeister/useTrafficMeisterStore';

import styles from './index.module.scss';

export default function TrafficMeisterSelectedElement() {
  const selectedElement = useTrafficMeisterStore((state) => state.selectedElement);
  const setSelectedElement = useTrafficMeisterStore((state) => state.setSelectedElement);
  const selectedColorForElement = useTrafficMeisterStore((state) => state.selectedColorForElement);

  return (
    <aside className={styles.TrafficMeisterSelectedElement__wrapper}>
      {selectedElement ? (
        <div className={styles.TrafficMeisterSelectedElement__selectedWrapper}>
          <div>Type: {selectedElement?.type}</div>
          <div>Brand: {selectedElement?.brand}</div>
          {selectedColorForElement && <div>Selected color: {selectedColorForElement}</div>}
          <div>All available colors: {selectedElement?.colors.join(', ')}</div>
          <Image
            className={styles.TrafficMeisterSelectedElement__image}
            src={selectedElement.img}
            alt="vehicle"
            width="300"
            height="200"
          />
          <div>
            <TmButton
              additionalClassName={styles.TrafficMeisterSelectedElement__closeBtn}
              onClick={() => setSelectedElement(null)}
            >
              Unselect
            </TmButton>
          </div>
        </div>
      ) : (
        <div className={styles.TrafficMeisterSelectedElement__notSelectedWrapper}>
          Please select any Vehicle
        </div>
      )}
    </aside>
  );
}
