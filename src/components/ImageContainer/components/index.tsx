import { TouchableOpacity, Image, Text, View, FlatList } from "react-native";
import React from "react";
import camera from "../../../../assets/drawables/ic_cam.png";
import {styles} from "./styles";
import cancel from "../../../../assets/drawables/Duotone.png";
import camera_grey from "../../../../assets/drawables/ic_cam_grey.png";
import {globalStyles, colors} from "../../../utils"

export default function ImageContainer({onPress, images}){
    const _renderImage = ({item, index}) => (
        <View style={{width: 88, height: 86, justifyContent: 'center', alignItems: 'center', marginHorizontal: 8}}>
            <Image style={{width: 88, height: 86}}  source={{uri: images[index].path}} />
            <TouchableOpacity style={{position: 'absolute', top: 0, right: 0}}>
                <Image style={{width: 18, height: 18}} source={cancel} />
            </TouchableOpacity>
        </View>
    );

    const _keyExtractor = (item,index) => index.toString();

    if(images.length > 0){
        return(
            <View style={{backgroundColor: colors.WHITE, marginTop: 16, paddingLeft: globalStyles.dimens.width * 0.08, paddingRight: globalStyles.dimens.width * 0.053, paddingVertical: 24}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14}}>
                    <Text style={{fontFamily: globalStyles.fonts.FIRMA_BOLD, fontSize: 14, lineHeight: 21, color: colors.PRIMARY_BLACK}}>Images</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Image source={camera_grey} style={{marginRight: 8}} />
                        <Text style={{fontSize: 12, lineHeight: 21, color: '#6C757D'}}>Add screenshot</Text>
                    </View>
                </View>
                <View style={{backgroundColor: colors.GREY, height: 1, marginBottom: 10}}></View>
                <FlatList data={images} renderItem={_renderImage} keyExtractor={_keyExtractor} horizontal />
            </View>
        )
    }
    return(
        <TouchableOpacity onPress={onPress} style={styles.container}>
                <Image style={styles.image} source={camera} />
                <Text style={styles.text}>Attach screenshot</Text>
        </TouchableOpacity>
    )
}