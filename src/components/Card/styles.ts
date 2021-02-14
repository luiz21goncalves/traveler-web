import styled from 'styled-components';

export const Container = styled.article`
  width: 100%;
  max-width: 256px;
  height: 266px;
  border-radius: 10px;
  background: ${props => props.theme.colors.shapeLight};

  img {
    width: 100%;
    height: 175px;
    display: block;
    border-radius: 10px 10px 0 0;
  }

  div {
    padding: 25px;

    strong {
      font-family: ${props => props.theme.fonts.title};
      font-weight: 600;
      font-size: 23px;
      line-height: 23px;
      color: ${props => props.theme.colors.title};
      margin-bottom: 8px;
      display: block;
    }

    span {
      color: ${props => props.theme.colors.text};
      font-family: ${props => props.theme.fonts.secondary};
    }
  }

  &.large {
    max-width: 304px;
    height: 316px;

    img {
      height: 200px;
    }
  }
`;
