import styled from 'styled-components';

export const Container = styled.article`
  width: 100%;
  max-width: 256px;
  height: 266px;
  border-radius: 10px;
  background: #ffffff;

  img {
    width: 100%;
    height: 200px;
    border-radius: 10px 10px 0 0;
  }

  div {
    padding: 25px;

    p {
      font-weight: 600;
      font-size: 23px;
      line-height: 23px;
      color: #123952;
      margin-bottom: 8px;
    }

    span {
      color: #617480;
      font-family: 'Roboto';
    }
  }
`;
