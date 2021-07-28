
import React from 'react';
import { View, TouchableOpacity, Text, Image} from 'react-native';
import cancel from '../../../../assets/drawables/ic_cancel.png';
import emoji_smile from '../../../../assets/drawables/ic_smiley.png';
import emoji_frown from '../../../../assets/drawables/ic_frown.png';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Info(){
    const navigation = useNavigation();
    return(
        <View style={styles.row}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.bold}>Was this information helpful?</Text>
                <Image style={styles.img} source={cancel} />
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 11}}>
                <TouchableOpacity style={[styles.button, {marginRight: 6}]} onPress={() => {navigation.navigate('Report')}}>
                    <Image source={emoji_smile} />
                    <Text style={styles.buttonText}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, {marginLeft: 6}]}>
                    <Image source={emoji_frown} />
                    <Text style={styles.buttonText}>No</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
