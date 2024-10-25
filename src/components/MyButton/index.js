import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MyDimensi, fonts, windowWidth, } from '../../utils/fonts';
import { Icon } from 'react-native-elements';
import { Color, colors } from '../../utils';

export default function MyButton({
  title,
  warna = colors.primary,
  onPress,
  Icons,
  radius = 10,
  colorText = colors.white,
  fontWeight = 'normal',
  iconColor = colors.primary,
  borderSize = 0,
  kiri = true,
  borderColor = Color.blueGray[300],
}) {
  return (
    <TouchableOpacity
      style={styles(warna, radius,).btn}
      onPress={onPress}>
      
      {kiri && <Icon type="ionicon" name={Icons} color={iconColor} size={24} />}
      <Text
        style={{
          color: colorText,
          textAlign:"center",
          fontFamily:fonts.primary[700],
          fontSize:15
          // fontWeight: fontWeight,
        }}>
        {title}
      </Text>
      {!kiri && <Icon type="ionicon" name={Icons} color={iconColor} size={24} />}
    </TouchableOpacity>
  );
}

const styles = (warna, radius, borderSize, borderColor) =>
  StyleSheet.create({
    btn: {
      height: 50,
      borderRadius: radius,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: warna,
      borderWidth: borderSize,
      borderColor: borderColor,
      flexDirection: 'row',
      
    },
  });