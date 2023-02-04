import React from 'react';

import { ViewContext } from '../../context/ViewContext';
import { BalanceContext } from '../../context/BalanceContext';
import { Balance, Container, Title, CardShadow } from './styles';

const Card = () => {
  const { visible } = React.useContext(ViewContext);
  const { balance, debts, savings } = React.useContext(BalanceContext);
  return (
    <>
      <CardShadow>
        <Container>
          <Title>Total Balance:</Title>
          <Balance>
            {visible
              ? balance.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              : '•••••••••••'}
          </Balance>
          <Title>Savings:</Title>
          <Balance>
            {visible
              ? savings.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              : '•••••••••••'}
          </Balance>
          <Title>Bills scheduled:</Title>
          <Balance>
            {visible
              ? debts.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              : '•••••••••••'}
          </Balance>
        </Container>
      </CardShadow>
    </>
  );
};

export default Card;
