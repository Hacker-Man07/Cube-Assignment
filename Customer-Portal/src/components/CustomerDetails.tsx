import React from 'react';
import PhotoGrid from './PhotoGrid';
import { useCustomerContext } from '../context/CustomerContext';

const CustomerDetails: React.FC = () => {
  const { selectedCustomer } = useCustomerContext();

  if (!selectedCustomer) {
    return <div className="customer-details placeholder">Select a customer to view details</div>;
  }

  return (
    <div className="customer-details">
      <h2>{selectedCustomer.name} details here</h2>
      <p><strong>Title:</strong> {selectedCustomer.title}</p>
      <p><strong>Address:</strong> {selectedCustomer.address}</p>
      <p>{selectedCustomer.description}</p>
      <PhotoGrid />
    </div>
  );
};

export default React.memo(CustomerDetails);