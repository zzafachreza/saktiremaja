import { View, Text, ScrollView, TouchableNativeFeedback, Linking } from 'react-native'
import React, { useState } from 'react'
import { colors, fonts } from '../../utils'
import { MyHeader } from '../../components'
import { Image } from 'react-native'

export default function Konsultasi({navigation}) {
    const [comp, setComp] = useState({
        tlp_bu_dhita:'6282231216464',
        tlp_bu_fajar:'6281259980001',

    })
  return (
    <View style={{
        flex:1,
        backgroundColor:colors.white
    }}>
        <MyHeader title="Konsultasi"/>

        <ScrollView>
            <View style={{
                padding:20
            }}>

            {/* nomor nomor konsultasi */}

            <View style={{
                flexDirection:'row',
                flexWrap:'wrap',
                justifyContent:"space-between",
            }}>
                <TouchableNativeFeedback onPress={() => {
                    let urlWA = 'https://wa.me/' + comp.tlp_bu_dhita + `?Halo! Saya ingin melakukan konsultasi lebih lanjut. Mohon bantuannya, terima kasih.`;
                    Linking.openURL(urlWA)
                }}>
                    <View style={{
                        padding:10,
                        backgroundColor:colors.primary,
                        borderRadius:20,
                        marginTop:20
                    }}>

                    <View>
                        <Image style={{
                            width:105,
                            height:105,
                        }} source={require('../../assets/whatsapp.png')}/>
                    </View>

                    <View>
                        <Text style={{
                            fontFamily:fonts.primary[700],
                            fontSize:20,
                            color:colors.white,
                            textAlign:"center"
                        }}>Bu Dhita</Text>

                    </View>
                        
                    </View>
                </TouchableNativeFeedback>


                <TouchableNativeFeedback onPress={() => {
                      let urlWA = 'https://wa.me/' + comp.tlp_bu_fajar + `Halo! Saya ingin melakukan konsultasi lebih lanjut. Mohon bantuannya, terima kasih.`;
                      Linking.openURL(urlWA)
                }}>
                    <View style={{
                        padding:10,
                        backgroundColor:colors.primary,
                        borderRadius:20,
                        marginTop:20
                    }}>

                    <View>
                        <Image style={{
                            width:105,
                            height:105,
                        }} source={require('../../assets/whatsapp.png')}/>
                    </View>

                    <View>
                        <Text style={{
                            fontFamily:fonts.primary[700],
                            fontSize:20,
                            color:colors.white,
                            textAlign:"center"
                        }}>Bu Fajar</Text>

                    </View>
                        
                    </View>
                </TouchableNativeFeedback>


                <TouchableNativeFeedback>
                    <View style={{
                        padding:10,
                        backgroundColor:colors.primary,
                        borderRadius:20,
                        marginTop:20
                    }}>

                    <View>
                        <Image style={{
                            width:105,
                            height:105,
                        }} source={require('../../assets/whatsapp.png')}/>
                    </View>

                    <View>
                        <Text style={{
                            fontFamily:fonts.primary[700],
                            fontSize:20,
                            color:colors.white,
                            textAlign:"center"
                        }}>Kak Sandy</Text>

                    </View>
                        
                    </View>
                </TouchableNativeFeedback>


                <TouchableNativeFeedback>
                    <View style={{
                        padding:10,
                        backgroundColor:colors.primary,
                        borderRadius:20,
                        marginTop:20
                    }}>

                    <View>
                        <Image style={{
                            width:105,
                            height:105,
                        }} source={require('../../assets/whatsapp.png')}/>
                    </View>

                    <View>
                        <Text style={{
                            fontFamily:fonts.primary[700],
                            fontSize:20,
                            color:colors.white,
                            textAlign:"center"
                        }}>Kak Tami</Text>

                    </View>
                        
                    </View>
                </TouchableNativeFeedback>
            </View>


            </View>
        </ScrollView>
    </View>
  )
}