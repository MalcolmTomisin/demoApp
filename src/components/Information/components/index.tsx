import { Image } from 'native-base';
import React from 'react';
import { View, TouchableOpacity, Text} from 'react-native';
import cancel from '../../../../assets/drawables/ic_cancel.png';
import emoji_smile from '../../../../assets/drawables/ic_smiley.png';
import emoji_frown from '../../../../assets/drawables/ic_frown.png';
import { styles } from './styles';

export default function Info(){
    return(
        <View style={styles.row}>
            <View>
                <Text style={styles.bold}>Was this information helpful?</Text>
                <Image style={styles.img} source={cancel} />
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button}>
                    <Image source={emoji_smile} />
                    <Text style={styles.buttonText}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Image source={emoji_frown} />
                    <Text style={styles.buttonText}>No</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
