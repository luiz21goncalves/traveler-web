import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  background: ${props => props.theme.colors.shapeLight};
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 35px 0;

  > button {
    min-width: 174px;
    height: 48px;
    background: ${props => props.theme.colors.blueLow};
    border: none;
    border-radius: 10px;
    font-weight: 500;
    color: ${props => props.theme.colors.blue};
    padding: 11px 32px;
  }
`;
