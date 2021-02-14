import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  main {
    flex: 1;
    display: flex;
    justify-content: space-between;
  }
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0 0;
  margin-bottom: 16px;

  button {
    width: 174px;
    height: 48px;
    background: ${props => props.theme.colors.blueLow};
    border: none;
    border-radius: 10px;
    font-weight: 500;
    color: ${props => props.theme.colors.blue};
  }
`;

export const TextContainer = styled.div`
  width: 329px;

  h1 {
    margin-top: 138px;
    font-weight: 600;
    font-size: 80px;
    line-height: 74px;
    font-family: ${props => props.theme.fonts.title};
    margin-bottom: 40px;
    color: ${props => props.theme.colors.title};
  }

  p {
    font-size: 20px;
    line-height: 30px;
    color: ${props => props.theme.colors.text};
  }

  button {
    margin-top: 48px;
    width: 100%;
    height: 72px;
    font-size: 18px;
    line-height: 26px;
    border: none;
    border-radius: 10px;
    background: ${props => props.theme.colors.red};
    color: ${props => props.theme.colors.shapeLight};
  }
`;

export const Section = styled.section`
  display: grid;
  grid-template-columns: 304px 304px;
  gap: 32px;

  > div:nth-child(2) {
    margin-top: 76px;
  }

  > div article + article {
    margin-top: 32px;
  }
`;
