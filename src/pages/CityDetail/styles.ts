import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  main {
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;

    section {
      display: flex;
      margin-top: 80px;
      justify-content: space-between;
      margin-bottom: 120px;
    }
  }
`;

export const Banner = styled.img`
  width: 100%;
  height: 340px;
  object-fit: cover;
  object-position: center;
`;

export const Details = styled.div`
  width: 506px;

  h1 {
    color: #123952;
    font-family: 'Barlow';
    font-weight: 600;
    font-size: 54px;
    line-height: 54px;
    margin-bottom: 40px;
  }

  p {
    color: #123952;
    font-family: 'Heebo';
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 32px;
  }

  span {
    color: #617480;
    font-family: 'Heebo';
    font-size: 16px;
    line-height: 26px;
  }
`;

export const PointsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 160px);
  gap: 16px;
`;

export const TopRated = styled.div`
  h2 {
    color: #123952;
    font-family: 'Barlow';
    font-size: 36px;
    line-height: 46px;
    font-weight: 600;
    margin-bottom: 48px;
  }

  & > div {
    display: grid;
    grid-template-columns: repeat(4, auto);
    gap: 32px;
  }
`;

export const Highlight = styled.div`
  width: 100%;
  height: 286px;
  display: flex;
  margin-top: 80px;
  background: #ffffff;
  border-radius: 16px;

  & > div {
    align-self: center;
    justify-self: center;
    padding: 46px 64px;

    div {
      width: 120px;
      height: 36px;
      background: #f25d27;
      display: flex;
      align-items: center;
      padding: 8px 16px;
      border-radius: 100px;

      svg {
        margin-right: 8px;
      }

      span {
        font-size: 14px;
        font-family: 'Barlow';
        font-weight: 600;
        color: #ffffff;
      }
    }

    h3 {
      margin-top: 32px;
      margin-bottom: 16px;
      font-family: 'Barlow';
      font-weight: 600;
      font-size: 36px;
      line-height: 36px;
      color: #123952;
    }

    p {
      color: #617480;
      font-size: 16px;
      line-height: 26px;
    }
  }

  img {
    border-radius: 0 16px 16px 0;
  }
`;

export const BestPlaces = styled.div`
  margin-top: 80px;

  & > div.heading {
    display: flex;
    justify-content: space-between;

    h3 {
      margin-bottom: 16px;
      font-family: 'Barlow';
      font-weight: 600;
      font-size: 36px;
      line-height: 36px;
      color: #123952;
    }

    nav {
      border-bottom: 1px solid #dce2e5;

      button {
        background: transparent;
        border: none;
        height: 100%;
        color: #617480;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;

        &:first-child {
          color: #123952;
          border-bottom: 2px solid #f25d27;
          font-family: 'Roboto';
          font-weight: 700;
        }

        & + button {
          margin-left: 32px;
        }
      }
    }
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 32px;
  margin-top: 48px;
`;
