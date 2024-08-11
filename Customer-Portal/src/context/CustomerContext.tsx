import React, { createContext, useState, useContext, useCallback } from 'react';
import { Customer } from '../types';
import { mockCustomers } from '../utils/mockData';

interface CustomerContextType {
  customers: Customer[];
  selectedCustomer: Customer | null;
  setSelectedCustomer: (customer: Customer | null) => void;
  loadMoreCustomers: () => Promise<void>;
}

const CustomerContext = createContext<CustomerContextType | undefined>(undefined);

export const useCustomerContext = () => {
  const context = useContext(CustomerContext);
  if (!context) {
    throw new Error('useCustomerContext must be used within a CustomerProvider');
  }
  return context;
};

export const CustomerProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [customers, setCustomers] = useState<Customer[]>(mockCustomers.slice(0, 20));
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

  const loadMoreCustomers = useCallback(async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    setCustomers(prev => [...prev, ...mockCustomers.slice(prev.length, prev.length + 20)]);
  }, []);

  return (
    <CustomerContext.Provider value={{ customers, selectedCustomer, setSelectedCustomer, loadMoreCustomers }}>
      {children}
    </CustomerContext.Provider>
  );
};