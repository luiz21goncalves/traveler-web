import styled from 'styled-components';

export const Container = styled.div`
  width: 256px;
  height: 307px;
  background: ${props => props.theme.colors.shapeLight};
  border: 1px solid ${props => props.theme.colors.shapeGray};
  border-radius: 16px;
  position: relative;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 160px;
    object-fit: fill;
    border-radius: 16px 16px 0 0;
  }
`;

export const Label = styled.div`
  width: 56px;
  height: 83px;
  background: ${props => props.theme.colors.orange};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 14px;
  position: absolute;
  top: -16px;
  left: 24px;

  svg {
    fill: ${props => props.theme.colors.shapeLight};
  }

  span {
    font-family: ${props => props.theme.fonts.title};
    font-weight: 600;
    color: ${props => props.theme.colors.background};
    font-size: 20px;
    line-height: 25px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${props => props.theme.colors.shapeGray};

  strong {
    margin: 24px;
    font-family: ${props => props.theme.fonts.title};
    font-size: 20px;
    line-height: 25px;
    color: ${props => props.theme.colors.title};
    font-weight: 600;
  }
`;

export const Footer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;

  span {
    color: ${props => props.theme.colors.text};
    font-family: ${props => props.theme.fonts.title};
    font-size: 16px;
    line-height: 26px;
    font-weight: 500;
  }
`;
