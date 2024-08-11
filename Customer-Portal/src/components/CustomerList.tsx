import React, { useCallback } from 'react';
import { FixedSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import CustomerCard from './CustomerCard';
import { useCustomerContext } from '../context/CustomerContext';

const CustomerList: React.FC = () => {
  const { customers, selectedCustomer, setSelectedCustomer, loadMoreCustomers } = useCustomerContext();

  const isItemLoaded = useCallback((index: number) => index < customers.length, [customers.length]);

  const renderRow = useCallback(({ index, style }: { index: number; style: React.CSSProperties }) => {
    if (!isItemLoaded(index)) {
      return <div style={style}>Loading...</div>;
    }
    return (
      <CustomerCard
        customer={customers[index]}
        isSelected={customers[index].id === selectedCustomer?.id}
        onSelect={setSelectedCustomer}
        style={style}
      />
    );
  }, [customers, selectedCustomer, setSelectedCustomer, isItemLoaded]);

  return (
    <div className="customer-list">
    <center><h1>Customers</h1></center>
      <InfiniteLoader
        isItemLoaded={isItemLoaded}
        itemCount={1000}
        loadMoreItems={loadMoreCustomers}
      >
        {({ onItemsRendered, ref }) => (
          <List
            height={window.innerHeight - 180}
            itemCount={1000}
            itemSize={100}
            width="100%"
            onItemsRendered={onItemsRendered}
            ref={ref}
          >
            {renderRow}
          </List>
        )}
      </InfiniteLoader>
    </div>
  );
};

export default React.memo(CustomerList);