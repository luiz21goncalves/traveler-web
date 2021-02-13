import styled from 'styled-components';

export const Container = styled.div`
  width: 256px;
  height: 307px;
  background: #ffffff;
  border: 1px solid #dce2e5;
  border-radius: 16px;
  position: relative;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 160px;
    object-fit: fill;
    border-radius: 16px 16px 0 0;
  }

  div:last-child {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px;

    span {
      color: #617480;
      font-family: 'Barlow';
      font-size: 16px;
      line-height: 26px;
      font-weight: 500;
    }
  }
`;

export const Label = styled.div`
  width: 56px;
  height: 83px;
  background: #f25d27;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 14px;
  position: absolute;
  top: -16px;
  left: 24px;

  svg {
    fill: #ffffff;
  }

  span {
    font-family: 'Barlow';
    font-weight: 600;
    color: #f5f8fa;
    font-size: 20px;
    line-height: 25px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #dce2e6;

  strong {
    margin: 24px;
    font-family: 'Barlow';
    font-size: 20px;
    line-height: 25px;
    color: #123952;
    font-weight: 600;
  }
`;
