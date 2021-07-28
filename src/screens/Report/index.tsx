import React from 'react';
import {View, PermissionsAndroid, StatusBar} from 'react-native';
import {TextInput, TextField, ImageContainer, Button, Modal} from '../../components';
import {globalStyles, colors} from '../../utils';
import ImagePicker from 'react-native-image-crop-picker';

export default function Screen(){
    const [imageArray, setImageArray] = React.useState([]);
    const [showModal, setShowModal] = React.useState(false);
    const pickImage = () => {
        ImagePicker.openPicker({
            multiple: true
          }).then(images => {
            setImageArray(images)
          });
    }
    const requestCameraPermission = async () => {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            {
              title: "Cool Photo App Camera Permission",
              message:
                "Cool Photo App needs access to your camera " +
                "so you can take awesome pictures.",
              buttonNegative: "Cancel",
              buttonPositive: "OK"
            }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            pickImage()
          } else {
            console.log("Camera permission denied");
          }
        } catch (err) {
          console.warn(err);
        }
      };

    return(
        <View style={{flex: 1, backgroundColor: "#F4F5F7"}}>
            <StatusBar barStyle="dark-content" backgroundColor={'#F4F5F7'} />
            <View style={{backgroundColor: colors.WHITE, paddingTop: 33, paddingHorizontal: globalStyles.dimens.width * 0.053}}>
            <TextInput containerStyle={{marginBottom: 32}} label="What issue are you reporting"  />
            <TextField label="Anything else you would like us to know?" containerStyle={{marginBottom: 28}} />
            </View>
            <ImageContainer onPress={requestCameraPermission} images={imageArray} />
            <View style={{paddingTop: 48}}>
                <Button title="Submit" onPress={() => setShowModal(true)} />
            </View>
           <Modal visible={showModal} close={() => setShowModal(false)} />
        </View>
    )
}
