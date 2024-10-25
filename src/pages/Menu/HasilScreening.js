import { View, Text, ScrollView } from 'react-native'
import React from 'react'

import { MyButton, MyHeader } from '../../components'
import { colors, fonts } from '../../utils'

export default function HasilScreening({navigation}) {
  return (
    <View style={{
        flex:1,
        backgroundColor:colors.white
    }}>
    <MyHeader title="Hasil Screening"/>

    <ScrollView>
        <View style={{
            padding:20
        }}>


        {/* Video */}
        <View>
            <Text style={{
                fontFamily:fonts.primary[600],
                fontSize:20,
                textAlign:"center",
                color:colors.primary,
            }}>Silakan tonton video di bawah ini :</Text>
        </View>

        <View style={{
            paddingTop:20
        }}>
            <MyButton onPress={() => navigation.navigate('Screening')} title="Selesai"/>
        </View>

        </View>
    </ScrollView>
    </View>
  )
}