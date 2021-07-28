
import {StyleSheet} from "react-native";
import {globalStyles, colors} from "../../../utils";

export const styles = StyleSheet.create({
    buttonText: {
        fontSize: 14,
        lineHeight: 20,
        fontFamily: globalStyles.fonts.FIRMA_REGULAR,
        fontWeight: '500',
        color: colors.WHITE,
    },
    button: {
        width: 235,
        height: 50,
        alignSelf: "center",
        backgroundColor: colors.PRIMARY,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})