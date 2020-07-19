import React from 'react';

import { Container, Header, Main, Aside, Footer } from './styles';

export default function Layout() {
    return (
        <Container>
            <Header>
                <span>HEADER</span>
            </Header>
            <Main>
                <span>MAIN</span>
            </Main>
            <Aside>
                <span>ASIDE</span>
            </Aside>
            <Footer>
                <span>FOOTER</span>
            </Footer>
        </Container>
    )
}