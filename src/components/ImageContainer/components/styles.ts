import {StyleSheet} from "react-native";
import {globalStyles, colors} from "../../../utils";

export const styles = StyleSheet.create({
    text: {
        color: colors.PRIMARY,
        fontWeight: '500',
        fontFamily: globalStyles.fonts.FIRMA_REGULAR,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: globalStyles.dimens.width * 0.053,
        paddingVertical: 32,
        backgroundColor: colors.WHITE,
        marginTop: 16,
    },
    image: {
        width: 17,
        height: 13,
        marginRight: 8,
    }
})