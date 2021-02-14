import styled from 'styled-components';

export const Container = styled.div`
  width: 160px;
  height: 268px;
  background: ${props => props.theme.colors.shapeLight};
  border: 1px solid ${props => props.theme.colors.shapeGray};
  border-radius: 20px;

  div:nth-child(1) {
    display: flex;
    align-items: center;
    height: 104px;
    padding: 32px;
    border-bottom: 1px solid ${props => props.theme.colors.shapeGray};
  }

  div:nth-child(2) {
    height: 164px;
    padding: 32px;

    strong {
      color: ${props => props.theme.colors.title};
      font-size: 40px;
      font-family: ${props => props.theme.fonts.title};
      margin-bottom: 16px;
      display: block;
    }

    span {
      font-size: 16px;
      line-height: 22px;
      color: ${props => props.theme.colors.text};
      line-break: loose;
    }
  }
`;
