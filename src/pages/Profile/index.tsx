import React from 'react';
import {
  Dimensions,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import { Avatar } from 'react-native-paper';
import { UserContext } from '../../context/UserContext';
import { BalanceContext } from '../../context/BalanceContext';

import {
  Container,
  Scroll,
  SafeArea,
  Title,
  Col,
  Input,
  Label,
  KeyboardSafeArea,
} from './styles';
import { launchImageLibrary } from 'react-native-image-picker';

const Profile = () => {
  const { user, setUser, updateUser } = React.useContext(UserContext);
  const {
    balance,
    debts,
    savings,
    setBalance,
    setDebts,
    setSavings,
    saveBalance,
    saveDebts,
    saveSavings,
  } = React.useContext(BalanceContext);
  return (
    <SafeArea>
      <Scroll>
        <KeyboardSafeArea
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
              <TouchableOpacity
                onPress={() => {
                  launchImageLibrary(
                    {
                      mediaType: 'photo',
                    },
                    response => {
                      setUser({
                        ...user,
                        avatar: response.assets?.map(
                          asset => asset.uri,
                        )[0] as unknown as string,
                      });
                      updateUser({
                        ...user,
                        avatar: response.assets?.map(asset => asset.uri)[0],
                      });
                    },
                  );
                }}>
                <Avatar.Image
                  size={128}
                  source={{
                    uri: user.avatar,
                  }}
                  style={{ marginBottom: 24 }}
                />
              </TouchableOpacity>
              <Title>User Settings</Title>
              <Col>
                <Label>Username:</Label>
                <Input
                  value={user.username}
                  onChangeText={e => {
                    setUser({
                      ...user,
                      username: e,
                    });
                    updateUser({ username: e });
                  }}
                  style={{
                    width: Dimensions.get('window').width - 48,
                  }}
                />
              </Col>
              <Title>Balance Settings</Title>
              <Col>
                <Label>Total:</Label>
                <Input
                  value={`${balance}`}
                  onChangeText={e => {
                    if (!isNaN(Number(e))) {
                      saveBalance(Number(e)); // set the localStorage
                      setBalance(Number(e)); // set the state for quick update
                    } else {
                      // set to 0 if empty
                      saveBalance(0);
                      setBalance(0);
                    }
                  }}
                  style={{ width: Dimensions.get('window').width - 48 }}
                />
                <Label>Debts:</Label>
                <Input
                  value={`${debts}`}
                  onChangeText={e => {
                    if (!isNaN(Number(e))) {
                      saveDebts(Number(e)); // set the localStorage
                      setDebts(Number(e)); // set the state for quick update
                    } else {
                      // set to 0 if empty
                      saveDebts(0);
                      setDebts(0);
                    }
                  }}
                  style={{ width: Dimensions.get('window').width - 48 }}
                />
                <Label>Savings:</Label>
                <Input
                  value={`${savings}`}
                  onChangeText={e => {
                    if (!isNaN(Number(e))) {
                      saveSavings(Number(e)); // set the localStorage
                      setSavings(Number(e)); // set the state for quick update
                    } else {
                      // set to 0 if empty
                      saveSavings(0);
                      setSavings(0);
                    }
                  }}
                  style={{ width: Dimensions.get('window').width - 48 }}
                />
              </Col>
            </Container>
          </TouchableWithoutFeedback>
        </KeyboardSafeArea>
      </Scroll>
    </SafeArea>
  );
};

export default Profile;
