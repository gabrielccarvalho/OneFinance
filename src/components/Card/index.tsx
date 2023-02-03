import React from 'react';

import { ViewContext } from '../../context/ViewContext';
import { BalanceContext } from '../../context/BalanceContext';
import { Balance, Container, Title, Input, EditButton } from './styles';

const Card = () => {
  const { visible } = React.useContext(ViewContext);
  const { balance, debts, saveBalance, saveDebts, setBalance, setDebts } =
    React.useContext(BalanceContext);
  const [editMode, setEditMode] = React.useState(false);
  return (
    <>
      <Container editMode={editMode}>
        <Title>Balance:</Title>
        {!editMode ? (
          <Balance>
            {visible
              ? balance.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              : '•••••••••••'}
          </Balance>
        ) : (
          <Input
            value={`${balance}`}
            onChangeText={e => {
              saveBalance(Number(e)); // set the localStorage
              setBalance(Number(e)); // set the state for quick update
            }}
          />
        )}
        <Title>Bills scheduled:</Title>
        {!editMode ? (
          <Balance>
            {visible
              ? debts.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              : '•••••••••••'}
          </Balance>
        ) : (
          <Input
            value={`${debts}`}
            onChangeText={e => {
              saveDebts(Number(e)); // set the localStorage
              setDebts(Number(e)); // set the state for quick update
            }}
          />
        )}
        <EditButton
          icon="cached"
          iconColor="white"
          size={22}
          onPress={() => setEditMode(!editMode)}
        />
      </Container>
    </>
  );
};

export default Card;
