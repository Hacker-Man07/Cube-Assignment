import React from 'react';
import CustomerList from './components/CustomerList';
import CustomerDetails from './components/CustomerDetails';
import { CustomerProvider } from './context/CustomerContext';
import './App.css';

const App: React.FC = () => {
  return (
    <CustomerProvider>
      <div className="app">
        <header className="app-header">
          <h1>Customer Portal</h1>
        </header>
        <main className="app-main">
          <CustomerList />
          <CustomerDetails />
        </main>
      </div>
    </CustomerProvider>
  );
};

export default App;