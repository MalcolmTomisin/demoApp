import {StyleSheet} from 'react-native';
import {globalStyles, colors} from '../../../utils';


export const styles = StyleSheet.create({
    row: {
        height: 85,
        marginHorizontal: globalStyles.dimens.width * 0.053,
        paddingTop: 16,
        paddingHorizontal: 16,
        backgroundColor: colors.WHITE
    },
    border: {
        borderRadius: 8,
    },
    buttonText: {
        fontSize: 12,
        lineHeight: 16,
        fontFamily: globalStyles.fonts.FIRMA_REGULAR,
        color: colors.PRIMARY_BLACK,
        marginLeft: 8,
    },
    bold: {
        fontFamily: globalStyles.fonts.FIRMA_BOLD,
        lineHeight: 16,
        fontSize: 15,
    },
    button: {
        flex: 1,
        height: 31,
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: colors.BUTTON_GREY,
        alignItems: 'center',
        borderRadius: 8,
    },
    img: {
        height: 15,
        width: 15,
    },
    emoji: {
        height: 12,
        width: 12,
        marginRight: 8,
    }
})
