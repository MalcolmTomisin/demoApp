import {Dimensions} from 'react-native';

export type HeaderType = {
  title: string;
};

export type SubHeaderType = {
  page: number;
};

export const colors = {
  WHITE: '#fff',
  BLACK: '#000000',
  PRIMARY_BLACK: '#2F2F2F',
  PRIMARY: '#372AA4',
  GREY: '#DEE2E6',
  BUTTON_GREY: '#F4F5F7'
};

export const globalStyles = {
  fonts: {
    FIRMA_BOLD: 'FirmaBold',
    FIRMA_REGULAR: 'FirmaRegular',
  },
  dimens: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
};
