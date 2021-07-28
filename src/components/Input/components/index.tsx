import React from 'react';
import { View, Text, TextInput, Image, TextInputProps} from 'react-native';
import left_arrow from '../../../../assets/drawables/left-arrow.png';
import {styles} from './styles';
import {colors, globalStyles} from "../../../utils";


export type TextInputComponentProps = TextInputProps & {label: string, containerStyle: object}

export default function TextInputComponent({label, containerStyle}: TextInputComponentProps){
    return(
        <View style={[styles.container, containerStyle]}>
            <Text style={styles.label}>{label}</Text>
            <View style={[styles.inputContainer,{flexDirection: 'row', alignItems: 'center'}]}>
                <TextInput style={{
                    flex: 9,
                    paddingLeft: 16,
                    fontFamily: globalStyles.fonts.FIRMA_REGULAR,
                    fontSize: 14,
                    lineHeight: 18,
                }} 
                placeholder="Tell us what happened"
                placeholderTextColor="#989898"
                />
                <View style={{flex: 1, alignItems: 'flex-start'}}>
                <Image style={{}} source={left_arrow} />
                </View>
                
            </View>
        </View>
    )
}