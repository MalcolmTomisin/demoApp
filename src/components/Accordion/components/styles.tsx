import {StyleSheet} from 'react-native';
import {colors, globalStyles} from '../../../utils';

export const styles = StyleSheet.create({
  header: {
    fontFamily: globalStyles.fonts.FIRMA_BOLD,
    fontSize: 15,
    lineHeight: 16,
    color: colors.PRIMARY,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: colors.GREY,
  },
  contentText: {
    fontSize: 15,
    lineHeight: 22,
    color: colors.PRIMARY_BLACK,
      fontFamily: globalStyles.fonts.FIRMA_REGULAR,
    marginVertical: 15,
  },
});
