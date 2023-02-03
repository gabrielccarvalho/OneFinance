import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray_600};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font_family.regular};
  font-size: ${({ theme }) => theme.font_size.lg}px;
`;

export const LoadIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  size: 'large',
  color: theme.colors.green_500,
}))``;
