import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import chevron from '../../../../assets/drawables/ic_chevron.png';
import { styles } from './styles';
const assets = '../../../../assets/drawables/'
const imgs: Array<object> = [{img: require(`${assets}donut_large.png`)},{img: require(`${assets}ic_shield.png`)},{img: require(`${assets}ic_box.png`)}, {img: require(`${assets}ic_dollar.png`)}]

export default function CategoriesList({data, swap}){
    const _renderItem = ({item, index}) => (
        <TouchableOpacity style={styles.itemContainer} onPress={() => {
            swap && swap(item.page)
        }}>
            <View style={{flexDirection: 'row', flex: 2, justifyContent: 'flex-start', alignItems: 'center'}}>
            <Image style={styles.icon} source={imgs[item.page].img} />
            <Text style={styles.title}>{item.title}</Text>
            </View>
            <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
            <Image source={chevron} style={styles.chevron} />
            </View>
            
        </TouchableOpacity>
    )

    const _keyExtractor = (item,index) => index.toString()
    return(
        <FlatList data={data} renderItem={_renderItem} keyExtractor={_keyExtractor} />
    )
}