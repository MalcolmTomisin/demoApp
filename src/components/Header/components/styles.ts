import {StyleSheet} from 'react-native';
import {colors, globalStyles} from '../../../utils';

export const styles = StyleSheet.create({
  backButton: {
    width: 16,
    height: 14,
  },
  title: {
    color: colors.PRIMARY_BLACK,
    fontFamily: globalStyles.fonts.FIRMA_BOLD,
    fontSize: 16,
    lineHeight: 16,
  },
});
