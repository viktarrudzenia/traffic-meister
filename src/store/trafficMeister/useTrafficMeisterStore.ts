import { AxiosError } from 'axios';
import { create } from 'zustand';

import { ItrafficMeisterElement } from '@/components/trafficMeister/constants';

interface TrafficMeisterStore {
  isTrafficMeisterDataLoading: boolean;
  trafficMeisterDataError: null | AxiosError;
  trafficMeisterData: ItrafficMeisterElement[];
  filteredTrafficMeisterData: ItrafficMeisterElement[];
  selectedColorForElement: null | string;
  selectedElement: null | ItrafficMeisterElement;
  reset: () => void;
  setTrafficMeisterDataError: (error: null | AxiosError) => void;
  setIsTrafficMeisterDataLoading: (isLoading: boolean) => void;
  setTrafficMeisterData: (newTrafficMeisterData: ItrafficMeisterElement[]) => void;
  setFilteredTrafficMeisterData: (newFilteredTrafficMeisterData: ItrafficMeisterElement[]) => void;
  setSelectedColorForElement: (newColor: null | string) => void;
  setSelectedElement: (newSelectedElement: null | ItrafficMeisterElement) => void;
}

interface TrafficMeisterStoreState {
  isTrafficMeisterDataLoading: boolean;
  trafficMeisterDataError: null | AxiosError;
  trafficMeisterData: ItrafficMeisterElement[];
  filteredTrafficMeisterData: ItrafficMeisterElement[];
  selectedColorForElement: null | string;
  selectedElement: null | ItrafficMeisterElement;
}

const INITIAL_TRAFFIC_MEISTER_STORE: TrafficMeisterStoreState = {
  isTrafficMeisterDataLoading: false,
  trafficMeisterDataError: null,
  trafficMeisterData: [],
  filteredTrafficMeisterData: [],
  selectedColorForElement: null,
  selectedElement: null,
};

export const useTrafficMeisterStore = create<TrafficMeisterStore>()((set) => ({
  isTrafficMeisterDataLoading: false,
  trafficMeisterDataError: null,
  trafficMeisterData: [],
  filteredTrafficMeisterData: [],
  selectedColorForElement: null,
  selectedElement: null,
  reset: () => set(INITIAL_TRAFFIC_MEISTER_STORE),
  setTrafficMeisterData: (newTrafficMeisterData) =>
    set(() => ({ trafficMeisterData: newTrafficMeisterData })),
  setIsTrafficMeisterDataLoading: (isLoading) =>
    set(() => ({ isTrafficMeisterDataLoading: isLoading })),
  setTrafficMeisterDataError: (error) => set(() => ({ trafficMeisterDataError: error })),
  setFilteredTrafficMeisterData: (newFilteredTrafficMeisterData) =>
    set(() => ({ filteredTrafficMeisterData: newFilteredTrafficMeisterData })),
  setSelectedColorForElement: (newColor) => set(() => ({ selectedColorForElement: newColor })),
  setSelectedElement: (newSelectedElement) => set(() => ({ selectedElement: newSelectedElement })),
}));
