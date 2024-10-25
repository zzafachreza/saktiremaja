import { View, Text, ScrollView, TouchableNativeFeedback } from 'react-native'
import React from 'react'
import { colors } from '../../utils'
import { MyHeader } from '../../components'
import { Image } from 'react-native'

export default function Screening({navigation}) {
  return (
    <View style={{
        flex:1,
        backgroundColor:colors.white
    }}>
    <MyHeader title="Screening"/>
     <ScrollView>

     </ScrollView>
     <View style={{
        padding:20,
        flexDirection:"row",
        justifyContent:'flex-end',
        alignItems:"center"
     }}>
        <TouchableNativeFeedback onPress={() => navigation.navigate('IsiScreening')}>
            <View>
            <Image style={{
            width:50,
            height:50
        }} source={require('../../assets/add.png')}/>
            </View>
            
        </TouchableNativeFeedback>
     </View>
    </View>
  )
}