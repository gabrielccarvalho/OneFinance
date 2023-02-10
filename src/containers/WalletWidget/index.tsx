import React from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import { IconButton } from 'react-native-paper';

import { UserContext } from '../../context/UserContext';

import {
  Container,
  Wrapper,
  Box,
  Scroll,
  BoxContainer,
  BoxDescription,
  Title,
} from './styles';

const WalletWidget = () => {
  const { user, updateUser, setUser } = React.useContext(UserContext);

  return (
    <>
      <Container>
        <Title>Vaults</Title>
        <Scroll>
          <Wrapper>
            {Object.keys(user.savings).map(key => (
              <BoxContainer key={key}>
                <TouchableOpacity
                  onLongPress={() => {
                    Alert.alert(
                      'Delete Vault',
                      'Are you sure you want to delete this vault?',
                      [
                        {
                          text: 'Cancel',
                          style: 'cancel',
                        },
                        {
                          text: 'Delete',
                          style: 'destructive',
                          onPress: () => {
                            delete user.savings[key];
                            setUser({
                              ...user,
                              savings: user.savings,
                            });
                            updateUser({
                              savings: user.savings,
                            });
                          },
                        },
                      ],
                    );
                  }}
                  onPress={() => {
                    Alert.prompt(
                      'Edit Vault',
                      'Enter your new vault name',
                      text => {
                        if (text) {
                          user.savings[key].name = text;
                          setUser({
                            ...user,
                            savings: user.savings,
                          });
                          updateUser({
                            savings: user.savings,
                          });
                        }
                      },
                      'plain-text',
                      user.savings[key].name,
                    );
                  }}>
                  <Box />
                </TouchableOpacity>
                <BoxDescription>{user.savings[key].name}</BoxDescription>
              </BoxContainer>
            ))}
            <BoxContainer>
              <Box add>
                <IconButton
                  icon="plus"
                  iconColor="white"
                  size={25}
                  onPress={() => {
                    Alert.prompt('Add a new savings', 'Name', text => {
                      if (text) {
                        user.savings[Date.now()] = {
                          name: text,
                          value: 0,
                          image: '',
                        };
                        setUser({
                          ...user,
                          savings: user.savings,
                        });
                        updateUser({
                          savings: user.savings,
                        });
                      }
                    });
                  }}
                />
              </Box>
            </BoxContainer>
          </Wrapper>
        </Scroll>
      </Container>
    </>
  );
};

export default WalletWidget;

/*
  delete user.savings[key];
  setUser({
    ...user,
    savings: user.savings,
  });
  updateUser({
    savings: user.savings,
  });
*/
