import React, { createContext, useState } from 'react';

export const BalanceContext = createContext<{
  balance: number;
  debts: number;
  setBalance: React.Dispatch<React.SetStateAction<number>>;
  setDebts: React.Dispatch<React.SetStateAction<number>>;
}>({
  balance: 0,
  debts: 0,
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

  return (
    <BalanceContext.Provider value={{ balance, debts, setBalance, setDebts }}>
      {children}
    </BalanceContext.Provider>
  );
};

export default BalanceContextProvider;
