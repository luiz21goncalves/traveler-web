import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  background: #ffffff;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 35px 0;

  div {
    width: 416px;
    height: 48px;
    background: #f5f8fa;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
