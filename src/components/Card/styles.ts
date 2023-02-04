import styled from 'styled-components/native';
import { TextInput } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs(({ theme }) => ({
  colors: [
    theme.colors.gray_700,
    theme.colors.gray_600,
    theme.colors.green_800,
    theme.colors.green_700,
  ],
  start: { x: 0, y: 0 },
}))`
  height: 205px;
  width: 325px;
  padding: 24px;
  padding-top: 12px;
  justify-content: center;
  border-radius: 10px;
  padding-bottom: 0px;
`;

export const CardShadow = styled.View`
  box-shadow: 0 0 15px ${({ theme }) => theme.colors.green_700};
  border-radius: 10px;
  height: 205px;
  width: 325px;
  margin-bottom: 32px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font_family.regular};
  font-size: ${({ theme }) => theme.font_size.md}px;
  padding-bottom: 6px;
`;

export const Balance = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font_family.bold};
  font-size: ${({ theme }) => theme.font_size.md}px;
  padding-bottom: 14px;
`;

export const Input = styled(TextInput).attrs(({ theme }) => ({
  textColor: theme.colors.white,
  activeUnderlineColor: theme.colors.green_500,
  underlineColor: 'transparent',
}))`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font_size.md}px;
  font-family: ${({ theme }) => theme.font_family.bold};
  margin-top: -10px;
  margin-bottom: 10px;
`;
