import {StyleSheet} from 'react-native';
import {globalStyles, colors} from '../../../utils';


export const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    border: {
        borderRadius: 8,
    },
    buttonText: {
        fontSize: 12,
        lineHeight: 16,
        fontFamily: globalStyles.fonts.FIRMA_REGULAR,
        color: colors.BUTTON_GREY
    },
    bold: {
        fontFamily: globalStyles.fonts.FIRMA_BOLD,
        lineHeight: 16,
        fontSize: 15,
    },
    button: {
        width: 145,
        height: 31,
        justifyContent: 'space-around',
    },
    img: {
        height: 15,
        width: 15,
    },
    emoji: {
        height: 12,
        width: 12
    }
})
