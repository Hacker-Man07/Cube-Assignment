import { Customer } from '../types';

const generateMockCustomers = (count: number): Customer[] => {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: `Customer ${index + 1}`,
    title: `Title ${index + 1}`,
    address: `${index + 1} Main St, City, Country`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Customer ${index + 1} details here.`
  }));
};

export const mockCustomers = generateMockCustomers(1000);