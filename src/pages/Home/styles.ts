import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { IconButton } from 'react-native-paper';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_700};
  padding: 12px;
  padding-top: 0;
  align-items: center;
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font_family.regular};
  font-size: ${({ theme }) => theme.font_size.lg}px;
  padding-top: 24px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font_family.rubik};
  font-size: ${({ theme }) => theme.font_size.lg}px;
  font-weight: 700;
  padding-top: 8px;
`;

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.green_500};
  font-family: ${({ theme }) => theme.font_family.rubik};
  font-size: ${({ theme }) => theme.font_size.lg}px;
  font-weight: 700;
  padding-top: 18px;
`;

export const DropdownSubTitle = styled.Text<{ debts: boolean }>`
  color: ${({ theme, debts }) =>
    debts ? theme.colors.red : theme.colors.blue};
  font-family: ${({ theme }) => theme.font_family.rubik};
  font-size: ${({ theme }) => theme.font_size.lg}px;
  font-weight: 700;
  padding-top: 6px;
`;

export const BalanceBox = styled.View`
  align-items: flex-start;
  justify-content: center;
  padding: 0 12px;
  border-radius: 8px;
  margin-bottom: 12px;
`;

export const DropdownBox = styled.View`
  align-items: flex-start;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray_500};
  padding: 0 12px;
  padding-bottom: 8px;
  margin: 0 24px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-width: 2px;
  border-left-color: ${({ theme }) => theme.colors.green_500};
  margin-bottom: 48px;
`;

export const AccountButton = styled(IconButton)`
  position: absolute;
  top: 0;
  right: 0;
  margin: 0 12px;
`;

export const Col = styled.View`
  padding-top: 12px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  padding-top: 12px;
`;

export const LinearGradientComponent = styled(LinearGradient).attrs(
  ({ theme }) => ({
    colors: [theme.colors.green_700, theme.colors.gray_700],
  }),
)`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  max-height: 200px;
  padding: 12px;
  padding-top: 48px;
`;

export const Scroll = styled.ScrollView`
  padding-top: 30px;
  margin-bottom: -20px;
`;

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_700};
  padding-top: 30px;
`;
