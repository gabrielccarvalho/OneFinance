import React, { createContext, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export const BalanceContext = createContext<{
  balance: number;
  debts: number;
  savings: number;
  saveBalance: (value: number) => Promise<void>;
  saveDebts: (value: number) => Promise<void>;
  saveSavings: (value: number) => Promise<void>;
  setBalance: React.Dispatch<React.SetStateAction<number>>;
  setDebts: React.Dispatch<React.SetStateAction<number>>;
  setSavings: React.Dispatch<React.SetStateAction<number>>;
}>({
  balance: 0,
  debts: 0,
  savings: 0,
  saveBalance: () => Promise.resolve(),
  saveDebts: () => Promise.resolve(),
  saveSavings: () => Promise.resolve(),
  setBalance: () => {},
  setDebts: () => {},
  setSavings: () => {},
});

const BalanceContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [balance, setBalance] = useState(0);
  const [debts, setDebts] = useState(0);
  const [savings, setSavings] = useState(0);

  React.useEffect(() => {
    const readDebts = async () => {
      try {
        const value = await AsyncStorage.getItem('debts');

        if (value !== null) {
          setDebts(Number(value));
        }
      } catch (e) {
        console.error('Failed to load debts.');
      }
    };

    const readBalance = async () => {
      try {
        const value = await AsyncStorage.getItem('balance');

        if (value !== null) {
          setBalance(Number(value));
        }
      } catch (e) {
        console.error('Failed to load balance.');
      }
    };

    const readSavings = async () => {
      try {
        const value = await AsyncStorage.getItem('savings');

        if (value !== null) {
          setSavings(Number(value));
        }
      } catch (e) {
        console.error('Failed to load savings.');
      }
    };

    readBalance();
    readDebts();
    readSavings();
  }, []);

  const saveBalance = async (value: number) => {
    try {
      await AsyncStorage.setItem('balance', value.toString());
    } catch (e) {
      console.error('Failed to save the data to the storage');
    }
  };

  const saveDebts = async (value: number) => {
    try {
      await AsyncStorage.setItem('debts', value.toString());
    } catch (e) {
      console.error('Failed to save the data to the storage');
    }
  };

  const saveSavings = async (value: number) => {
    try {
      await AsyncStorage.setItem('savings', value.toString());
    } catch (e) {
      console.error('Failed to save the data to the storage');
    }
  };

  return (
    <BalanceContext.Provider
      value={{
        balance,
        debts,
        savings,
        saveBalance,
        saveDebts,
        saveSavings,
        setDebts,
        setBalance,
        setSavings,
      }}>
      {children}
    </BalanceContext.Provider>
  );
};

export default BalanceContextProvider;
