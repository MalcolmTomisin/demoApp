import {StyleSheet} from 'react-native';
import {colors, globalStyles} from '../../../utils';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingStart: globalStyles.dimens.width * 0.058,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: globalStyles.dimens.width,
    height: 58,
  },
  icon: {
    height: 30,
    width: 30,
    marginEnd: globalStyles.dimens.width * 0.042,
  },
  title: {
    fontFamily: globalStyles.fonts.FIRMA_BOLD,
    color: colors.WHITE,
    fontSize: 20,
  },
});
