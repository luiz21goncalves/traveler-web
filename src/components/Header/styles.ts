import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 160px;
  background: #ffffff;

  div {
    width: 416px;
    height: 48px;
    background: #f5f8fa;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    border: 1px solid #dce2e6;

    svg {
      margin-right: 16px;
    }

    input {
      background: transparent;
      width: 100%;
      border: none;
    }

    input::placehorder {
      color: #a0acb3;
    }
  }

  button {
    width: 174px;
    height: 48px;
    background: #dde9f0;
    border: none;
    border-radius: 10px;
    font-weight: 500;
    color: #115d8c;
  }
`;
