'use client';
import Select from 'react-select';
import { useState, useEffect } from 'react';
import cn from 'classnames';

import { useTrafficMeisterStore } from '@/store/trafficMeister/useTrafficMeisterStore';
import { TmButton } from '@/components/shared';
import { ItrafficMeisterElement, SelectOption } from '../constants';

import styles from './index.module.scss';

enum FILTERS_LOGIC_VARIANTS {
  STRICT_FILTER = 'Strict filter',
  MID_STRICT_FILTER = 'Mid-strict filter',
  NOT_STRICT_FILTER = 'Not strict filter',
}
const filtersLogicVariants = [
  FILTERS_LOGIC_VARIANTS.STRICT_FILTER,
  FILTERS_LOGIC_VARIANTS.MID_STRICT_FILTER,
  FILTERS_LOGIC_VARIANTS.NOT_STRICT_FILTER,
];

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

  const [selectedFiltersLogic, setSelectedFiltersLogic] = useState<FILTERS_LOGIC_VARIANTS>(
    FILTERS_LOGIC_VARIANTS.STRICT_FILTER
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

    const tmData =
      selectedFiltersLogic === FILTERS_LOGIC_VARIANTS.NOT_STRICT_FILTER
        ? trafficMeisterData
        : filteredTrafficMeisterData;

    tmData.forEach((trafficMeisterElement: ItrafficMeisterElement) => {
      vehiclesOptionsCalculated[trafficMeisterElement.type] = {
        value: trafficMeisterElement.type,
        label: trafficMeisterElement.type,
      };
      brandOptionsCalculated[trafficMeisterElement.brand] = {
        value: trafficMeisterElement.brand,
        label: trafficMeisterElement.brand,
      };
      if (
        selectedColorOption &&
        selectedFiltersLogic !== FILTERS_LOGIC_VARIANTS.NOT_STRICT_FILTER
      ) {
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
      <div className={styles.TrafficMeisterFormContent__FiltersHeaderWrapper}>
        <div>Filters logic:</div>
        <div className={styles.TrafficMeisterFormContent__FiltersVariantsWrapper}>
          {filtersLogicVariants.map((filterLogicVariant) => (
            <TmButton
              key={filterLogicVariant}
              additionalClassName={cn(styles.TrafficMeisterFormContent__logicVariantBtn, {
                [styles.TrafficMeisterFormContent__logicVariantBtnActive]:
                  filterLogicVariant === selectedFiltersLogic,
              })}
              onClick={() => {
                if (filterLogicVariant !== selectedFiltersLogic) {
                  setSelectedFiltersLogic(filterLogicVariant);

                  // reset filters to initial state
                  setFilteredTrafficMeisterData(trafficMeisterData);
                  setSelectedVehicleOption(null);
                  setSelectedBrandOption(null);
                  setSelectedColorOption(null);
                }
              }}
            >
              {filterLogicVariant}
            </TmButton>
          ))}
        </div>
      </div>
      <Select
        className="select-filter-type"
        placeholder="Select type"
        name="vehicles"
        options={vehicleOptions}
        isClearable
        value={selectedVehicleOption}
        onChange={(option: SelectOption | null) => {
          setSelectedVehicleOption(option);
        }}
        onMenuOpen={() => {
          if (selectedFiltersLogic === FILTERS_LOGIC_VARIANTS.MID_STRICT_FILTER) {
            const vehiclesOptionsCalculated: { [key: string]: SelectOption } = {};
            trafficMeisterData.forEach((trafficMeisterElement: ItrafficMeisterElement) => {
              if (
                (selectedBrandOption &&
                  selectedBrandOption.value !== trafficMeisterElement.brand) ||
                (selectedColorOption &&
                  !trafficMeisterElement.colors.includes(selectedColorOption.value))
              ) {
                return;
              }
              vehiclesOptionsCalculated[trafficMeisterElement.type] = {
                value: trafficMeisterElement.type,
                label: trafficMeisterElement.type,
              };
            });

            setVehicleOptions(Object.values(vehiclesOptionsCalculated));
          }
        }}
      />
      <Select
        className="select-filter-brand"
        placeholder="Select brand"
        name="brands"
        options={brandOptions}
        isClearable
        value={selectedBrandOption}
        onChange={(option: SelectOption | null) => {
          setSelectedBrandOption(option);
        }}
        onMenuOpen={() => {
          if (selectedFiltersLogic === FILTERS_LOGIC_VARIANTS.MID_STRICT_FILTER) {
            const brandOptionsCalculated: { [key: string]: SelectOption } = {};
            trafficMeisterData.forEach((trafficMeisterElement: ItrafficMeisterElement) => {
              if (
                (selectedVehicleOption &&
                  selectedVehicleOption.value !== trafficMeisterElement.type) ||
                (selectedColorOption &&
                  !trafficMeisterElement.colors.includes(selectedColorOption.value))
              ) {
                return;
              }
              brandOptionsCalculated[trafficMeisterElement.brand] = {
                value: trafficMeisterElement.brand,
                label: trafficMeisterElement.brand,
              };
            });

            setBrandOptions(Object.values(brandOptionsCalculated));
          }
        }}
      />
      <Select
        className="select-filter-color"
        placeholder="Select color"
        name="colors"
        options={colorOptions}
        isClearable
        value={selectedColorOption}
        onChange={(option: SelectOption | null) => {
          setSelectedColorOption(option);
          setSelectedColorForElement(option?.value || null);
        }}
        onMenuOpen={() => {
          if (selectedFiltersLogic === FILTERS_LOGIC_VARIANTS.MID_STRICT_FILTER) {
            const colorOptionsCalculated: { [key: string]: SelectOption } = {};
            trafficMeisterData.forEach((trafficMeisterElement: ItrafficMeisterElement) => {
              if (
                (selectedVehicleOption &&
                  selectedVehicleOption.value !== trafficMeisterElement.type) ||
                (selectedBrandOption && selectedBrandOption.value !== trafficMeisterElement.brand)
              ) {
                return;
              }
              trafficMeisterElement.colors.map((color) => {
                colorOptionsCalculated[color] = {
                  value: color,
                  label: color,
                };
              });
            });

            setColorOptions(Object.values(colorOptionsCalculated));
          }
        }}
      />
    </div>
  );
}
