import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px 160px 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  main {
    flex: 1;
    margin-top: 12px;
    display: flex;
    justify-content: space-between;

    div {
      width: 329px;

      h1 {
        margin-top: 138px;
        font-weight: 600;
        font-size: 80px;
        line-height: 74px;
        font-family: 'Barlow';
        margin-bottom: 40px;
        color: #123952;
      }

      p {
        font-size: 20px;
        line-height: 30px;
        color: #617480;
      }

      button {
        margin-top: 48px;
        width: 100%;
        height: 72px;
        font-size: 18px;
        line-height: 26px;
        border: none;
        border-radius: 10px;
        background: #f25d27;
        color: #ffffff;
      }
    }
  }
`;

export const Section = styled.section`
  height: 100%;
  display: grid;
  grid-template-columns: 304px 304px;
  gap: 32px;

  div:last-child article:first-child {
    margin-top: 76px;
  }

  div article + article {
    margin-top: 32px;
  }
`;
