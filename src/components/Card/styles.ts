import styled from 'styled-components/native';
import { TextInput, IconButton } from 'react-native-paper';

export const Container = styled.View<{ editMode: boolean }>`
  height: 205px;
  width: 325px;
  padding: 24px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0 0 15px ${({ theme }) => theme.colors.green_700};
  background-color: ${({ theme, editMode }) =>
    editMode ? theme.colors.gray_400 : theme.colors.gray_600};
  padding-bottom: 12px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font_family.regular};
  font-size: ${({ theme }) => theme.font_size.lg}px;
  padding-bottom: 6px;
`;

export const Balance = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font_family.bold};
  font-size: ${({ theme }) => theme.font_size.xl}px;
  padding-bottom: 24px;
`;

export const Input = styled(TextInput).attrs(({ theme }) => ({
  textColor: theme.colors.white,
  activeUnderlineColor: theme.colors.green_500,
}))`
  background-color: ${({ theme }) => theme.colors.gray_400};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font_size.xl}px;
  font-family: ${({ theme }) => theme.font_family.bold};
  margin-top: -10px;
  margin-bottom: 10px;
`;

export const EditButton = styled(IconButton)`
  position: absolute;
  top: 0;
  right: 0;
`;
