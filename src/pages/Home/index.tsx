import React from 'react';
import { Dimensions } from 'react-native';
import { Avatar, IconButton } from 'react-native-paper';
import { ProgressChart } from 'react-native-chart-kit';

import { ViewContext } from '../../context/ViewContext';
import { BalanceContext } from '../../context/BalanceContext';
import { UserContext } from '../../context/UserContext';

import {
  Container,
  Col,
  Title,
  LinearGradientComponent,
  Scroll,
  SafeArea,
  Row,
} from './styles';
import Card from '@components/Card';

const Home = () => {
  const { visible, setVisible } = React.useContext(ViewContext);
  const { balance, debts, savings } = React.useContext(BalanceContext);
  const { user } = React.useContext(UserContext);
  return (
    <>
      <LinearGradientComponent>
        <Col>
          <Avatar.Image size={48} source={{ uri: user.avatar }} />
          <Title>Hi, {user.username}</Title>
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
            onPress={() => {}}
            style={{ margin: 0 }}
          />
        </Row>
      </LinearGradientComponent>
      <SafeArea>
        <Scroll>
          <Container>
            <Card />
            <ProgressChart
              data={{
                labels: ['Bills', 'Liquid', 'Savings'],
                colors: ['#F75A68', '#04d898', '#009cf7'],
                data: [
                  debts / balance || 0,
                  (balance - debts) / balance || 0,
                  savings / balance || 0,
                ],
              }}
              width={Dimensions.get('window').width - 20}
              height={250}
              strokeWidth={16}
              radius={32}
              chartConfig={{
                backgroundGradientFrom: '#121214',
                backgroundGradientTo: '#121214',
                color: (opacity = 1) => `rgba(0, 80, 100, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                propsForLabels: {
                  fontSize: 10,
                  fontWeight: 'bold',
                },
              }}
              withCustomBarColorFromData
            />
          </Container>
        </Scroll>
      </SafeArea>
    </>
  );
};

export default Home;
