import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  return (
    <>
      {/* <View>
        <Text>ScreenHeaderBtn - {iconUrl} - {dimension}</Text>
      </View> */}
      <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
        <Image
          source={iconUrl}
          // source={{ URL: iconUrl }}
          // source={require("./menu.png")}
          // source={require("../../../assets/icons/menu.png")}
          resizeMode='cover'
          style={styles.btnImg(dimension)}
        />
      </TouchableOpacity>
    </>
  )
}

export default ScreenHeaderBtn