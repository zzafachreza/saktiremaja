import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  Animated,
  ImageBackground,
  TouchableWithoutFeedback,
  TouchableOpacity,
  SafeAreaView,
  ScrollView
} from 'react-native';
import { MyButton, MyCalendar, MyGap, MyHeader, MyInput, MyPicker } from '../../components';
import { MyDimensi, colors, fonts, windowHeight, windowWidth, Color } from '../../utils';
import { MYAPP, apiURL, api_token, getData, storeData } from '../../utils/localStorage';
import { BackgroundImage } from 'react-native-elements/dist/config';
import { color } from 'react-native-reanimated';
import axios from 'axios';
import moment from 'moment';
import { useToast } from 'react-native-toast-notifications';
import MyLoading from '../../components/MyLoading';

import { Icon } from 'react-native-elements';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const MyMenu = ({ onPress, img, label, backgroundColor, desc }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: windowWidth / 4,
        height: windowWidth / 4,
      }}>
        <View style={{
          backgroundColor: backgroundColor,
          borderRadius: 12,
          width: windowWidth / 4,
          height: windowWidth / 4,
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center'

        }}>
          <Image source={img} style={{
            width: windowWidth / 5, height: windowWidth / 5,
          }} />
        </View>
        <Text style={{
          marginTop: 10,
          color: colors.black,
          ...fonts.caption,
          textAlign: 'center',
          maxWidth: '85%'
        }}>{label}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default function Home({ navigation, route }) {
  const [user, setUser] = useState({});

  const __getUser = () => {
    getData('user').then(u => {
      setUser(u)
    })
  }

  useEffect(() => {
    __getUser();
  }, [])
  return (
    <ImageBackground source={require('../../assets/bghome.png')} style={{
      flex: 1,
      backgroundColor: colors.white,
      width: "100%",
      height: "100%"
    }}>

      <ScrollView>

        <View style={{
          padding: 10
        }}>

        <View style={{
          padding:10,
          flexDirection:"row",
          justifyContent:"space-between",
          alignItems:"center",
          marginTop:50
        }}>
      <View>
        <Text style={{
          fontFamily:fonts.primary[700],
          fontSize:20,
          color:colors.white,

        }}>Hi, Riri Indriyani!</Text>
                <Text style={{
          fontFamily:fonts.primary[700],
          fontSize:20,
          color:colors.white,
          
        }}>SAKTI REMAJA</Text>
      </View>

      <View style={{
        alignItems:"center"
      }}>
        <Image style={{
          width:61,
          height:54,

        }} source={require('../../assets/logohome.png')}/>
      </View>

        </View>


        {/* slider */}
        <View style={{
          padding:10,
  
          marginTop:-0,
          alignItems:'center'
        }}>

        <Image style={{
          width:320,
          height:213,
        }} source={require('../../assets/dummy_slider.png')}/>
          
        </View>
        {/* end slider */}

        {/* main menu */}
        <View style={{
          margin:10,
          padding:0,
        }}>

        <View>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Screening')}>
            <View  style={{
              flex:1,
              backgroundColor:'white',
              padding:10,
              borderRadius:20,
              flexDirection:"row",
              justifyContent:"space-between",
              alignItems:'center',
              borderWidth:2,
              borderColor:colors.primary
              
            }}>
            <View>
              <Text style={{
                fontFamily:fonts.primary[700],
                fontSize:35,
                color:colors.primary,
                top:-2

              }}>Screening</Text>
            </View>

            <View>
              <Image style={{
                width:74,
                height:74,
              }} source={require('../../assets/screening_logo.png')}/>
            </View>

            </View>
          </TouchableWithoutFeedback>
        </View>

        <MyGap jarak={20}/>

        <View>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Konsultasi')}>
            <View  style={{
              flex:1,
              backgroundColor:'white',
              padding:10,
              borderRadius:20,
              flexDirection:"row",
              justifyContent:"space-between",
              alignItems:'center',
              borderWidth:2,
              borderColor:colors.primary
              
            }}>
            <View>
              <Text style={{
                fontFamily:fonts.primary[700],
                fontSize:35,
                color:colors.primary,
                top:-2

              }}>Konsultasi</Text>
            </View>

            <View>
              <Image style={{
                width:74,
                height:74,
              }} source={require('../../assets/konsultasi_Logo.png')}/>
            </View>

            </View>
          </TouchableWithoutFeedback>
        </View>

        </View>


        </View>
      </ScrollView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({})