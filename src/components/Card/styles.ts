import styled from 'styled-components/native';

export const Container = styled.View`
  height: 205px;
  width: 325px;
  padding: 24px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray_600};
  border-radius: 10px;
  box-shadow: 0 0 15px #b026ff;
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
