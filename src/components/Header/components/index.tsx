import React from 'react';
import {Header, Left, Body, Button, Title, Right} from 'native-base';
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
        <Body style={{justifyContent: 'center', alignItems: "center"}}>
          <Title style={styles.title}>{title}</Title>
        </Body>
        <Right>
          <Button transparent>
            
          </Button>
        </Right>
      </Header>
    </>
  );
}
