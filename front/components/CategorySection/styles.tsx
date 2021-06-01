import styled from 'styled-components';

interface IBackgroundImg {
  img: string;
}

export const CategorySectionContainer = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${(props: IBackgroundImg) => props.img});
  background-position: center;
  background-size: cover;

  .cards-container {
    padding: 1rem;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, 250px);
    justify-content: space-evenly;
  }
`;

export const CategorySectionHeader = styled.div`
  height: 200px;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3));
  position: relative;

  h1 {
    position: absolute;
    bottom: 50px;
    left: 50px;
    color: #fff;
    font-weight: bold;
    font-size: 3rem;
    font-family: 'Noto Sans KR', sans-serif;
    vertical-align: bottom;
  }
`;
