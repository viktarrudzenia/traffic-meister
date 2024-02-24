'use client';
import useSWR from 'swr';

import { fetcher } from '@/api/fetcher';
import { TmLoader, TmButton } from '@/components/shared';
import TrafficMeisterFormContent from '../TrafficMeisterFormContent';
import TrafficMeisterVehicles from '../TrafficMeisterVehicles';
import { DATA_API_URL } from '../constants';

import styles from './index.module.scss';

export default function TrafficMeisterForm() {
  const {
    error: vehiclesDataError,
    isLoading: isVehiclesDataLoading,
    mutate,
  } = useSWR(DATA_API_URL, fetcher);

  return (
    <section className={styles.TrafficMeisterForm__wrapper}>
      {vehiclesDataError && (
        <div className={styles.TrafficMeisterForm__errorWrapper}>
          <div>An error occurred while loading data, please refetch the data</div>
          <TmButton onClick={mutate} additionalClassName={styles.TrafficMeisterForm__errorBtn}>
            Refetch
          </TmButton>
        </div>
      )}
      <TrafficMeisterFormContent />
      <TrafficMeisterVehicles />
      {isVehiclesDataLoading && <TmLoader />}
    </section>
  );
}
