import React, { createContext, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export const UserContext = createContext<{
  user: { avatar: string; username: string };
  updateUser: (value: {}) => Promise<void>;
  setUser: React.Dispatch<
    React.SetStateAction<{ avatar: string; username: string }>
  >;
}>({
  user: {
    avatar: 'https://www.gravatar.com/avatar/HASH',
    username: 'User',
  },
  setUser: () => {},
  updateUser: () => Promise.resolve(),
});

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState({
    avatar: 'https://www.gravatar.com/avatar/HASH',
    username: 'User',
  });

  React.useEffect(() => {
    const readUser = async () => {
      try {
        const value = await AsyncStorage.getItem('user');
        if (value !== null) {
          setUser(JSON.parse(value));
        }
      } catch (e) {
        console.error('Failed to load debts.');
      }
    };

    readUser();
  }, []);

  const updateUser = async (value: {}) => {
    try {
      await AsyncStorage.setItem(
        'user',
        JSON.stringify({
          ...user,
          ...value,
        }),
      );
    } catch (e) {
      console.error('Failed to save user.');
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
