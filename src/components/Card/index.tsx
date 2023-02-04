import React from 'react';

import { ViewContext } from '../../context/ViewContext';
import { BalanceContext } from '../../context/BalanceContext';
import {
  Balance,
  Container,
  Title,
  Input,
  EditButton,
  CardShadow,
} from './styles';

const Card = () => {
  const { visible } = React.useContext(ViewContext);
  const {
    balance,
    debts,
    savings,
    saveBalance,
    saveDebts,
    saveSavings,
    setBalance,
    setDebts,
    setSavings,
  } = React.useContext(BalanceContext);
  const [editMode, setEditMode] = React.useState(false);
  return (
    <>
      <CardShadow editMode={editMode}>
        <Container editMode={editMode}>
          <Title>Total Balance:</Title>
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
          <Title>Savings:</Title>
          {!editMode ? (
            <Balance>
              {visible
                ? savings.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })
                : '•••••••••••'}
            </Balance>
          ) : (
            <Input
              value={`${savings}`}
              onChangeText={e => {
                saveSavings(Number(e)); // set the localStorage
                setSavings(Number(e)); // set the state for quick update
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
      </CardShadow>
    </>
  );
};

export default Card;
