import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 18vh 70vh 10vh;
    grid-gap: 1vh;

    font-family: 'ROBOTO', sans-serif;
    font-size: 50px;
    font-weight: bold;

    grid-template-areas: 'HD HD'
                         'MA AS'
                         'FT FT';

`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: DarkSlateGray;
    grid-area: HD;
    border-radius: 10px;
`;

export const Main = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: DimGrey;
    grid-area: MA;
    border-radius: 10px;
`;

export const Aside = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: SlateGrey;
    grid-area: AS;
    border-radius: 10px;
`;

export const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: LightGray;
    grid-area: FT;
    border-radius: 10px;
`;

