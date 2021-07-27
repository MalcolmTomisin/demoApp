import React from 'react';
import { Container } from 'native-base';
import { Accordion, Header, SubHeader, Info } from '../../components';

export default function Screen() {
    return (
        <Container >
            <Header title="FAQ" />
            <SubHeader page={0} />
            <Accordion />
        </Container>
    )
}