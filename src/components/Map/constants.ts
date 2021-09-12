interface CoffeeType {
  position: {
    lat: number;
    lng: number;
  };
  label?: string;
  title?: string;
}

const PEETS_COFFEE: CoffeeType[] = [
  {
    position: { lat: 40.78, lng: -73.935242 },
    label: "Peets",
  },
  {
    position: { lat: 40.79, lng: -73.9 },
    label: "Peets",
  },
];

const COFFEE_BEANS: CoffeeType[] = [
  {
    position: { lat: 40.79, lng: -73.9 },
    label: "Coffee Beans",
  },
  {
    position: { lat: 40.79, lng: -73.89 },
    label: "Coffee Beans",
  },
];

const STARBUCKS: CoffeeType[] = [
  {
    position: { lat: 40.8, lng: -73.935242 },
    label: "Starbucks",
  },
];

export const COFEE_LIST = {
  PEETS_COFFEE,
  COFFEE_BEANS,
  STARBUCKS,
};
