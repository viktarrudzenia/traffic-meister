export const DATA_API_URL =
  'https://raw.githubusercontent.com/viktarrudzenia/traffic-meister/main/src/mockData/data.json';

export interface ItrafficMeisterElement {
  id: number;
  brand: string;
  colors: string[];
  img: string;
  type: string;
}
