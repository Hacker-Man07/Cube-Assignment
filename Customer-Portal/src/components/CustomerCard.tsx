import React from 'react';
import { Customer } from '../types';

interface CustomerCardProps {
  customer: Customer;
  isSelected: boolean;
  onSelect: (customer: Customer) => void;
  style: React.CSSProperties;
}

const CustomerCard: React.FC<CustomerCardProps> = React.memo(({ customer, isSelected, onSelect, style }) => (
  <div
    className={`customer-card ${isSelected ? 'selected' : ''}`}
    onClick={() => onSelect(customer)}
    style={style}
  >
    <h3>{customer.name}</h3>
    <p>{customer.description.slice(0, 100)}...</p>
  </div>
));

export default CustomerCard;