import React from 'react';
import {Header, Left, Body, Button, Title} from 'native-base';
import {StatusBar, Image} from 'react-native';
import {HeaderType, colors} from '../../../utils';
import back_button from '../../../../assets/drawables/ic_back.png';
import {styles} from './styles';

export default function HeaderComponent({title}: HeaderType) {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.WHITE} />
      <Header transparent>
        <Left>
          <Button transparent>
            <Image source={back_button} style={styles.backButton} />
          </Button>
        </Left>
        <Body>
          <Title style={styles.title}>{title}</Title>
        </Body>
      </Header>
    </>
  );
}
