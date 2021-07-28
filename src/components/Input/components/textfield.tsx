import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {styles} from './styles';
import {TextInputComponentProps} from './index';
import {globalStyles, colors} from '../../../utils';

export default function TextField({label, containerStyle}: TextInputComponentProps){
    return(
        <View style={[styles.container, containerStyle]}>
            <Text style={styles.label}>{label}</Text>
            
                <TextInput style={{
                    paddingLeft: 16,
                    fontFamily: globalStyles.fonts.FIRMA_REGULAR,
                    fontSize: 14,
                    lineHeight: 18,
                    height: 117,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.GREY,
        textAlignVertical: "top",
                }} 
                placeholder="Any extra information to describe the issue"
                placeholderTextColor="#989898"
                multiline
                
                />
                
        </View>
    )
}