import React from 'react';
import { ViewContext } from '../../context/ViewContext';
import { Balance, Container, Title } from './styles';

interface CardProps {
  balance: number;
  debts: number;
}

const Card = ({ balance, debts }: CardProps) => {
  const { visible } = React.useContext(ViewContext);
  return (
    <>
      <Container>
        <Title>Balance:</Title>
        <Balance>
          {visible
            ? balance.toLocaleString('en-US', {
                style: 'currency',
                currency: 'BRL',
              })
            : '************'}
        </Balance>
        <Title>Bills scheduled:</Title>
        <Balance>
          {visible
            ? debts.toLocaleString('en-US', {
                style: 'currency',
                currency: 'BRL',
              })
            : '************'}
        </Balance>
      </Container>
    </>
  );
};

export default Card;
