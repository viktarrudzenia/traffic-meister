'use client';
import { TmButton } from '@/components/shared';
import { useTrafficMeisterStore } from '@/store/trafficMeister/useTrafficMeisterStore';
import { ItrafficMeisterElement } from '../constants';

import styles from './index.module.scss';

interface TrafficMeisterElementProps {
  trafficMeisterElement: ItrafficMeisterElement;
}

export default function TrafficMeisterElement({
  trafficMeisterElement,
}: TrafficMeisterElementProps) {
  const { type, brand, colors, id } = trafficMeisterElement;
  const setSelectedElement = useTrafficMeisterStore((state) => state.setSelectedElement);
  const selectedColorForElement = useTrafficMeisterStore((state) => state.selectedColorForElement);
  const selectedElement = useTrafficMeisterStore((state) => state.selectedElement);

  return (
    <tr
      data-testid="traffic-meister-element"
      className={
        selectedElement?.id === id
          ? styles.TrafficMeisterElement__active
          : styles.TrafficMeisterElement
      }
    >
      <td>{type}</td>
      <td>{brand}</td>
      <td>{selectedColorForElement ? selectedColorForElement : colors.join(', ')}</td>
      <td>
        <TmButton
          onClick={() => setSelectedElement(trafficMeisterElement)}
          additionalClassName={
            selectedElement?.id === id
              ? styles.TrafficMeisterSelectButton__active
              : styles.TrafficMeisterSelectButton
          }
        >
          {selectedElement?.id === id ? 'Selected' : 'Select'}
        </TmButton>
      </td>
    </tr>
  );
}
