import React from 'react';
import {Accordion, Icon} from 'native-base';
import {View, Text, Image} from 'react-native';
import add from '../../../../assets/drawables/ic_add.png';
import {styles} from './styles';
import {dataArray} from './data';
import {colors, globalStyles} from '../../../utils';

export default function AccordionComponent() {
  const _renderHeader = (item, expanded) => {
    console.log('itemsss', item);
    return (
      <View style={{width: '100%', paddingHorizontal: globalStyles.dimens.width * 0.05,}}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{item.title}</Text>
        {!expanded ? <Image source={add} /> : <Icon name="remove" style={{fontSize: 20}} />}
      </View>
      {!expanded && <View style={styles.divider} /> }
      </View>
    );
  };

  const _renderContent = item => (
    <View style={{width: '100%', paddingHorizontal: globalStyles.dimens.width * 0.05,}}>
      <Text style={styles.contentText}>{item.content}</Text>
      <View style={styles.divider} />
    </View>
  );
  return (
      <Accordion
      renderHeader={_renderHeader}
      renderContent={_renderContent}
      dataArray={dataArray}
      animation={true}
      
    />
  );
}
