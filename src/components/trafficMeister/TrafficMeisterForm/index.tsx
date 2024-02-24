'use client';
import { AxiosError } from 'axios';
import { useEffect } from 'react';

import { axiosInstance } from '@/api';
import { useTrafficMeisterStore } from '@/store/trafficMeister/useTrafficMeisterStore';
import { TmLoader, TmButton } from '@/components/shared';
import TrafficMeisterFormContent from '../TrafficMeisterFormContent';
import TrafficMeisterElements from '../TrafficMeisterElements';
import { DATA_API_URL } from '../constants';

import styles from './index.module.scss';

export default function TrafficMeisterForm() {
  const trafficMeisterDataError = useTrafficMeisterStore((state) => state.trafficMeisterDataError);
  const isTrafficMeisterDataLoading = useTrafficMeisterStore(
    (state) => state.isTrafficMeisterDataLoading
  );
  const setTrafficMeisterDataError = useTrafficMeisterStore(
    (state) => state.setTrafficMeisterDataError
  );
  const setIsTrafficMeisterDataLoading = useTrafficMeisterStore(
    (state) => state.setIsTrafficMeisterDataLoading
  );
  const setTrafficMeisterData = useTrafficMeisterStore((state) => state.setTrafficMeisterData);
  const setFilteredTrafficMeisterData = useTrafficMeisterStore(
    (state) => state.setFilteredTrafficMeisterData
  );

  const fetchTrafficMeisterData = async () => {
    try {
      setIsTrafficMeisterDataLoading(true);
      const trafficMeisterDataResponse = await axiosInstance.get(DATA_API_URL);
      if (trafficMeisterDataResponse.data) {
        setTrafficMeisterData(trafficMeisterDataResponse.data);
        setFilteredTrafficMeisterData(trafficMeisterDataResponse.data);
      }

      setTrafficMeisterDataError(null);
    } catch (err) {
      setTrafficMeisterDataError(err as AxiosError);
    }
    setIsTrafficMeisterDataLoading(false);
  };

  useEffect(() => {
    fetchTrafficMeisterData();
  }, []);

  return (
    <section className={styles.TrafficMeisterForm__wrapper}>
      {trafficMeisterDataError && (
        <div className={styles.TrafficMeisterForm__errorWrapper}>
          <div>An error occurred while loading data, please refetch the data</div>
          <TmButton
            onClick={fetchTrafficMeisterData}
            additionalClassName={styles.TrafficMeisterForm__errorBtn}
          >
            Refetch
          </TmButton>
        </div>
      )}
      <TrafficMeisterFormContent />
      <TrafficMeisterElements />
      {isTrafficMeisterDataLoading && <TmLoader />}
    </section>
  );
}
