import React, { createContext, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export const BalanceContext = createContext<{
  balance: number;
  debts: number;
  saveBalance: (value: number) => Promise<void>;
  saveDebts: (value: number) => Promise<void>;
  setBalance: React.Dispatch<React.SetStateAction<number>>;
  setDebts: React.Dispatch<React.SetStateAction<number>>;
}>({
  balance: 0,
  debts: 0,
  saveBalance: () => Promise.resolve(),
  saveDebts: () => Promise.resolve(),
  setBalance: () => {},
  setDebts: () => {},
});

const BalanceContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [balance, setBalance] = useState(0);
  const [debts, setDebts] = useState(0);

  React.useEffect(() => {
    const readDebts = async () => {
      try {
        const value = await AsyncStorage.getItem('debts');

        if (value !== null) {
          setDebts(Number(value));
        }
      } catch (e) {
        console.error('Failed to load name.');
      }
    };

    const readBalance = async () => {
      try {
        const value = await AsyncStorage.getItem('balance');

        if (value !== null) {
          setBalance(Number(value));
        }
      } catch (e) {
        console.error('Failed to load name.');
      }
    };

    readBalance();
    readDebts();
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

  return (
    <BalanceContext.Provider
      value={{ balance, debts, saveBalance, saveDebts, setDebts, setBalance }}>
      {children}
    </BalanceContext.Provider>
  );
};

export default BalanceContextProvider;
