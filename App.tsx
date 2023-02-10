import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import theme from './src/theme';
import { Analytics, Home, Profile, Stocks, Wallet } from './src/pages';
import ViewContextProvider from './src/context/ViewContext';
import BalanceContextProvider from './src/context/BalanceContext';
import UserContextProvider from './src/context/UserContext';

import Icon from '@components/HomeIcon';

const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <ViewContextProvider>
        <UserContextProvider>
          <BalanceContextProvider>
            <ThemeProvider theme={theme}>
              <NavigationContainer>
                <Tab.Navigator
                  initialRouteName="Home"
                  screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: '#04d898',
                    tabBarInactiveTintColor: '#fff',
                    tabBarStyle: {
                      position: 'absolute',
                      elevation: 0,
                      backgroundColor: '#121214',
                      height: 90,
                    },
                  }}>
                  <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                      tabBarIcon: ({ color }) => Icon(color, 'person'),
                    }}
                  />
                  <Tab.Screen
                    name="Wallet"
                    component={Wallet}
                    options={{
                      tabBarIcon: ({ color }) => Icon(color, 'wallet'),
                    }}
                  />
                  <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                      tabBarIcon: ({ color }) => Icon(color, 'home'),
                    }}
                  />
                  <Tab.Screen
                    name="Analytics"
                    component={Analytics}
                    options={{
                      tabBarIcon: ({ color }) => Icon(color, 'md-bar-chart'),
                    }}
                  />
                  <Tab.Screen
                    name="Stocks"
                    component={Stocks}
                    options={{
                      tabBarIcon: ({ color }) => Icon(color, 'md-trending-up'),
                    }}
                  />
                </Tab.Navigator>
              </NavigationContainer>
            </ThemeProvider>
          </BalanceContextProvider>
        </UserContextProvider>
      </ViewContextProvider>
    </>
  );
}

export default App;
