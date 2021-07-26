import React from 'react';
import { Container } from 'native-base';
import { Accordion, Header, SubHeader } from '../../components';

export default function Screen() {
    return (
        <Container>
            <Header />
            <SubHeader />
            <Accordion />
        </Container>
    )
}