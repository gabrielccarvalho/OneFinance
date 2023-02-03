import React from 'react';
import { Avatar, IconButton } from 'react-native-paper';
import { ViewContext } from '../../context/ViewContext';

import {
  Container,
  Col,
  Title,
  LinearGradientComponent,
  Scroll,
} from './styles';
import Card from '@components/Card';

const Home = () => {
  const { visible, setVisible } = React.useContext(ViewContext);
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
      <Scroll>
        <Container>
          <Card />
        </Container>
      </Scroll>
    </>
  );
};

export default Home;
