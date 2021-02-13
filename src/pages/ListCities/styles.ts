import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100%;
  margin: 0 auto;

  main {
    padding: 40px 0;

    div:first-child {
      display: flex;
      align-items: center;
      justify-content: space-between;

      h1 {
        color: #123952;
        font-size: 36px;
        line-height: 46px;
        font-weight: 600;
      }

      div {
        width: 274;
        height: 36px;
        border-bottom: 1px solid #dce2e6;

        button {
          height: 100%;
          background: transparent;
          border: none;
          font-family: 'Roboto';
          color: #a0acb2;
          padding-bottom: 10px;
          font-weight: 400;

          &:first-child {
            font-weight: 700;
            color: #123952;
            border-bottom: 2px solid #f25d27;
          }

          svg {
            margin-left: 10px;
          }

          & + button {
            margin-left: 32px;
          }
        }
      }
    }

    section {
      display: grid;
      grid-template-columns: repeat(4, auto);
      justify-content: space-between;
      gap: 32px;
      margin-top: 39px;
    }
  }
`;
