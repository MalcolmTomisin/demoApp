import React from 'react';
import {ImageBackground, Image, Text} from 'react-native';
import bg_fees from '../../../../assets/drawables/bg_fees.png';
import bg_general from '../../../../assets/drawables/bg_general.png';
import bg_product from '../../../../assets/drawables/bg_product.png';
import bg_safety from '../../../../assets/drawables/bg_safety.png';
import ic_box from '../../../../assets/drawables/ic_box_tsp.png';
import ic_cycle_broken from '../../../../assets/drawables/ic_broken_cycle_tsp.png';
import ic_shield from '../../../../assets/drawables/ic_shield_tsp.png';
import {styles} from './styles';

import {SubHeaderType} from '../../../utils';

export default function SubHeader({page}: SubHeaderType) {
  const pickImgForPage = () => {
    switch (page) {
      case 0:
        return {img: bg_general, title: 'General', icon: ic_cycle_broken};
      case 1:
        return {img: bg_safety, title: 'Safety and Security', icon: ic_shield};
      case 2:
        return {img: bg_product, title: 'Product', icon: ic_box};
      case 3:
        return {img: bg_fees, title: 'Fees and Charges', icon: ic_cycle_broken};
      default:
        return {img: '', title: '', icon: ''};
    }
  };
  return (
    <ImageBackground source={pickImgForPage().img} style={styles.container}>
      <Image source={pickImgForPage().icon} style={styles.icon} />
      <Text style={styles.title}>{pickImgForPage().title}</Text>
    </ImageBackground>
  );
}
