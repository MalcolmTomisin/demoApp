import React from 'react';
import {Accordion, Icon} from 'native-base';
import {View, Text, Image} from 'react-native';
import add from '../../../../assets/drawables/ic_add.png';
import {styles} from './styles';
import {dataArray} from './data';

export default function AccordionComponent() {
  const _renderHeader = (item, expanded) => {
    console.log('itemsss', item);
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{item.title}</Text>
        {expanded ? <Image source={add} /> : <Icon name="remove" />}
      </View>
    );
  };

  const _renderContent = item => (
    <View>
      <Text>{item.content}</Text>
      <View style={styles.divider} />
    </View>
  );
  return (
    <Accordion
      renderHeader={_renderHeader}
      renderContent={_renderContent}
      dataArray={dataArray}
      animation={true}
      expanded={true}
    />
  );
}
