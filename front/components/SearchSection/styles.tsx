import styled from 'styled-components';

interface ITextColor {
  textColor: string;
}

export const SectionContainer = styled.section`
  padding: 1rem 2rem;
  h1 {
    margin-bottom: 0;
    font-family: 'Black Han Sans', sans-serif;
    font-size: 2.5rem;
    background: ${(props: ITextColor) =>
      props.textColor.length > 5
        ? `linear-gradient(#00f260, #0575e6)`
        : `linear-gradient(#e96443, #904e95)`};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .cards {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(340px, auto));
    grid-template-rows: repeat(auto-fill, minmax(220px, auto));
    grid-auto-flow: dense;
    justify-items: center;
  }
`;
