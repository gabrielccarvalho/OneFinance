import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_700};
  padding: 12px;
  padding-top: 0;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font_family.regular};
  font-size: ${({ theme }) => theme.font_size.lg}px;
  padding-top: 24px;
`;

export const Col = styled.View`
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
