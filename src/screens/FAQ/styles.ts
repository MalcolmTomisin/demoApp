import {StyleSheet} from 'react-native';
import {globalStyles, colors} from '../../utils';

export const styles = StyleSheet.create({
    lowerContainer: {
        backgroundColor: colors.BUTTON_GREY,
        paddingTop: 12,
        paddingBottom: 68
    },
    categoryHeader: {
        fontFamily: globalStyles.fonts.FIRMA_BOLD,
        fontSize: 15,
        color: colors.PRIMARY_BLACK,
        marginTop: 22,
        marginStart: globalStyles.dimens.width * 0.053,
        marginBottom: 16,
    },
    container: {
        flex: 1,
        backgroundColor: colors.WHITE
    }
})