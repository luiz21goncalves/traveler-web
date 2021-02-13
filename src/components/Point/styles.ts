import styled from 'styled-components';

export const Container = styled.div`
  width: 160px;
  height: 268px;
  background: #ffffff;
  border: 1px solid #dce2e6;
  border-radius: 20px;

  div:nth-child(1) {
    display: flex;
    align-items: center;
    height: 104px;
    padding: 32px;
    border-bottom: 1px solid #dce2e6;
  }

  div:nth-child(2) {
    height: 164px;
    padding: 32px;

    strong {
      color: #123952;
      font-size: 40px;
      font-family: 'Barlow';
      margin-bottom: 16px;
      display: block;
    }

    span {
      font-family: 'Heebo';
      font-size: 16px;
      line-height: 22px;
      color: #617480;
      line-break: loose;
    }
  }
`;
