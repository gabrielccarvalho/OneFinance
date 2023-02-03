import React from 'react';
import { Avatar, IconButton } from 'react-native-paper';
import { ProgressChart } from 'react-native-chart-kit';

import { ViewContext } from '../../context/ViewContext';
import { BalanceContext } from '../../context/BalanceContext';

import {
  Container,
  Col,
  Title,
  LinearGradientComponent,
  Scroll,
  SafeArea,
} from './styles';
import Card from '@components/Card';
import { Dimensions } from 'react-native';

const Home = () => {
  const { visible, setVisible } = React.useContext(ViewContext);
  const { balance, debts, savings } = React.useContext(BalanceContext);
  return (
    <>
      <LinearGradientComponent>
        <Col>
          <Avatar.Image
            size={48}
            source={require('@assets/images/avatar.png')}
          />
          <Title>Hi, Gabriel</Title>
        </Col>
        <IconButton
          icon={visible ? 'eye' : 'eye-off'}
          iconColor="white"
          size={24}
          onPress={() => setVisible(!visible)}
        />
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
                  debts / balance,
                  (balance - debts) / balance,
                  savings / balance,
                ],
              }}
              width={Dimensions.get('window').width - 20}
              height={250}
              strokeWidth={16}
              radius={32}
              chartConfig={{
                backgroundGradientFrom: '#121214',
                backgroundGradientTo: '#121214',
                color: (opacity = 1) => `rgba(0, 135, 95, ${opacity})`,
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

/*

Chart Example:
I have 1.000 reais in my account, 500 reais is savings.
I have 100 reais in bills scheduled.
I have 400 reais in liquid money.

this way, the chart will show:
Balance: 1.000
Bills: 100 (10% of 1.000)
Liquid: 400 (40% of 1.000)
Savings: 500 (50% of 1.000)


*/
