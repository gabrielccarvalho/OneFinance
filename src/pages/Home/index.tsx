/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Dimensions, Animated } from 'react-native';
import { Avatar, IconButton } from 'react-native-paper';
import { ProgressChart } from 'react-native-chart-kit';

import { ViewContext } from '../../context/ViewContext';
import { BalanceContext } from '../../context/BalanceContext';
import { UserContext } from '../../context/UserContext';

import {
  AccountButton,
  BalanceBox,
  Container,
  Col,
  DropdownSubTitle,
  Name,
  Title,
  LinearGradientComponent,
  Scroll,
  SafeArea,
  Row,
  SubTitle,
} from './styles';

const Home = ({ navigation }: { navigation: any }) => {
  const { visible, setVisible } = React.useContext(ViewContext);
  const { balance, debts, savings } = React.useContext(BalanceContext);
  const { user } = React.useContext(UserContext);
  const [dropdown, setDropdown] = React.useState(false);

  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    if (dropdown) {
      Animated.timing(fadeAnim, {
        toValue: 120,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dropdown]);

  return (
    <>
      <LinearGradientComponent>
        <Col>
          <Avatar.Image size={48} source={{ uri: user.avatar }} />
          <Name>Hi, {user.username}</Name>
        </Col>
        <Row>
          <IconButton
            icon={visible ? 'eye' : 'eye-off'}
            iconColor="white"
            size={20}
            onPress={() => setVisible(!visible)}
            style={{ margin: 0 }}
          />
          <IconButton
            icon="cog"
            iconColor="white"
            size={20}
            onPress={() => {
              navigation.navigate('Profile');
            }}
            style={{ margin: 0 }}
          />
        </Row>
      </LinearGradientComponent>
      <SafeArea>
        <Scroll>
          <BalanceBox>
            <Title>Balance</Title>
            <SubTitle>
              {' '}
              {visible
                ? balance.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })
                : '•••••••••••'}
            </SubTitle>
            <AccountButton
              icon={dropdown ? 'chevron-down' : 'chevron-right'}
              iconColor="white"
              size={25}
              onPress={() => setDropdown(!dropdown)}
            />
          </BalanceBox>
          <Animated.View
            style={{
              height: fadeAnim,
              opacity: fadeAnim,
              alignItems: 'flex-start',
              justifyContent: 'center',
              backgroundColor: '#29292E',
              paddingLeft: 12,
              padding: 0,
              paddingBottom: 8,
              marginHorizontal: 12,
              marginRight: 24,
              borderTopRightRadius: 8,
              borderBottomRightRadius: 8,
              borderLeftWidth: 2,
              borderLeftColor: '#00B37E',
              borderTopColor: '#00B37E',
              overflow: 'hidden',
            }}>
            <Title>Bills Scheduled</Title>
            <DropdownSubTitle debts>
              {' '}
              {visible
                ? debts.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })
                : '•••••••••••'}
            </DropdownSubTitle>
            <Title>Savings</Title>
            <DropdownSubTitle debts={false}>
              {' '}
              {visible
                ? savings.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })
                : '•••••••••••'}
            </DropdownSubTitle>
          </Animated.View>
          <Container style={{ position: 'absolute', top: 230, left: 0 }}>
            {debts > 0 && balance > 0 && savings > 0 && (
              <ProgressChart
                data={{
                  labels: ['Bills', 'Liquid', 'Savings'],
                  colors: ['#F75A68', '#04d898', '#009cf7'],
                  data: [
                    debts / balance,
                    (balance - debts) / balance,
                    savings / balance,
                  ],
                }}
                width={Dimensions.get('window').width - 20}
                height={300}
                strokeWidth={20}
                radius={32}
                chartConfig={{
                  backgroundGradientFrom: '#121214',
                  backgroundGradientTo: '#121214',
                  color: (opacity = 1) => `rgba(0, 80, 100, ${opacity})`,
                  labelColor: (opacity = 1) =>
                    `rgba(255, 255, 255, ${opacity})`,
                  propsForLabels: {
                    fontSize: 10,
                    fontWeight: 'bold',
                  },
                }}
                withCustomBarColorFromData
              />
            )}
          </Container>
        </Scroll>
      </SafeArea>
    </>
  );
};

export default Home;
