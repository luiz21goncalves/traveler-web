import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  main {
    margin: 0 auto;
    max-width: 1120px;
    padding: 40px 0;

    section {
      display: grid;
      grid-template-columns: repeat(4, auto);
      justify-content: space-between;
      gap: 32px;
      margin-top: 39px;
    }
  }
`;

export const HeaderContent = styled.div`
  width: 416px;
  height: 48px;
  padding: 14px 16px;
  background: ${props => props.theme.colors.background};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${props => props.theme.colors.shapeGray};
  color: ${props => props.theme.colors.title};

  svg {
    margin-right: 16px;
  }

  input {
    background: transparent;
    width: 100%;
    border: none;
  }

  input::placeholder {
    color: ${props => props.theme.colors.complements};
  }
`;

export const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: ${props => props.theme.colors.title};
    font-family: ${props => props.theme.fonts.title};
    font-size: 36px;
    line-height: 46px;
    font-weight: 600;
  }

  div {
    width: 274;
    height: 36px;
    border-bottom: 1px solid ${props => props.theme.colors.shapeGray};

    button {
      height: 100%;
      background: transparent;
      border: none;
      font-family: ${props => props.theme.fonts.secondary};
      color: ${props => props.theme.colors.complements};
      padding-bottom: 10px;
      font-weight: 400;

      &:first-child {
        font-weight: 700;
        color: ${props => props.theme.colors.title};
        border-bottom: 2px solid ${props => props.theme.colors.orange};
      }

      svg {
        margin-left: 10px;
      }

      & + button {
        margin-left: 32px;
      }
    }
  }
`;
