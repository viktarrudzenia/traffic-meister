'use client';
import Select from 'react-select';
import { useState, useEffect } from 'react';

import { useTrafficMeisterStore } from '@/store/trafficMeister/useTrafficMeisterStore';
import { ItrafficMeisterElement, SelectOption } from '../constants';

import styles from './index.module.scss';

export default function TrafficMeisterFormContent() {
  const trafficMeisterData = useTrafficMeisterStore((state) => state.trafficMeisterData);
  const filteredTrafficMeisterData = useTrafficMeisterStore(
    (state) => state.filteredTrafficMeisterData
  );
  const setFilteredTrafficMeisterData = useTrafficMeisterStore(
    (state) => state.setFilteredTrafficMeisterData
  );
  const setSelectedColorForElement = useTrafficMeisterStore(
    (state) => state.setSelectedColorForElement
  );

  const [vehicleOptions, setVehicleOptions] = useState<SelectOption[]>([]);
  const [brandOptions, setBrandOptions] = useState<SelectOption[]>([]);
  const [colorOptions, setColorOptions] = useState<SelectOption[]>([]);

  const [selectedVehicleOption, setSelectedVehicleOption] = useState<SelectOption | null>();
  const [selectedBrandOption, setSelectedBrandOption] = useState<SelectOption | null>();
  const [selectedColorOption, setSelectedColorOption] = useState<SelectOption | null>();

  useEffect(() => {
    const vehiclesOptionsCalculated: { [key: string]: SelectOption } = {};
    const brandOptionsCalculated: { [key: string]: SelectOption } = {};
    const colorOptionsCalculated: { [key: string]: SelectOption } = {};

    filteredTrafficMeisterData.forEach((trafficMeisterElement: ItrafficMeisterElement) => {
      vehiclesOptionsCalculated[trafficMeisterElement.type] = {
        value: trafficMeisterElement.type,
        label: trafficMeisterElement.type,
      };
      brandOptionsCalculated[trafficMeisterElement.brand] = {
        value: trafficMeisterElement.brand,
        label: trafficMeisterElement.brand,
      };
      if (selectedColorOption) {
        colorOptionsCalculated[selectedColorOption.value] = {
          value: selectedColorOption.value,
          label: selectedColorOption.value,
        };
      } else {
        trafficMeisterElement.colors.map((color) => {
          colorOptionsCalculated[color] = {
            value: color,
            label: color,
          };
        });
      }
    });

    setVehicleOptions(Object.values(vehiclesOptionsCalculated));
    setBrandOptions(Object.values(brandOptionsCalculated));
    setColorOptions(Object.values(colorOptionsCalculated));
  }, [filteredTrafficMeisterData]);

  useEffect(() => {
    setFilteredTrafficMeisterData(
      trafficMeisterData.filter((trafficMeisterElement) => {
        if (
          (selectedVehicleOption && selectedVehicleOption.value !== trafficMeisterElement.type) ||
          (selectedBrandOption && selectedBrandOption?.value !== trafficMeisterElement.brand) ||
          (selectedColorOption &&
            !trafficMeisterElement.colors.includes(selectedColorOption?.value || ''))
        ) {
          return false;
        }

        return true;
      })
    );
  }, [selectedVehicleOption, selectedBrandOption, selectedColorOption, trafficMeisterData]);

  return (
    <div className={styles.TrafficMeisterFormContent__wrapper}>
      <Select
        placeholder="Select type"
        name="vehicles"
        options={vehicleOptions}
        isClearable
        onChange={(option: SelectOption | null) => {
          setSelectedVehicleOption(option);
        }}
      />
      <Select
        placeholder="Select brand"
        name="brands"
        options={brandOptions}
        isClearable
        onChange={(option: SelectOption | null) => {
          setSelectedBrandOption(option);
        }}
      />
      <Select
        placeholder="Select color"
        name="colors"
        options={colorOptions}
        isClearable
        onChange={(option: SelectOption | null) => {
          setSelectedColorOption(option);
          setSelectedColorForElement(option?.value || null);
        }}
      />
    </div>
  );
}
