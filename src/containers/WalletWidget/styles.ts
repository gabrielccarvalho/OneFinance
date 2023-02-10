import styled from 'styled-components/native';

export const Container = styled.View`
  height: 90px;
  justify-content: center;
  margin-top: 20px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font_family.rubik};
  font-size: ${({ theme }) => theme.font_size.md}px;
  font-weight: 700;
  padding-bottom: 12px;
  padding-left: 12px;
  margin-top: -25px;
`;

export const Scroll = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  padding: 0 10px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  column-gap: 14px;
`;

export const Box = styled.View<{ add?: boolean }>`
  height: 50px;
  width: 50px;
  background-color: ${({ theme }) => theme.colors.gray_400};
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  border: ${({ add, theme }) =>
    add
      ? `1px dashed ${theme.colors.green_500}`
      : `1px solid ${theme.colors.green_500}`};
`;

export const BoxContainer = styled.View`
  align-items: center;
  row-gap: 5px;
`;

export const BoxDescription = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 12px;
  font-family: ${({ theme }) => theme.font_family.regular};
  color: ${({ theme }) => theme.colors.white};
  max-width: 50px;
`;
