import styled from 'styled-components/native';
import { TextInput } from 'react-native-paper';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_700};
  align-items: center;
  padding: 12px;
  padding-top: 48px;
`;

export const Scroll = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_700};
`;

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_700};
`;

export const KeyboardSafeArea = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font_family.bold};
  font-size: ${({ theme }) => theme.font_size.xl}px;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font_family.regular};
  font-size: ${({ theme }) => theme.font_size.md}px;
  padding-bottom: 6px;
  padding-top: 12px;
`;

export const Col = styled.View`
  flex: 1;
  align-items: flex-start;
  padding: 12px;
`;

export const Input = styled(TextInput).attrs(({ theme }) => ({
  textColor: theme.colors.white,
  activeUnderlineColor: theme.colors.green_500,
  underlineColor: 'transparent',
}))`
  background-color: ${({ theme }) => theme.colors.gray_500};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font_size.md}px;
  font-family: ${({ theme }) => theme.font_family.bold};
  margin-top: 5px;
  border-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
