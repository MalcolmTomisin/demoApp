import { StyleSheet } from "react-native";
import {colors, globalStyles} from "../../../utils";

export const styles = StyleSheet.create({
    label: {
        fontFamily: globalStyles.fonts.FIRMA_REGULAR,
        fontWeight: '500',
        color: colors.PRIMARY_BLACK,
        fontSize: 15,
        marginBottom: 13
    },
    container: {
        
    },
    inputContainer: {
        height: 50,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.GREY
    }
})