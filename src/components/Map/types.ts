import { COFEE_LIST } from "./constants";

export interface HoursType {
  mon: string;
  tue: string;
  wed: string;
  thu: string;
  fri: string;
  sat: string;
  sun: string;
}

export interface PositionType {
  lat: number;
  lng: number;
}

export interface CoffeeType {
  position: PositionType;
  label?: string;
  title?: string;
  address?: string;
  zip?: number;
  hours?: HoursType;
}

export type BrandType = keyof typeof COFEE_LIST;

export type IconUrlType = {
  [key in BrandType]: {
    size: {
      height: number;
      width: number;
    };
    url: string;
  };
};
