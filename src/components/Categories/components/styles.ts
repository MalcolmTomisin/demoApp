import {StyleSheet} from 'react-native';
import {globalStyles, colors} from '../../../utils'; 

export const styles = StyleSheet.create({
    chevron: {
        width: 6,
        height: 12,
    },
    title: {
        fontSize: 15,
        fontFamily: globalStyles.fonts.FIRMA_REGULAR,
        color: colors.PRIMARY_BLACK,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginVertical: 8,
        backgroundColor: colors.WHITE,
        borderRadius: 8,
        height: 68,
        marginHorizontal: globalStyles.dimens.width * 0.053
    },
    icon: {
        height: 36,
        width: 36,
        marginRight: 16
    }
})