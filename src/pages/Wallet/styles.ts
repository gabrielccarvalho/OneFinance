import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_700};
  padding: 12px;
  padding-top: 200px;
  align-items: center;
`;

export const BoxesContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  row-gap: 24px;
  column-gap: 12px;
`;

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font_family.bold};
  font-size: ${({ theme }) => theme.font_size.lg}px;
  padding-bottom: 12px;
  font-weight: 700;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font_family.rubik};
  font-size: ${({ theme }) => theme.font_size.xl}px;
  font-weight: 700;
  position: absolute;
  top: 100px;
`;
