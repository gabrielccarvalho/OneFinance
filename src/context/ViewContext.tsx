import React, { createContext, useState } from 'react';

export const ViewContext = createContext<{
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}>({ visible: true, setVisible: () => {} });

const ViewContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [visible, setVisible] = useState(true);

  return (
    <ViewContext.Provider value={{ visible, setVisible }}>
      {children}
    </ViewContext.Provider>
  );
};

export default ViewContextProvider;
