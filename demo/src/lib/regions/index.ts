import { find } from 'lodash';
import { Provider, Region, Location } from '@/types/regions';

const regions: Region[] = [
  {
    id: 'us-west',
    name: 'US West',
    flagId: 'usa',
  },
  {
    id: 'us-east',
    name: 'US East',
    flagId: 'usa',
  },
  {
    id: 'europe-west',
    name: 'Europe West',
    flagId: 'uk',
  },
  {
    id: 'brazil',
    name: 'Brazil',
    flagId: 'brazil',
  },
  {
    id: 'australia',
    name: 'Australia',
    flagId: 'australia',
  },
  {
    id: 'south-africa',
    name: 'South Africa',
    flagId: 'south-africa',
  },
  {
    id: 'india',
    name: 'India',
    flagId: 'india',
  },
  {
    id: 'japan',
    name: 'Japan',
    flagId: 'japan',
  },
];

export const locations: Location[] = [
  {
    id: 'california',
    name: 'California',
    country: 'US',
    countryLong: 'United States',
  },
  {
    id: 'london',
    name: 'London',
    country: 'UK',
    countryLong: 'United Kingdom',
  },
  {
    id: 'virginia',
    name: 'Virginia',
    country: 'US',
    countryLong: 'United States',
  },
  {
    id: 'new-york',
    name: 'New York',
    country: 'US',
    countryLong: 'United States',
  },
  {
    id: 'sao-paulo',
    name: 'São Paulo',
    country: 'Brazil',
    countryLong: 'Brazil',
  },
  {
    id: 'cape-town',
    name: 'Cape Town',
    country: 'South Africa',
    countryLong: 'South Africa',
  },
  {
    id: 'mumbai',
    name: 'Mumbai',
    country: 'India',
    countryLong: 'India',
  },
  {
    id: 'sydney',
    name: 'Sydney',
    country: 'Australia',
    countryLong: 'Australia',
  },
  {
    id: 'tokyo',
    name: 'Tokyo',
    country: 'Japan',
    countryLong: 'Japan',
  },
];

export const providers: Provider[] = [
  {
    id: 'aws',
    name: 'Amazon Web Services',
  },
  {
    id: 'az',
    name: 'Microsoft Azure',
  },
  {
    id: 'do',
    name: 'DigitalOcean',
  },
  {
    id: 'gcp',
    name: 'Google Cloud',
  },
];

export const getRegion = (regionId: string): Region | null => {
  const region = find(regions, { id: regionId });

  return region || null;
};

export const getLocation = (locationId: string): Location | null => {
  const location = find(locations, { id: locationId });

  return location || null;
};

export const getProvider = (providerId: string): Provider | null => {
  const provider = find(providers, { id: providerId });

  return provider || null;
};
