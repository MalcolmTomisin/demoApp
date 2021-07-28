
import React from 'react';
import {TouchableOpacity, View, Text, Image, Modal} from 'react-native';
import { colors, globalStyles } from '../../../utils';
import activity from '../../../../assets/drawables/Activity.png';
import alert from '../../../../assets/drawables/ic_alert.png';
import info from '../../../../assets/drawables/ic_info.png';

export default function ModalComponent({visible, close}){
    return(
        <Modal animationType="slide" transparent visible={visible} onRequestClose={close}>
            <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end', backgroundColor: "#93939326"}}>
                <View style={{height: 263, backgroundColor: colors.WHITE, borderTopStartRadius: 24, borderTopEndRadius: 24, width: globalStyles.dimens.width, paddingTop: 32}}>
                    <Text style={{fontFamily: globalStyles.fonts.FIRMA_BOLD, fontSize: 16, color: colors.PRIMARY_BLACK, textAlign: 'center'}}>What issue would you like to resolve?</Text>
                    <View style={{paddingHorizontal: globalStyles.dimens.width * 0.058, paddingTop: 20}}>
                        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', paddingVertical: 16}}>
                            <Image style={{marginRight: 16}} source={activity} /> 
                            <Text style={{fontSize: 15, fontFamily: globalStyles.fonts.FIRMA_REGULAR, fontWeight: '500', color: colors.PRIMARY_BLACK}}>Report suspicious activity</Text>
                        </TouchableOpacity >
                        <View style={{height: 1, backgroundColor: colors.GREY}} />
                        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', paddingVertical: 16}}>
                        <Image style={{marginRight: 16}} source={alert} /> 
                        <Text style={{fontSize: 15, fontFamily: globalStyles.fonts.FIRMA_REGULAR, fontWeight: '500', color: colors.PRIMARY_BLACK}}>Report a problem</Text>
                        </TouchableOpacity>

                        <View style={{height: 1, backgroundColor: colors.GREY}} />
                        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', paddingVertical: 16}}>
                        <Image style={{marginRight: 16}} source={info} /> 
                        <Text style={{fontSize: 15, fontFamily: globalStyles.fonts.FIRMA_REGULAR, fontWeight: '500', color: colors.PRIMARY_BLACK}}>Other</Text>
                        </TouchableOpacity>
            
                    </View>
                </View>

            </View>
        </Modal>
    )
}